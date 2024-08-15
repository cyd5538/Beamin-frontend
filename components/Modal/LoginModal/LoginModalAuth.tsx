import React from "react";
import { SiNaver } from "react-icons/si";
import { FaApple, FaGoogle } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const LoginModalAuth = () => {
  const router = useRouter();

  const handleGoogleLogin = () => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=openid%20profile%20email`;
    
    router.push(googleAuthUrl);
  };

  const handleKaKaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
    
    router.push(kakaoAuthUrl);
  };

  const handleNaverLogin = () => {
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}&state=your_random_state`;
    
    router.push(naverAuthUrl);
  };

  return (
    <div className="mt-24 flex flex-col gap-4">
      <div onClick={handleKaKaoLogin} className="w-full px-2 rounded-[40px] h-16 flex gap-2 font-semibold text-lg justify-center items-center bg-[#FFFF00] border cursor-pointer">
        <RiKakaoTalkFill size={20} />
        카카오로 계속하기
      </div>
      <div onClick={handleNaverLogin} className="w-full px-2 rounded-[40px] h-16 flex gap-2 font-semibold text-lg justify-center text-white items-center bg-green-400 border cursor-pointer">
        <SiNaver size={20} color="white" />
        네이버로 계속하기
      </div>
      <div onClick={handleGoogleLogin} className="w-full px-2 rounded-[40px] h-16 flex gap-2 font-semibold text-lg justify-center items-center bg-white-400 border-[2px] cursor-pointer">
        <FaGoogle size={20} /> Google로 계속하기
      </div>
    </div>
  );
};

export default LoginModalAuth;
