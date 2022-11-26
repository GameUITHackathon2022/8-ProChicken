import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Layout from "../components/Layout";

const ProfileDetailPage = () => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      image: "",
    },
  });
  return (
    <div className="page-container">
      <form
        onSubmit={handleSubmit()}
        className="flex flex-col items-center justify-center p-10"
      >
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Thông tin cá nhân
        </h2>
        <Layout>
          <div className="flex flex-col mb-10 font-semibold gap-y-3">
            <label htmlFor="fullname" className="flex items-center gap-x-2">
              Tên
            </label>
            <Input
              control={control}
              name="fullname"
              type="text"
              placeholder="Update your fullname"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="email" className="flex items-center gap-x-2">
              Email
            </label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Update your email address"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
        </Layout>
        <Layout>
          <div className="flex flex-col mb-10 font-semibold gap-y-3">
            <label htmlFor="password" className="flex items-center gap-x-2">
              Password
            </label>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Update your password"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="company" className="flex items-center gap-x-2">
              Your company
            </label>
            <Input
              control={control}
              name="company"
              type="text"
              placeholder="Update your company"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
        </Layout>
        <Layout>
          <div className="flex flex-col mb-10 font-semibold gap-y-3">
            <label htmlFor="mssv" className="flex items-center gap-x-2">
              Your Student ID
            </label>
            <Input
              control={control}
              name="mssv"
              type="text"
              placeholder="Update your Student ID"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="location" className="flex items-center gap-x-2">
              Your location
            </label>
            <Input
              control={control}
              name="location"
              type="text"
              placeholder="Update your location"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
        </Layout>
        <button
          type="submit"
          className="p-5 px-10 text-white bg-orange-400 rounded-md"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default ProfileDetailPage;
