import { useState } from "react";
import ZodiacForm from "./components/ZodiacStart";
import ZodiacResult from "./components/ZodiacResult";
import getZodiac from "./utils/getZodiac";

export default function App() {
  const [zodiac, setZodiac] = useState(null);

  const handleSubmit = (month, day) => {
    const result = getZodiac(month, day);
    setZodiac(result);
  };

  const reset = () => setZodiac(null);

  return (
    <div className="bg-[url('/img/background-sky.jpg')] w-full h-screen bg-cover bg-center font-dnr flex items-center justify-center">
      {!zodiac ? (
        <ZodiacForm onSubmit={handleSubmit} />
      ) : (
        <ZodiacResult zodiac={zodiac} onReset={reset} />
      )}
    </div>
  );
}
