import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiEye, FiEyeOff, FiX } from 'react-icons/fi';
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import Dashboard from './dashboard/dashboard';

const LoginPage = () => {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isVerifyEmailOpen, setIsVerifyEmailOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500">
      <Routes>
        <Route path="/" element={<Login setIsForgotPasswordOpen={setIsForgotPasswordOpen} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/password-changed" element={<PasswordChangedModal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {isForgotPasswordOpen && <ForgotPasswordModal setIsForgotPasswordOpen={setIsForgotPasswordOpen} setIsVerifyEmailOpen={setIsVerifyEmailOpen} />}
      {isVerifyEmailOpen && <VerifyEmailModal setIsVerifyEmailOpen={setIsVerifyEmailOpen} />}
    </div>
  );
};

const Login = ({ setIsForgotPasswordOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login submitted');
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-26 w-26" />
      </div>
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Login To Your Account</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-full focus:outline-none"
            required
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-full focus:outline-none"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        <div className="mb-4 flex justify-between items-center text-white">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Remember me</span>
          </label>
          <button type="button" className="hover:underline" onClick={() => setIsForgotPasswordOpen(true)}>Forgot Password?</button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-white">
        Don't have an account? <Link to="/signup" className="hover:underline">Get Started</Link>
      </p>
    </div>
  );
};

const ForgotPasswordModal = ({ setIsForgotPasswordOpen, setIsVerifyEmailOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log('Password reset submitted');
    setIsForgotPasswordOpen(false);
    setIsVerifyEmailOpen(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button onClick={() => setIsForgotPasswordOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-white">
          <FiX className="text-purple-500" size={24} />
        </button>
        <div className="flex justify-center mb-6">
          <img src={logo1} alt="Logo" className="h-12 w-12" />
        </div>
        <h1 className="text-center text-3xl font-bold mb-4 text-black-700">Reset your password</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <h1 className="text-center text-sm  mb-4">Enter the email address associated with your account and we will send you a link to reset your password.</h1>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-full focus:outline-none border border-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

const VerifyEmailModal = ({ setIsVerifyEmailOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button onClick={() => setIsVerifyEmailOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-white">
          <FiX className="text-purple-500" size={24} />
        </button>
        <div className="flex justify-center mb-6">
          <img src={logo3} alt="Logo" className="h-13 w-13" />
        </div>
        <h1 className="text-center text-3xl font-bold mb-4 text-black-700">Verify your email</h1>
        <p className="text-center text-sms mb-4">Please check your email for a link to verify your email address.</p>
        <p className="text-center mb-4 text-black">Still can’t find the email? No problem</p>
        <button
          type="button"
          className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
          onClick={() => console.log('Resend verification email')}
        >
          Resend verification email
        </button>
      </div>
    </div>
  );
};

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup submitted');
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <button onClick={() => navigate('/')} className="absolute top-4 left-4 p-2 rounded-full bg-white">
        <FiArrowLeft className="text-purple-500" size={24} />
      </button>
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-26 w-26" />
      </div>
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Create your Salesline ID</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 flex space-x-2">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-full focus:outline-none"
            required
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-full focus:outline-none"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 mb-4">
          <input type="checkbox" id="terms" className="form-checkbox" required />
          <label htmlFor="terms" className="text-white text-sm">
            By proceeding, you agree to the <button className="underline">Terms and Conditions</button>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center mt-4 text-white">
        Already have an account? <Link to="/" className="hover:underline">Sign In</Link>
      </p>
      {isModalOpen && <VerifyCodeModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

const VerifyCodeModal = ({ setIsModalOpen }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to the next input field
      if (value && index < 3) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add verification logic here
    console.log('Verification code submitted:', code.join(''));
    setIsModalOpen(false);
    navigate('/reset-password');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-white">
          <FiX className="text-purple-500" size={24} />
        </button>
        <div className="flex justify-center mb-6">
          <img src={logo1} alt="Logo" className="h-20 w-20" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4 text-black-700">Enter verification code</h2>
        <p className="text-center text-sm text-black-100 mb-3">We have just sent a verification code to voltic@agency.com</p>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex justify-between mb-4">
            {code.map((num, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                value={num}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center text-2xl border border-purple-500 rounded-lg focus:outline-none"
              />
            ))}
          </div>
          <button onClick={() => console.log('Resend code')} className="mt-4 text-right text-sm text-black hover:underline">
            Send the code again
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200 mt-4"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add reset password logic here
    console.log('Reset password submitted');
    navigate('/password-changed');
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <button onClick={() => navigate('/')} className="absolute top-4 left-4 p-2 rounded-full bg-white">
        <FiArrowLeft className="text-purple-500" size={24} />
      </button>
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-26 w-26" />
      </div>
      <h2 className="text-center text-2xl font-bold mb-4 text-white">Create New Password</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="New password"
            className="w-full p-3 rounded-full focus:outline-none"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          >
            <FiEyeOff size={20} />
          </button>
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full p-3 rounded-full focus:outline-none"
            required
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          >
            <FiEyeOff size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Reset password
        </button>
      </form>
    </div>
  );
};

const PasswordChangedModal = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <button onClick={() => handleBackToLogin()} className="absolute top-4 left-4 p-2 rounded-full bg-white">
          <FiArrowLeft className="text-purple-500" size={24} />
        </button>
        <div className="flex justify-center mb-6">
          <img src={logo2} alt="Logo" className="h-26 w-26" />
        </div>
        <h2 className="text-center text-2xl font-bold mb-4 text-black-700">Password changed</h2>
        <p className="text-center text-black-100 mb-3">Your password has been changed successfully</p>
        <button
          onClick={handleBackToLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
        >
          Back to login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
