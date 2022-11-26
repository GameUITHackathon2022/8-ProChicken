import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { signinUser } from "../api/user";
import { useUserContext } from "../context/UserContext";

const SignInPage = () => {
  const { control, handleSubmit } = useForm({ mode: "onChange" });
  const navigate = useNavigate();

  const { setUser } = useUserContext();

  const handleSignIn = async (value) => {
    try {
      const userBack = await signinUser(value.email, value.password);

      setUser(userBack);
      localStorage.setItem("user", JSON.stringify(userBack));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    toast.success("Welcome back!!!");
  };

  return (
    <div className="h-[100vh] px-10">
      <form
        className="p-5 border-2 border-orange-400 rounded-md mx-auto mt-20 max-w-lg"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h2 className="mb-10 text-2xl font-semibold text-center">Sign In</h2>
        <div className="flex flex-col font-semibold gap-y-3">
          <label htmlFor="email">Email</label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Enter your email address"
          ></Input>
        </div>
        <div className="flex flex-col font-semibold gap-y-3">
          <label htmlFor="password">Password</label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Enter your password"
          ></Input>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-white bg-orange-300 rounded-md 
            hover:bg-orange-500 transition
          "
        >
          Submit
        </button>
        <div className="flex gap-x-4 mt-4">
          <p>Not a member?</p>
          <NavLink to="/signup">Signup</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
