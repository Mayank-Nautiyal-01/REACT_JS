import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AiOutlineLoading3Quarters className="h-12 w-12 text-blue-500 animate-spin" />
    </div>
  );
}

export default Loading;
