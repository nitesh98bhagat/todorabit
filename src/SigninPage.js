import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authInstance } from "./config/firebaseConfig";

function SigninPage() {
  // const auth = getAuth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(authInstance, provider);
  };

  return (
    <div className="min-h-screen w-screen flex flex-row  items-center justify-center text-neutral-400">
      <div className="shadow-xl p-3 bg-neutral-800/50 rounded-lg flex flex-col max-w-md items-center justify-center space-y-2">
        <h1 className="text-2xl font-bold text-neutral-300">Sign in</h1>
        <FcGoogle size={100} />

        <button
          onClick={signInWithGoogle}
          className="w-full p-2 border border-neutral-700 rounded-lg"
        >
          Continue with Google
        </button>
        <span>
          {" By clicking continue, you're agreed to our "}
          <strong className="">Terms of use</strong>
          <Link to="/terms-of-use">
            <span className="text-green-600"> Click here </span> to read them.
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SigninPage;
