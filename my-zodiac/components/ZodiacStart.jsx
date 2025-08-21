import { useState } from "react";

export default function ZodiacStart({ onSubmit }) {
  // 초기값을 빈 문자열('')로 설정
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleClick = () => {
    // 빈 문자열이 아닌 경우에만 숫자로 변환하여 전달
    onSubmit(Number(month), Number(day));
  };

  return (
    <div className="text-center items-center flex flex-col">
      <h1 className="text-8xl text-yellow-500 tracking-widest font-bold">나의 별자리 알아보기</h1>
      <div className="flex p-12 rounded-2xl w-[900px] h-[200px] gap-12 justify-center mt-32">
      <input
        type="number"
        min="1"
        max="12"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="start-input"
      />
     <h3 className="start-date">월</h3>
      <input    
        type="number"
        min="1"
        max="31"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        className="start-input"
      />
     <h3 className="start-date">일</h3>
      </div>
      <button
        onClick={handleClick}
        className="button"
      >
        나의 별자리 알아보러 가기
      </button>

    <p className="mt-32 text-white">Designed and Developed by Hyeon</p>
    </div>
  );
}