import Link from "next/link";
import { useUser } from "../hooks/useUser";


type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps) => {
  const { account, logout } = useUser();

  // 뒤로가기 버튼 클릭 시 로그아웃 alert
  const handleBack = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      logout();
    }
  };

  // 햄버거 버튼 클릭 시 (예시: alert)
  const handleMenu = () => {
    alert('메뉴 기능은 준비 중입니다.');
  };

  return (
    <header className="h-16 bg-white border-b px-4 flex items-center relative">
      {/* 뒤로가기 버튼 TODO: 추후 컴포넌트로 변경 필요*/}
      <button
        className="absolute left-2 p-2 rounded hover:bg-gray-100"
        onClick={handleBack}
        aria-label="뒤로가기"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* 제목 TODO: 추후 컴포넌트로 변경 필요*/}
      <span className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold">{title}</span>

      {/* 홈 버튼 TODO: 추후 컴포넌트로 변경 필요*/}
      <Link href="/" className="absolute right-12 p-2 rounded hover:bg-gray-100" aria-label="홈">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 10.5L12 4L21 10.5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>

      {/* 햄버거 버튼 TODO: 추후 컴포넌트로 변경 필요 */}
      <button
        className="absolute right-2 p-2 rounded hover:bg-gray-100"
        onClick={handleMenu}
        aria-label="메뉴"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
