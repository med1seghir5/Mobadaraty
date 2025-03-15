"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function AssossiationRegister() {
  const [contact, setContact] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;

    if (!fullName.trim()) {
      setFullNameErr("Full name is required.");
      isValid = false;
    } else setFullNameErr("");

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[0-9]{10}$/.test(contact);

    if (!isEmail && !isPhone) {
      setContactErr("Enter a valid email or phone number.");
      isValid = false;
    } else setContactErr("");

    if (password.length < 6) {
      setPasswordErr("Password must be at least 6 characters.");
      isValid = false;
    } else setPasswordErr("");

    return isValid;
  };

  const RegisterVolunteer = async (e) => {
    e.preventDefault();
    setServerErr("");

    try {
      const response = await axios.post(
        "https://mobadaraty-production.up.railway.app/api/v1/auth/login",
        {  
          email: "hocine@gmail.com",
          password: "hocine",
        },
        { withCredentials: true }
      );
      
      console.log(response);

      if (response.status === 200) {
        router.push("/dashboard");
      } else {
        setServerErr("Unexpected server response.");
      }
    } catch (error) {
      setServerErr("An error occurred. Please try again.");
    }
  };


  return (
    <div className="flex flex-row justify-center items-center font-sans h-screen">
      <div className="flex flex-col w-1/2 justify-center items-center text-center px-10">
        <h2 className="text-7xl font-bold">Make a Big</h2>
        <h1 className="text-8xl font-bold">Difference by</h1>
        <h3 className="text-[#9E090F] text-5xl font-semibold">Small efforts</h3>
        <p className="text-gray-600 text-xl">
          The Ramadan Djezzy community for gaining more <br />
          good deeds and platforms to facilitate the help.
        </p>
        <img src="./Ramadan.svg" className="h-[300px]" />
      </div>

      <div className="border-l-2 h-full"></div>

      <div className="w-1/2 p-10 flex justify-center">
        <form
          onSubmit={RegisterVolunteer}
          className="flex flex-col justify-center items-center gap-4 bg-[#DEDEDE] rounded-xl w-[500px] p-10"
        >
          <h1 className="text-5xl font-bold text-center text-[#ffff] pb-10">
            Welcome !
          </h1>

          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="E-mail address or Phone Number"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {contactErr && <p className="text-red-500 text-sm">{contactErr}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {passwordErr && <p className="text-red-500 text-sm">{passwordErr}</p>}
          {serverErr && <p className="text-red-600 text-sm">{serverErr}</p>}

          <button
            type="submit"
            className="font-semibold bg-[#962728] text-[#C7CAE1] rounded-xl p-2 w-56"
          >
            Sign in
          </button>

          <div className="flex flex-row justify-center items-center gap-2 text-center text-gray-600 text-md font-medium">
            <Link href="" className="text-[#E2AE29]">Forgot password ?</Link>
            <Link href="/assossiationRegister" className="text-[#E2AE29]">Don’t  have an account ?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
