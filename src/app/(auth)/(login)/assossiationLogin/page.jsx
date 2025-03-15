"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AssossiationLogin() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverErr, setServerErr] = useState("");
  const router = useRouter();

  const validateForm = () => {
    let newErrors = {};
    const { email, password } = formState;

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPhone = /^[0-9]{10}$/.test(email);

    if (!email.trim() || (!isEmail && !isPhone)) {
      newErrors.email = "Entrez un email valide ou un numéro de téléphone (10 chiffres).";
    }

    if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setServerErr("");

    if (!validateForm()) return;

    try {
      const response = await axios.post("/api/login", formState, { withCredentials: true });

      if (response.status === 200) {
        router.push("/");
      } else {
        setServerErr("Erreur de connexion, veuillez réessayer.");
      }
    } catch (error) {
      setServerErr("Une erreur est survenue, veuillez réessayer.");
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
        <form onSubmit={handleLogin} className="flex flex-col justify-center items-center gap-4 bg-[#DEDEDE] rounded-xl w-[700px] p-10">
          <h1 className="text-5xl font-bold text-center text-[#ffff] pb-10 mt-7">Welcome !</h1>

          {Object.entries(formState).map(([key, value]) => (
            <div key={key} className="w-[400px]">
              <input
                type={key === "password" ? "password" : "text"}
                name={key}
                value={value}
                onChange={(e) => setFormState({ ...formState, [key]: e.target.value })}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-[400px]"
              />
              {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
            </div>
          ))}

          {serverErr && <p className="text-red-600 text-sm">{serverErr}</p>}

          <button type="submit" className="font-semibold bg-[#962728] text-[#C7CAE1] rounded-xl p-2 w-56">
            Login
          </button>

          <div className="flex flex-row justify-center items-center text-center text-gray-600 text-md font-medium gap-4">
            <Link href="/assossiationRegister" className="text-[#E2AE29]">Don’t have an account ?</Link>
            <Link href="" className="text-[#E2AE29]">Forgot password ?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
