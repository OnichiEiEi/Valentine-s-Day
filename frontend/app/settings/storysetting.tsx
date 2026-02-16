"use client";

import { useEffect, useState } from "react";
import { getStory, saveStory } from "@/src/services/contentservice";

const MAX_WORDS = 150;

export default function StorySetting() {
  const [text, setText] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await getStory();
      setText(data);
    };
    load();
  }, []);


  const countWords = (t: string) =>
    t.trim().split(/\s+/).filter(Boolean).length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (countWords(value) <= MAX_WORDS) {
      setText(value);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        className="w-full h-40 border p-4 rounded"
      />

      <div className="flex justify-between mt-3">
        <span>{countWords(text)} / {MAX_WORDS}</span>

        <button
          onClick={() => saveStory(text)}
          className="px-4 py-2 bg-rose-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
