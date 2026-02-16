"use client";

import { useState } from "react";
import StorySetting from "./storysetting";
import TimelineSetting from "./timelinesetting";
import AlbumSetting from "./albumsetting";

type Tab = "story" | "timeline" | "album";

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("story");

  return (
    <div className="min-h-screen bg-rose-50 p-8">
      <h1 className="text-6xl font-bold text-center mb-8">
        Setting
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        {["story", "timeline", "album"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as Tab)}
            className={`px-5 py-2 rounded
              ${tab === t ? "bg-rose-500 text-white" : "bg-white border"}
            `}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        {tab === "story" && <StorySetting />}
        {tab === "timeline" && <TimelineSetting />}
        {tab === "album" && <AlbumSetting />}
      </div>
    </div>
  );
}
