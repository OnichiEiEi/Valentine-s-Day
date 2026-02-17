"use client";

import { useEffect, useState } from "react";
import { getStory } from "@/src/services/contentservice";

export default function Story() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [step, setStep] = useState(0); // 👈 เพิ่ม step

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getStory();
        setText(data);
        setMounted(true);
      } catch (err) {
        console.log("User not logged in");
      }
    };

    load();
  }, []);

  if (!mounted) return null;

  const limitWords = (text: string, maxWords: number) => {
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const handleClick = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center min-h-screen bg-rose-50 cursor-pointer"
    >
      <div className="relative w-80 md:w-[500px] h-[400px] flex items-center justify-center">

        {/* ----------------- ENVELOPE ----------------- */}
        <div
          className={`
            absolute transition-all duration-700
            ${step === 2 ? "opacity-0 translate-y-10" : "opacity-100"}
          `}
        >
          {/* body */}
          <div className="md:w-xl w-80 md:h-80 h-50 bg-rose-300 rounded shadow-lg relative overflow-hidden">

            {/* flap */}
            <div
              className={`
                absolute top-0 left-0 w-full h-1/2 bg-rose-400 origin-top
                transition-transform duration-700
                ${step >= 1 ? "rotate-x-180" : ""}
              `}
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)"
              }}
            />
          </div>
        </div>

        {/* ----------------- LETTER ----------------- */}
        {text && (
          <div
            className={`
              absolute bg-white shadow-xl rounded-lg p-8 w-80 md:w-[500px]
              transition-all duration-700
              ${
                step === 2
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-50 translate-y-10"
              }
            `}
          >
            <h1 className="text-2xl font-bold text-center mb-4 text-rose-600">
              Forever Begins with You
            </h1>

            <p className="text-gray-700 whitespace-pre-line">
              {limitWords(text, 150)}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
