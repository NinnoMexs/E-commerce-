import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from React Icons

const FloatingLabelInput = ({ label, type, value, onChange, error, }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  // Remove spaces from input value
  const handleChange = (e) => {
    const newValue = e.target.value.replace(/\s/g, ''); // Remove all spaces
    onChange({ target: { value: newValue } }); // Pass the new value to the parent
  };

  // Prevent spacebar key press
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault(); // Block the spacebar key
    }
  };

  // Remove spaces from pasted text
  const handlePaste = (e) => {
    e.preventDefault(); // Prevent default paste behavior
    const pastedText = e.clipboardData.getData('text').replace(/\s/g, ''); // Remove spaces
    document.execCommand('insertText', false, pastedText); // Insert the cleaned text
  };


  return (
    <div className="relative mt-8">
      <div className="relative">
        <input
          type={type === 'password' && !showPassword ? 'password' : 'text'}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-3 py-2 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-lg focus:outline-none focus:border-blue-500 peer`}
          required
        />
        <label
          className={`absolute left-3 transition-all duration-200 ${
            isFocused || value
              ? 'top-0 text-sm text-blue-500 bg-white px-1 -translate-y-1/2'
              : 'top-1/2 text-gray-400 -translate-y-1/2'
          } pointer-events-none`}
        >
          {label}
        </label>
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none"
            aria-label={showPassword ? 'show password' : 'Show password'}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash/> }
          </button>
        )}
      </div>
      {error && (
        <p className="absolute left-2 top-full text-red-500 text-xs mt-0">
          {error}
        </p>
      )}
    </div>
  );
};

export default FloatingLabelInput;