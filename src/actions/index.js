// Import necessary modules
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../fireb";

// Action creator using redux-thunk
export const signInAPI = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    localStorage.setItem("token", result.user.accessToken);
    localStorage.setItem("user", JSON.stringify(result.user));
    // Dispatch the success action or update the state as needed
    dispatch({ type: "SIGN_IN_SUCCESS", payload: result });
  } catch (error) {
    console.error(error);
    // Dispatch the failure action or update the state as needed
    dispatch({ type: "SIGN_IN_FAILURE", payload: error });
  }
};
