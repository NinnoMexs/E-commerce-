import { useState } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { IoLogoElectron } from 'react-icons/io5';
import Button from '../components/Buttons';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};
//     if (!email) newErrors.email = 'Email is required';
//     if (!password) newErrors.password = 'Password is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation regex
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password: 8+ chars, 1 letter, 1 number, 1 symbol.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-110">
        <p className='flex items-center font-sm text-3xl italic mb-4 cursor-pointer hover:scale-107 transition-all duration-300  rounded-full shadow-xl w-4/8'><IoLogoElectron className='text-5xl stroke-2'/>GevMexs</p>
        <h2 className="text-5xl font-bold mb-1 mt-7 text-center font-[Open_Sans]">Welcome Back!</h2>
        <p className='text-base text-slate-800 text-center'>Please take a moment to enter your account details to proceed.</p>
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            className="mt-5"
          />
          <FloatingLabelInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div className='flex justify-between content-center mt-6'>
            <div className='flex content-center'>
                <input type='checkbox' />
                <label for="checkbox" className='pl-1'>Remember for 30 days</label>
            </div>
            <p className='text-base text-rose-600 underline cursor-pointer'>Forgot Password</p>
          </div>

          <button
            type="submit"
            className="w-full mt-5 px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-800 text-white rounded-full shadow-lg shadow-blue-600/50  hover:scale-105 hover:from-blue-500 hover:to-sky-800 hover:shadow-lg transition-all duration-300text-white text-md cursor-pointer "
          >
            Sign In
          </button>

          <div className='mt-7 flex justify-around'>
            <p>Don't have an Account?   <span className='ml-25 font-semibold text-blue-900 underline cursor-pointer hover:text-blue-500'>Sign Up</span></p>
          </div>
         

        
        </form>
      </div>
    </div>
  );
};

export default SignIn;