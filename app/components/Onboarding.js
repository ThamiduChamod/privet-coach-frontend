// app/components/Onboarding.js
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaUserAlt } from 'react-icons/fa';
import Image from 'next/image';

const Onboarding = ({ setView }) => {
  return (
    <main className="min-h-screen max-h-screen flex items-center justify-center bg-[#F1F3F2] p-8 font-sans antialiased text-black">
      <div className="w-full max-w-sm max-h-screen  bg-white p-8 rounded-[32px] shadow-sm border border-gray-100/50 flex flex-col items-center">
        {/* Status Bar (iPhone indicator) */}
        <div className="w-full flex justify-between items-center mb-10 px-1 text-sm font-semibold">
          <span>9:41</span>
          <div className="w-[100px] h-[30px] bg-black rounded-full"></div> {/* Notch placeholder */}
          <div className="flex gap-1.5 items-center">
            <span></span> <span></span> <span>🔋</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative w-[480px] h-[480px] mb-1">
            <Image 
                src="/illustration.png" // Obe path eka methana danna
                alt="Coaching Illustration" 
                layout="fill"
                objectFit="contain"
            />
        </div>
        
        {/* Text */}
        <h1 className="text-1xl font-bold text-center mb-1">Private Coaching</h1>
        <p className="text-center text-[#9EA1A3] leading-relaxed mb-2 px-1">
          Add one-on-one, confidential sessions for only $35 per session
        </p>
        
        {/* Form Separator (The three dots) */}
        <div className="flex gap-1 mb-2">
            <div className="w-1.5 h-1.5 bg-[#4ADE80] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#E6E8E7] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#E6E8E7] rounded-full"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <button className="flex items-center justify-center gap-3 w-full py-4 border border-[#E6E8E7] rounded-full hover:bg-gray-50 transition font-medium">
            <FcGoogle className="texxt-0.5" /> Continue with Google
          </button>
          
          <button className="flex items-center justify-center gap-3 w-full py-4 bg-[#A3E635] text-white rounded-full hover:bg-lime-500 transition font-medium">
            <FaApple className="text-2xl" /> Continue with Apple
          </button>
          
          <button className="flex items-center justify-center gap-3 w-full py-4 border border-[#E6E8E7] rounded-full hover:bg-gray-50 transition font-medium">
            <FaUserAlt className="text-xl text-[#BCBFBE]" /> Continue As Guest
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-[#9EA1A3] mt-10">
          Already have an account? <span onClick={() => setView('login')} className="font-semibold text-black cursor-pointer hover:underline">Log in</span>
        </p>
        
        
      </div>
    </main>
  );
};

export default Onboarding;