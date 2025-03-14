"use client"
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VolunteerRegister() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [nationalCardNumber, setNationalCardNumber] = useState('');
    const [skills, setSkills] = useState('');
    const [availability, setAvailability] = useState('');
    const [volunteerType, setVolunteerType] = useState('');
    const [location, setLocation] = useState({ address: '', city: '', coordinates: '' });
    const [specialToken, setSpecialToken] = useState('');
    const [serverErr, setServerErr] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        if (!fullName || !email || !password || !phone || !dateOfBirth || !nationalCardNumber || !volunteerType) {
            setServerErr('All fields are required');
            isValid = false;
        }
        return isValid;
    };

    const RegisterVolunteer = async (e) => {
        e.preventDefault();
        setServerErr('');

        if (!validateForm()) return;

        try {
            await axios.post('http://localhost:3000/volunteer-register', {
                fullName,
                email,
                password,
                phone,
                dateOfBirth,
                nationalCardNumber,
                skills: skills.split(','),
                availability,
                volunteerType,
                location,
                specialToken
            }, {
                withCredentials: true
            });
            navigate('/volunteer-dashboard');
        } catch (error) {
            setServerErr('Registration failed. Please try again.');
        }
    };
    return (
      <div>
        
      </div>
    );
  }
  