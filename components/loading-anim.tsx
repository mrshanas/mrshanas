"use client";

import Lottie from "lottie-react";

import loading from "@assets/animations/loading.json";

const LoadingAnim = () => {
  return (
    <div>
      <Lottie animationData={loading} loop />
    </div>
  );
};

export default LoadingAnim;
