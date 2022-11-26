import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/user";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// const schema = yup.object({
//   name: yup.string().required("Please enter your fullname"),
//   email: yup
//     .string()
//     .email("Your email is not valid!")
//     .required("Please enter your email address"),
//   password: yup
//     .string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Please enter your password"),
// });

const SignUpPage = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleSignUp = async (value) => {
    value.greenPoint = 0;
    value.listEvent = [];
    console.log("frontend", value);

    if (value.password !== value.confirm) {
      toast.error("Confirm password incorrect. Please enter again.");
      return;
    } else {
      const key = `confirm`;
      delete value[key];
      try {
        const data = await signupUser(value);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      console.log(arrErrors[0]?.message);
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

  return (
    <div className="mt-2 mx-auto max-w-[500px]">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="p-5 border-2 border-primary rounded-md w-[500px]"
      >
        <h2 className="mb-10 text-2xl font-semibold text-center">Đăng Ký</h2>
        <div className="md:flex justify-center gap-3">
          <div className="flex flex-col font-semibold gap-3">
            <label htmlFor="name" className="flex items-center gap-x-2">
              Tên
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="name"
              type="text"
              placeholder="Enter your name"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-3">
            <label htmlFor="email" className="flex items-center gap-x-2">
              Email
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </div>
        </div>
        <div className="md:flex justify-center gap-x-3">
          <div className="flex flex-col font-semibold gap-3">
            <label htmlFor="password" className="flex items-center gap-x-2">
              Mật khẩu
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Enter your password"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-3">
            <label htmlFor="confirm" className="flex items-center gap-x-2">
              Xác nhận mật khẩu
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="confirm"
              type="password"
              placeholder="Confirm your password"
            ></Input>
          </div>
        </div>
        <div className="md:flex justify-center gap-x-3">
          <div className="flex flex-col font-semibold gap-3">
            <label htmlFor="company">Tổ chức</label>
            <Input
              control={control}
              name="company"
              type="text"
              placeholder="Enter your company"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-3">
            <label htmlFor="studentCode">
              MSSV <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="studentCode"
              type="text"
              placeholder="Enter your MSSV"
            ></Input>
          </div>
        </div>
        <div className="flex justify-center w-full flex-col font-semibold gap-y-3">
          <label htmlFor="location">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <Input
            control={control}
            name="location"
            type="text"
            placeholder="Enter your location"
          ></Input>
        </div>
        <button
          className="w-full p-3 mt-5 text-white bg-primary rounded-md
          hover:bg-green-700 transition"
          type="submit"
        >
          Đăng ký
        </button>
        <div className="flex gap-x-3 my-5">
          <p>Đã là thành viên?</p>
          <NavLink to="/signin" className="text-primary">
            Đăng nhập
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
