import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import NetworkSelectBox from "../components/NetworkSelectBox";
import WalletCard from "../components/WalletCard";
import WalletInfo from "../components/WalletInfo";

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
          <NetworkSelectBox value={network} onChange={setNetwork} />
        </div>
        <div className="w-full max-w-md self-stretch">
          <WalletInfo name={walletName} address={walletAddress} />
        </div>
        <div className="w-full max-w-md self-stretch">
          <WalletCard />
        </div>
      </main>
    </div>
  );
}
