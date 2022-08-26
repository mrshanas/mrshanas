import { FC } from "react";
import Lottie from "lottie-react";

import DevAnimation from "@/assets/animations/loading.json";

type Props = {};

const PageLoader: FC = (props: Props) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center z-50 backdrop-blur-md items-center absolute top-0 bottom-0 left-0 right-0">
      <Lottie animationData={DevAnimation} loop />
    </div>
  );
};

export default PageLoader;
