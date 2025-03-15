"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AssossiationRegister() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    locations: [],
    CIB: "",
    file: null,
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [serverErr, setServerErr] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let newErrors = {};
    if (!formState.name.trim()) newErrors.name = "Full name is required.";
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = "Invalid email format.";
    if (formState.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!/^[0-9]{10}$/.test(formState.phone)) newErrors.phone = "Phone number must be 10 digits.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const RegisterVolunteer = async (e) => {
    e.preventDefault();
    setServerErr("");
    if (!validateForm()) return;

    try {
      const formData = new FormData();
      Object.entries(formState).forEach(([key, value]) => {
        if (key === "file" && value) {
          formData.append(key, value);
        } else {
          formData.append(key, typeof value === "object" ? JSON.stringify(value) : value);
        }
      });

      const response = await axios.post('https://mobadaraty-production.up.railway.app/api/v1/auth/association/register', formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      });

      if (response.status === 201) {
        router.push('/');
      } else {
        setServerErr('Unexpected server response.');
      }
    } catch (error) {
      console.error("Server error:", error.response?.data);
      setServerErr(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-row justify-center items-center font-sans h-screen">
      <div className="flex flex-col w-1/2 justify-center items-center text-center pr-10 gap-2">
        <h2 className="text-7xl font-bold">Make a Big</h2>
        <h1 className="text-8xl font-bold">Difference by</h1>
        <h3 className="text-[#9E090F] text-5xl font-semibold">Small efforts</h3>
        <p className="text-gray-600 text-xl">
          The Ramadan Djezzy community for gaining more <br />
          good deeds and platforms to facilitate the help.
        </p>
        <img src="./Ramadan.svg" className="h-[300px]" />
      </div>

      <div className="w-1/2 border-l-2 p-10 h-screen flex justify-center items-center">
        <form onSubmit={RegisterVolunteer} className="flex flex-col justify-center items-center gap-4 bg-[#DEDEDE] rounded-xl w-[700px] p-10">
          <h1 className="text-5xl font-bold text-center text-[#ffff] pb-10 mt-7">Become an Assistor</h1>
          {Object.entries(formState).map(([key, value]) => (
            key !== "locations" && (
              <div key={key} className="w-full">
                <input
                  type={key === "password" ? "password" : key === "file" ? "file" : "text"}
                  name={key}
                  value={key === "file" ? undefined : value}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      [key]: key === "file" ? e.target.files[0] : e.target.value
                    })
                  }
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
                />
                {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
              </div>
            )
          ))}

          {serverErr && <p className="text-red-600 text-sm">{serverErr}</p>}

          <div className="flex flex-col justify-start items-start">
            <div>
              <input type="checkbox"/>
              <label className="text-[#A8AABC] ml-2">I agree to the Terms and Conditions</label>
            </div>
            <div>
              <input type="checkbox"/>
              <label className="text-[#A8AABC] ml-2">I am not a Robot</label>
            </div>
          </div>

          <button type="submit" className="font-semibold bg-[#962728] text-[#C7CAE1] rounded-xl p-2 w-56">
            Sign Up
          </button>
          <p className="text-center text-gray-600 text-md font-medium">
            <a className="text-[#E2AE29]">Already have an account?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
