"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getTimeline, TimelineItem, } from "@/src/services/contentservice";

export default function TimelineSpecial() {
  const [mounted, setMounted] = useState(false);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getTimeline();
        setTimeline(data);
        setMounted(true);
      } catch (err) {
        console.log("User not logged in");
      }
    };

    load();
  }, []);


  if (!mounted) return null;

  return (
    <div className="bg-orange-100 min-h-screen w-full py-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12">
        Special Timeline
      </h1>

      {timeline.length === 0 && (
        <p className="text-gray-500">No timeline data</p>
      )}

      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-pink-300 -translate-x-1/2"></div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="grid md:grid-cols-[1fr_auto_1fr] items-center justify-center-safe mb-12"
            >
              {/* LEFT */}
              <div className={isLeft ? "md:pr-6" : ""}>
                {isLeft && <TimelineCard item={item} />}
              </div>

              {/* DOT */}
              <div className="flex justify-center z-10">
                <div className="w-5 h-5 bg-pink-500 rounded-full border-4 border-white hidden md:block"></div>
              </div>

              {/* RIGHT */}
              <div className={!isLeft ? "md:pl-6" : ""}>
                {!isLeft && <TimelineCard item={item} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="relative inline-block md:w-[350px] w-[250px] shadow-md">
      <div className="bg-white p-4">
        <p className="font-bold text-lg">{item.title}</p>
        <p className="text-gray-600">{item.description}</p>
      </div>

      {item.image && (
        <div className="relative h-40">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
