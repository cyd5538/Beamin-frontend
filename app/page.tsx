"use client";

import Mainbar from "@/components/Main/Mainbar/Mainbar";
import useLoginModal from "@/store/useLoginModal";

export default function Home() {
  const { openModal } = useLoginModal();

  return (
    <main className="">
      <Mainbar />
      <button onClick={openModal} className="border rounded-md px-2 py-1 text-center bg-purple-950 text-white hover:bg-purple-900">로그인</button>
    </main>
  );
}
