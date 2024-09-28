// import logo from "./logo.svg";
import "./App.css";
import { getGooglgeOauthUrl } from "./Functions";
import axios from "axios";

function App() {
  async function HandleSubmit() {
    await axios.post("http://localhost:4000/auth/google/login");
    console.log("hello from the google");
  }

  return (
    <div>
      <a href={getGooglgeOauthUrl()} onClick={HandleSubmit}>
        Login with Google
      </a>
    </div>
  );
}

export default App;
