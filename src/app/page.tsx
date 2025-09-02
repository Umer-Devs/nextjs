"use client";
import { useState } from "react";

const Page = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      // Send data to backend API
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        // Handle success (e.g., redirect, show message, etc.)
      } else {
        console.error("Error:", response.statusText);
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error("Request failed:", error);
      // Handle network or other errors
    }
  };

  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-200 px-2">
        <div className="max-w-4xl bg-white flex flex-col border items-center justify-center gap-4 md:gap-8 p-4 md:p-8 rounded-md">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic underline text-[#9FC85E]">
              Opal Time Card
            </h1>
            <p className="md:text-lg text-center my-3 text-[#2D465E] tracking-wider font-semibold">
              EFFORTLESS TIME MANAGEMENT
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full"
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-200 w-full h-12 px-3 rounded-md border-none outline-none"
              placeholder="Enter Your Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-200 w-full h-12 px-3 rounded-md border-none outline-none"
              placeholder="Enter Your Password"
              required
            />
            <button
              type="submit"
              className="bg-[#9FC85E] w-full h-12 rounded-md text-white font-semibold text-lg cursor-pointer hover:bg-[#9FC85E]/90 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Page;