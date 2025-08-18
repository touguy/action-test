import { useEffect, useState } from "react";

export function useUser() {
  const [account, setAccount] = useState<string>("");

  // 예시: 로그인 상태 확인 (로컬스토리지, API 등)
  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccount(storedAccount);
    }
  }, []);

  // 로그아웃 함수
  const logout = () => {
    localStorage.removeItem("account");
    setAccount("");
    // 필요시 라우팅 등 추가
  };

  // 로그인 함수(예시)
  const login = (account: string) => {
    localStorage.setItem("account", account);
    setAccount(account);
  };

  return {
    account,
    login,
    logout,
    isLoggedIn: !!account,
  };
}