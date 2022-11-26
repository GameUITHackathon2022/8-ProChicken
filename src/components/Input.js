import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, name = "", type = "text", ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <input
      className="p-3 mb-6 border-2 border-orange-400 rounded-md w-[100%] transition"
      type={type}
      id={name}
      {...field}
      {...props}
    ></input>
  );
};

export default Input;
