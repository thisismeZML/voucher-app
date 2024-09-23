import React from "react";

const SkeletonForm = () => {
  return (
    <div className="animate-pulse max-w-md flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <div className="h-5 bg-gray-300 rounded-md w-1/4"></div> {/* Label */}
        <div className="h-10 bg-gray-300 rounded-md w-full"></div> {/* Input */}
      </div>
      {/* Product Price */}
      <div className="flex flex-col gap-3">
        <div className="h-5 bg-gray-300 rounded-md w-1/4"></div> {/* Label */}
        <div className="h-10 bg-gray-300 rounded-md w-full"></div> {/* Input */}
      </div>
      {/* Checkbox and Label */}
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 bg-gray-300 rounded-md"></div> {/* Checkbox */}
        <div className="h-5 bg-gray-300 rounded-md w-2/3"></div> {/* Label */}
      </div>
      {/* Submit Button */}
      <div className="h-10 bg-gray-300 rounded-md w-full"></div> {/* Button */}
    </div>
  );
};

export default SkeletonForm;
