import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [network, setNetwork] = useState("POL");
  const walletName = "000";
  const walletAddress = "0x1234...abcd";
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    console.log("token", token);
    if (token) {
      setIsLoggedIn(true);
    }
    if (isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex flex-col gap-6 items-center px-4 py-8">
        <div className="w-full max-w-md self-stretch">
            <label>네트워크 선택</label>
        </div>
        <div className="w-full max-w-md self-stretch">
            <label>지갑 정보</label>
        </div>
        <div className="w-full max-w-md self-stretch">
            <label>지갑 선택</label>
        </div>
      </main>
    </div>
  );
}
