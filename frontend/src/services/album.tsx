"use client";

import { useEffect, useState } from "react";
import { getAlbum } from "@/src/services/contentservice";

const IMAGES_PER_SPREAD = 4;

export default function Album() {
  const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState(0);
  const [images, setImages] = useState<string[]>([]);

useEffect(() => {
  const load = async () => {
    try {
      const data = await getAlbum();
      setImages(data);
      setMounted(true);
    } catch (err) {
      console.log("User not logged in");
    }
  };

  load();
}, []);


  if (!mounted) return null;

  const totalPages = Math.max(
    1,
    Math.ceil(images.length / IMAGES_PER_SPREAD)
  );

  const start = page * IMAGES_PER_SPREAD;
  const current = images.slice(start, start + IMAGES_PER_SPREAD);

  const leftPage = current.slice(0, 2);
  const rightPage = current.slice(2, 4);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-[350px] md:w-[900px] h-[300px] md:h-[500px] bg-[#fffaf0] shadow-2xl rounded-lg flex overflow-hidden">

        {/* LEFT */}
        <div className="w-1/2 p-6 border-r border-amber-200 flex flex-col gap-6">
          {leftPage.map((src, i) => (
            <AlbumCard key={i} src={src} rotate="-rotate-2" />
          ))}
        </div>

        {/* RIGHT */}
        <div className="w-1/2 p-6 flex flex-col gap-6">
          {rightPage.map((src, i) => (
            <AlbumCard key={i} src={src} rotate="rotate-2" />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex gap-6 mt-8 items-center">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="px-6 py-2 bg-rose-300 rounded disabled:opacity-40"
        >
          Previous
        </button>

        <span>
          Page {page + 1} / {totalPages}
        </span>

        <button
          onClick={() =>
            setPage((p) => Math.min(totalPages - 1, p + 1))
          }
          disabled={page === totalPages - 1}
          className="px-6 py-2 bg-rose-300 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function AlbumCard({
  src,
  rotate,
}: {
  src: string;
  rotate: string;
}) {
  return (
    <div
      className={`bg-white p-3 shadow-md ${rotate}`}
    >
      {src ? (
        <img
          src={src}
          className="w-full h-32 md:h-40 object-cover"
        />
      ) : (
        <div className="w-full h-32 md:h-40 flex items-center justify-center text-gray-400">
          Empty
        </div>
      )}
    </div>
  );
}
