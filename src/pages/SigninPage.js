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
      toast.success("Đăng nhập thành công");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    toast.success("Welcome back!!!");
  };

  return (
    <div className="h-[100vh] px-10">
      <form
        className="p-5 border-2 border-primary rounded-md mx-auto mt-20 max-w-lg"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h2 className="mb-10 text-2xl font-semibold text-center">Đăng Nhập</h2>
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
          <label htmlFor="password">Mật khẩu</label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Enter your password"
          ></Input>
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-white bg-primary rounded-md 
            hover:bg-green-800 transition
          "
        >
          Đăng nhập
        </button>
        <div className="flex gap-x-4 mt-4">
          <p>Chưa là thành viên?</p>
          <NavLink to="/signup" className={"text-primary"}>
            Đăng ký
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
