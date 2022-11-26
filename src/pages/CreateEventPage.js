import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useUserContext } from "../context/UserContext";
import { createEvent } from "../api/user";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const [content, setContent] = useState("");
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
  });

  const ref = useRef();

  const { user } = useUserContext();

  const onChange = (content, delta, source, editor) => {
    const contentFromReactQuill = editor.getContents().ops[0].insert;
    setContent(contentFromReactQuill);
    console.log(content);
  };

  const navigate = useNavigate();

  const handleAddPost = async (value) => {
    // delete value["author"];
    value.description = content;
    value.userCreated = `${user.id}`;
    console.log(value);
    try {
      const data = await createEvent(value);
      console.log(data, "backend");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page-container">
      <form
        onSubmit={handleSubmit(handleAddPost)}
        className="flex flex-col items-center justify-center p-10"
      >
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Tạo bài viết
        </h2>
        <Layout>
          <div className="flex flex-col font-semibold gap-y-3 w-[300px]">
            <label htmlFor="name" className="flex items-center gap-x-2">
              Tên bài viết
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="name"
              type="text"
              placeholder="Nhập tên bài viết"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3 w-[300px]">
            <label htmlFor="location" className="flex items-center gap-x-2">
              Địa chỉ
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="location"
              type="text"
              placeholder="Nhập địa chỉ tổ chức"
            ></Input>
          </div>
        </Layout>
        <Layout>
          <div className="flex flex-col font-semibold gap-y-3 w-[300px]">
            <label htmlFor="company" className="flex items-center gap-x-2">
              Đơn vị
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="company"
              type="text"
              placeholder="Nhập nơi công tác của bạn"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3 w-[300px]">
            <label htmlFor="greenPoint" className="flex items-center gap-x-2">
              Green Point
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="greenPoint"
              type="text"
              placeholder="Nhập số green point"
            ></Input>
          </div>
        </Layout>
        <Layout>
          <div className="flex flex-col mb-20 font-semibold gap-y-3">
            <label htmlFor="image" className="flex items-center gap-x-2">
              Nội dung
              <span className="text-red-500">*</span>
            </label>
            <div className="w-full entry-content">
              <textarea
                className="w-full h-[300px] resize-none border-2	border-primary
                active:border-green-500 transition p-4
              "
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Layout>
        <button
          type="submit"
          className="p-3 px-10 text-white font-semibold bg-primary rounded-md"
        >
          Tạo sự kiện
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
