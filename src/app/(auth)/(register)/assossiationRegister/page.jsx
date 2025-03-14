"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AssossiationRegister() {
  const [fullName, setFullName] = useState('');
  const [fullNameErr, setFullNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneErr, setPhoneErr] = useState('');
  const [locations, setLocations] = useState('');
  const [locationsErr, setLocationsErr] = useState('');
  const [cib, setCib] = useState('');
  const [cibErr, setCibErr] = useState('');
  const [file, setFile] = useState('');
  const [fileErr, setFileErr] = useState('');
  const [serverErr, setServerErr] = useState('');
  const router = useRouter();

  const validateForm = () => {
    let isValid = true;
    if (!fullName.trim()) {
      setFullNameErr('Full name is required.');
      isValid = false;
    } else setFullNameErr('');

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Invalid email format.');
      isValid = false;
    } else setEmailErr('');

    if (password.length < 6) {
      setPasswordErr('Password must be at least 6 characters.');
      isValid = false;
    } else setPasswordErr('');

    if (!/^[0-9]{10}$/.test(phone)) {
      setPhoneErr('Phone number must be 10 digits.');
      isValid = false;
    } else setPhoneErr('');

    return isValid;
  };

  const RegisterVolunteer = async (e) => {
    e.preventDefault();
    setServerErr('');
    if (!validateForm()) return;

    try {
      const response = await axios.post('/api/register', {
        fullName,
        email,
        phone,
        locations: [],
        cib,
        file,
        password
      }, {
        withCredentials: true
      });

      if (response.status === 201) {
        router.push('/');
      } else {
        setServerErr('Unexpected server response.');
      }
    } catch (error) {
      setServerErr('An error occurred. Please try again.');
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
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {fullNameErr && <p className="text-red-500 text-sm">{fullNameErr}</p>}

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail address"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
          
          <input
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {phoneErr && <p className="text-red-500 text-sm">{phoneErr}</p>}

          <input
            type="text"
            name="locations"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Locations"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {locationsErr && <p className="text-red-500 text-sm">{locationsErr}</p>}

          <input
            type="text"
            name="CIB"
            value={cib}
            onChange={(e) => setCib(e.target.value)}
            placeholder="CIB"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {cibErr && <p className="text-red-500 text-sm">{cibErr}</p>}
          
          <input
            type="file"
            name="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
            placeholder="Password"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {fileErr && <p className="text-red-500 text-sm">{fileErr}</p>}

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-[#F7F7F7] rounded-xl text-[#434655] bg-[#ffff] font-semibold p-2 w-full"
          />
          {passwordErr && <p className="text-red-500 text-sm">{passwordErr}</p>}
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
