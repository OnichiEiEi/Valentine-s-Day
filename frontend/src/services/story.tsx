"use client";

import { useEffect, useState } from "react";
import { getStory } from "@/src/services/contentservice";

export default function Story() {
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");

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

  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      <div className="relative w-80 md:w-[500px]">

        {text ? (
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h1 className="text-2xl font-bold text-center mb-4 text-rose-600">
              Forever Begins with You
            </h1>

            <p className="text-gray-700 whitespace-pre-line">
              {limitWords(text, 150)}
            </p>
          </div>
        ) : (
          <div className="text-gray-400 text-center">
            No story available
          </div>
        )}

      </div>
    </div>
  );
}
