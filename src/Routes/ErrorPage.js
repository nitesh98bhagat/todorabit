import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full justify-center text-neutral-600">
      <FaHeartBroken size={152} />
      <h1 className="text-5xl font-bold">PAGE NOT FOUND!!!</h1>
      <span className="text-2xl">
        {"We can't find what you are looking for."}
      </span>
      <Link to={"/"}>Go to Home</Link>
    </div>
  );
}

export default ErrorPage;
