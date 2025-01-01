import React, { useRef, useState } from "react";
import { usePostUpload } from "../../store/usePostStore";

const PostUpload = () => {
  const [image, setImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [titleError, setTitleError] = useState(false);

  const title = useRef("");
  const description = useRef("");

  const { uploadPost } = usePostUpload();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleValidation = () => {
    if (!title.current.value.trim()) {
      setTitleError(true);
      return false;
    }
    setTitleError(false);
    return true;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!handleValidation()) return;
    uploadPost(title.current.value, description.current.value, uploadedFile);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="py-8 px-10 w-screen">
        <h3 className="text-xl font-semibold mb-6 text-center">Enter Details</h3>
        <form className="space-y-6 bg-white p-6 shadow-lg rounded-lg" noValidate>
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <div className="border border-gray-300 rounded-lg p-8 h-40 flex justify-center items-center text-gray-500">
                <label className="cursor-pointer flex flex-col items-center">
                  <span className="text-center mb-2">Upload an image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              {image && (
                <div className="mt-4">
                  <img
                    src={image}
                    alt="Uploaded Preview"
                    className="w-full h-auto max-w-xs rounded-lg"
                  />
                </div>
              )}
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={title}
                />
                <div
                  className={`text-red-600 text-sm mt-1 ${titleError ? "" : "hidden"}`}
                >
                  Please Enter a title.
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Enter description"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ref={description}
                ></textarea>
              </div>

              <button
                onClick={handleClick}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostUpload;
