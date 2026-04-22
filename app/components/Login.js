// app/components/Login.js
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaUserAlt, FaRegEyeSlash } from 'react-icons/fa';
import { FiMail, FiLock } from 'react-icons/fi';
import { useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

// import { FcGoogle } from 'react-icons/fc';

const Login = ({ setView }) => {
  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse.credential);
        
      try {
        const response = await fetch("http://localhost:8080/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idToken: credentialResponse.credential
          })
        });

        const data = await response;

          if (response.ok) {
            console.log("Login Success:", data);
            
            localStorage.setItem("token", data.token);

            
            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Success");
          } else {
            console.log("Backend Error:", data);
            alert("Login Failed");
          }

        } catch (error) {
          console.error("Error:", error);
            alert("Server Error");
        }
      },
    onError: () => {
    console.log("Google Login Failed");
    },
  });

  return (
    <main className="min-h-screen max-h-screen flex items-center justify-center bg-[#F1F3F2] p-4 font-sans antialiased text-black">
      <div className="w-full max-w-sm max-h-screen bg-white p-8 rounded-[32px] shadow-sm border border-gray-100/50 flex flex-col items-center">
         {/* Status Bar (iPhone indicator) */}
         <div className="w-full flex justify-between items-center mb-13 px-1 text-sm font-semibold">
          <span>9:41</span>
          <div className="w-[100px] h-[30px] bg-black rounded-full"></div> {/* Notch placeholder */}
          <div className="flex gap-1.5 items-center">
            <span></span> <span> </span> <span>🔋</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-2">Login</h1>
        
        {/* Input Fields */}
        <form className="w-full flex flex-col gap-4 mb-1 ">
            <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#BCBFBE]" />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full py-4 pl-12 pr-4 border border-[#E6E8E7] rounded-full focus:outline-none focus:border-lime-500 placeholder:text-[#BCBFBE]"
                />
            </div>
            <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#BCBFBE]" />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full py-4 pl-12 pr-12 border border-[#E6E8E7] rounded-full focus:outline-none focus:border-lime-500 placeholder:text-[#BCBFBE]"
                />
                <FaRegEyeSlash className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-[#BCBFBE] cursor-pointer" />
            </div>
        </form>

        {/* Forgot Password */}
        <p className="w-full text-center text-sm mb-2">
            <a href="#" className="text-black font-medium hover:underline">Forgot Password?</a>
        </p>
        
        {/* Main Login Button */}
        <button className="w-full py-4 bg-[#191C1B] text-white rounded-full hover:bg-black transition font-semibold mb-2">
          Login
        </button>
        
        {/* OR separator */}
        <div className="flex items-center w-full mb-2 gap-1">
            <div className="flex-1 h-px bg-[#E6E8E7]"></div>
            <span className="text-[#9EA1A3] text-sm">or</span>
            <div className="flex-1 h-px bg-[#E6E8E7]"></div>
        </div>

        {/* SSO Buttons */}
        <div className="flex flex-col gap-3 w-full mb-1">
          
          
          {/* <button 
            onClick={() => login()} 
            className="flex items-center justify-center gap-3 w-full py-4 border border-[#E6E8E7] rounded-full hover:bg-gray-50 transition font-medium">
            <FcGoogle className="text-2xl" /> Continue with Google
          </button> */}

          <GoogleLogin
            className="flex items-center justify-center gap-3 w-full py-4 border border-[#E6E8E7] rounded-full hover:bg-gray-50 transition font-medium"
            onSuccess={(credentialResponse) => {
              console.log("ID TOKEN:", credentialResponse.credential);

              fetch("http://localhost:8080/api/auth/google", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  idToken: credentialResponse.credential
                }),
              });
            }}
            onError={() => console.log("Login Failed")}
          />

          
          
          <button className="flex items-center justify-center gap-3 w-full py-4 bg-[#A3E635] text-white rounded-full hover:bg-lime-500 transition font-medium">
            <FaApple className="text-2xl" /> Continue with Apple
          </button>
          
          <button className="flex items-center justify-center gap-3 w-full py-4 border border-[#E6E8E7] rounded-full hover:bg-gray-50 transition font-medium">
            <FaUserAlt className="text-xl text-[#BCBFBE]" /> Continue As Guest
          </button>
        </div>

         {/* Footer Text */}
         <p className="text-center text-[#9EA1A3] mt-3">
          Need an account? <span onClick={() => setView('onboarding')} className="font-semibold text-black cursor-pointer hover:underline">Sign up</span>
        </p>
        
        
      </div>
    </main>
  );
};

export default Login;