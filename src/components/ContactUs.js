import React from "react";
const ContactUs = () => {
  return (
    <div className="border-black">
      <h1 className="font-bold text-2xl p-4 m-4 text-center">Contact Us</h1>
      <div className="flex flex-col m-auto w-6/12">
        <form>
          <label className="flex">
            Name:
            <input type="text" className="border-black p-2 m-2 border-1" />
          </label>
          <label className="flex">
            Message:
            <input type="text" className="border-black p-2 m-2 border-1" />
          </label>
          <button className="bg-pink-500 dark:bg-black rounded-md p-2 m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
