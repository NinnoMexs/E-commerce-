import { useState } from 'react';
import FloatingLabelInput from '../components/FloatingLabelInput';
import Checkbox from '../components/Checkbox';
import Button from '../components/Buttons'; 
import { Link } from 'react-router-dom';

const AccountsPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password validation regex
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    const newErrors = {};

    // Validate full name
    if (!fullName) {
      newErrors.fullName = 'Full Name is required';
    }

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
       "Password: 8+ chars, 1 letter, 1 number, 1 symbol."
    }

    // Validate confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Account created successfully!');
      // Reset form fields
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 pt-4 rounded-lg shadow-xl w-110">
        <h2 className="text-4xl font-bold mb-4 text-center font-[Open_Sans]">Create your account</h2>
        <p className='text-sm/4 text-center text-neutral-500'>Be part of an exceptional shopping experience—create your account today and unlock exclusive deals!</p>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <FloatingLabelInput
            label="Full Name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
          />

          {/* Email Input */}
          <FloatingLabelInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          {/* Password Input */}
          <FloatingLabelInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          {/* Confirm Password Input */}
          <FloatingLabelInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />

          <p className='flex items-center text-sm text-gray-500 pt-4'> <Checkbox /> <span className='pl-4'>I agree to the <span>terms of service and</span> <span>privacy policy</span></span></p>
           
          

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-800 text-white rounded-full shadow-lg shadow-blue-600/50  hover:scale-105 hover:from-blue-500 hover:to-sky-800 hover:shadow-lg transition-all duration-300text-white text-md cursor-pointer "
          >
           Create Account
          </button>

          <div className='mt-3 text-center'>
            <p>Already having Account?   <span className='font-semibold text-blue-900 underline cursor-pointer hover:text-blue-500'> <Link to={"/SignIn"}>Sign In</Link></span></p>
          </div>

        </form>

         {/* Divider with "Or" */}
         <div className="relative flex items-center justify-center my-1">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Button />
      </div>
    </div>
  );
};

export default AccountsPage;