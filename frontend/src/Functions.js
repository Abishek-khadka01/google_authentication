const GOOGLE_CLIENT_ID =
  "888376131566-oc8698u9ahh1oa40ks514t40m3gvc86k.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_REDIRECT_URL = "http://localhost:4000/auth/google";
const GOOGLE_ENDPOINT_URL = "http://localhost:4000";

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
