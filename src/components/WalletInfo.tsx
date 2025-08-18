type WalletInfoProps = {
  name: string;
  address: string;
};

export default function WalletInfo({ name, address }: WalletInfoProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    alert("지갑 주소가 복사되었습니다.");
  };

  return (
    <div>
      <div className="text-sm font-bold mb-1">{name}님 지갑</div>
        <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm px-2">{address}</span>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded text-xs"
            onClick={handleCopy}
          >
            복사
          </button>
        </div>
        {/* QR 아이콘 오른쪽 정렬 */}
        <span className="ml-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
          </svg>
        </span>
      </div>
    </div>
  );
}