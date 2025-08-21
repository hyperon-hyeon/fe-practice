import React from "react";
import zodiacData from "../zodiacData";

export default function ZodiacResult({ zodiac, onReset }) {
  const data = zodiacData[zodiac];

  if (!data) {
    return (
      <div className="flex flex-col items-center text-center text-white">
        <h1 className="text-4xl text-yellow-500 tracking-widest font-bold mb-16">
          나의 별자리 알아보기
        </h1>
        <p className="text-xl mb-4">별자리 정보를 찾을 수 없습니다.</p>
        <button
          onClick={onReset}
          className="bg-purple-500 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-600 font-bold"
        >
          다시 하기
        </button>
      </div>
    );
  }

  return (
    <div>
    <h1 className=" mt-12 text-8xl text-yellow-500 tracking-widest font-bold text-center">
  나의 별자리 알아보기
</h1>
    <div className="flex justify-center items-center gap-40 p-8">
      <div className="flex flex-col items-center">
        <img src={data.img} alt={data.name} className="w-96 h-96 mb-4 rounded-xl" />
        <h2 className="text-3xl text-yellow-600 font-bold mb-2">{data.name}</h2>
        <p className="text-base text-yellow-600 mb-4">{data.dateRange}</p>
        
        <button
          onClick={onReset}
          className="button"
        >
          다른 별자리 알아보기
        </button>
      </div>

      <div className="text-center mt-12">

        <div className="result-block">
          <h3 className="result-h1">성향</h3>
          <p className="result-p">{data.personality.join(", ")}</p>
        </div>

        <div className="result-block">
          <h3 className="result-h1">강점</h3>
          <p className="result-p">{data.strengths.join(", ")}</p>
        </div>

        <div className="result-block">
          <h3 className="result-h1">약점</h3>
          <p className="result-p">{data.weaknesses.join(", ")}</p>
        </div>

        <div className="result-block">
          <h3 className="result-h1">대표 인물</h3>
          <p className="result-p">{data.famous.join(", ")}</p>
        </div>
      </div>
    </div>
    <p className="mb-4 text-white text-center">Designed and Developed by Hyeon</p>
    </div>
  );
}