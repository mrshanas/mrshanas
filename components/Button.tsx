import React from "react";

type Props = {
  text: string;
};

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button className="dark:text-black text-white font-bold rounded-md p-2 w-full bg-purple dark:bg-lightGreen">
      {props.text}
    </button>
  );
};

export default Button;
