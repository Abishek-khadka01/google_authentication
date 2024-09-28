import qs from "qs";
import axios from "axios";
import jwt from "jsonwebtoken";
import User from "./user.models.js";
export const oauthHandler = async (req, res) => {
  try {
    // get the code from the qs
    const code = req.query.code;
    console.log(`Code is ${code}`);

    // get the id and access token from the code
    const { id_token, access_token } = await getGoogleOauthtokens(code);

    console.log(`id_token = ${id_token} \n access_token = ${access_token}`);
    // get the user with tokens
    const { email, name, picture, sub } = await jwt.decode(id_token);
    console.log(email, name, picture, sub);
    // create a session

    const user = await User.findOne({ email });
    if (!user) {
      const newUser = await User.create({
        email,
        name,
        picture,
        Google_id: sub,
      });

      console.log("new user created", newUser);
      res.redirect("http://localhost:3000/");
    } else {
      res.redirect("http://localhost:3000/");
    }

    // set cookies

    // redirect
  } catch (error) {
    console.log(error);
  }
};

export async function getGoogleOauthtokens(code) {
  const url = "https://oauth2.googleapis.com/token"; // fixed URL
  console.log(code);

  const values = {
    code,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URL,
    grant_type: "authorization_code",
  };

  console.log(values);
  console.log("stringify", qs.stringify(values));

  try {
    const res = await axios.post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve Google OAuth tokens");
  }
}
