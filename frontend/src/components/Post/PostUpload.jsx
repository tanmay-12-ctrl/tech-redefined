import React, { useState } from 'react';

const PostUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="py-8 px-10 w-screen ">
      <h3 className="text-xl font-semibold mb-6 text-center">
        Enter Details
      </h3>
      <form
        action="/listings"
        method="post"
        className="space-y-6 bg-white p-6 shadow-lg rounded-lg"
        noValidate
      >
        <div className="flex gap-6">
          {/* Image Upload Section */}
          <div className="flex-1">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image
            </label>
            <div className="border border-gray-300 rounded-lg p-8 focus-within:ring-2 focus-within:ring-blue-500 h-40 flex justify-center items-center text-gray-500">
              <label className="cursor-pointer flex flex-col items-center">
                <span className="text-center mb-2">Upload an image</span>
                <input
                  type="file"
                  name="image"
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

          {/* Title, Description, and Button Section */}
          <div className="flex-1 space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="text-green-600 text-sm mt-1 hidden">
                Title Looks good!
              </div>
              <div className="text-red-600 text-sm mt-1 hidden">
                Please Enter a title.
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                placeholder="Enter description"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <div className="text-green-600 text-sm mt-1 hidden">
                Description Looks good!
              </div>
              <div className="text-red-600 text-sm mt-1 hidden">
                Please Enter a Description.
              </div>
            </div>

            <button
              type="submit"
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
