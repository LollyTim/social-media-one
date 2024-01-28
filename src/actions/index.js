import { auth, provider } from "../firebase";

export const sighInApi = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((playload) => {
        console.log(playload);
      })
      .catch((error) => alert(error.message));
  };
};
