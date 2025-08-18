
export default function WalletCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-6">
      {/* 상단: 보유 코인 */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">보유 코인</div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-bold">1,234.56</span>
            <span className="text-base text-gray-600">KRWH</span>
          </div>
        </div>
        {/* ...버튼 */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.5"/>
            <circle cx="12" cy="12" r="1.5"/>
            <circle cx="19" cy="12" r="1.5"/>
          </svg>
        </button>
      </div>

      {/* 중단: 4가지 버튼 */}
      <div className="grid grid-cols-4 gap-2">
        <button className="bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold">발행</button>
        <button className="bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold">환불</button>
        <button className="bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold">전송</button>
        <button className="bg-blue-600 text-white rounded-lg py-2 text-sm font-semibold">내역</button>
      </div>

      {/* 하단: 연결계좌 잔액 */}
      <div className="bg-gray-50 rounded-lg p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">연결계좌 잔액</span>
          <button className="bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold">입금하기</button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold">123-4567-8901</span>
          <span className="text-lg font-bold text-gray-700">5,000,000원</span>
        </div>
      </div>
    </div>
  );
}