const GOOGLE_CLIENT_ID =
  "";
const GOOGLE_CLIENT_SECRET = "";
const GOOGLE_REDIRECT_URL = "";
const GOOGLE_ENDPOINT_URL = ""

export function getGooglgeOauthUrl() {
  const roolUrl = "https://accounts.google.com/o/oauth2/v2/auth";

  const options = {
    redirect_uri: GOOGLE_REDIRECT_URL,
    client_id: GOOGLE_CLIENT_ID,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ].join(" "),
  };

  console.log(options);
  const qs = new URLSearchParams(options);

  console.log(qs.toString());

  return `${roolUrl}?${qs.toString()}`;
}
