import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateEventPage = () => {
  const [content, setContent] = useState("");
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      image: "",
    },
  });

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
    }),
    []
  );

  const handleAddPost = (value) => {
    console.log(value);
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
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="name" className="flex items-center gap-x-2">
              Tên bài viết
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="name"
              type="text"
              placeholder="Enter your title"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="author" className="flex items-center gap-x-2">
              Tác giả
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="author"
              type="text"
              placeholder="Enter your name"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
        </Layout>
        <Layout>
          {/* <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="image" className="flex items-center gap-x-2">
              Image
              <span className="text-red-500">*</span>
            </label>
            <ImageUpload
              className="h-[300px] shadow-lg mb-5"
              progress={0}
              image={""}
            ></ImageUpload>
          </div> */}
          <div className="flex flex-col font-semibold gap-y-3">
            <label htmlFor="greenpoint" className="flex items-center gap-x-2">
              Green Point
              <span className="text-red-500">*</span>
            </label>
            <Input
              control={control}
              name="greenpoint"
              type="text"
              placeholder="Enter your green point"
              className="p-5 mb-6 border-2 border-orange-400 rounded-md w-[400px]"
            ></Input>
          </div>
        </Layout>
        <Layout>
          <div className="flex flex-col mb-20 font-semibold gap-y-3">
            <label htmlFor="image" className="flex items-center gap-x-2">
              Content
              <span className="text-red-500">*</span>
            </label>
            <div className="w-full entry-content">
              <ReactQuill
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
                className="h-[300px]"
              />
            </div>
          </div>
        </Layout>
        <button
          type="submit"
          className="p-5 px-10 text-white bg-orange-400 rounded-md"
        >
          Add new post
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;
