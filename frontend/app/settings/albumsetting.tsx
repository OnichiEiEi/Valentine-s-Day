"use client";

import { useEffect, useState } from "react";
import { getAlbum, saveAlbum } from "@/src/services/contentservice";

const IMAGES_PER_PAGE = 4;

export default function AlbumSetting() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getAlbum();
      setImages(data);
    };
    load();
  }, []);


  const addPage = () => {
    setImages([...images, ...Array(IMAGES_PER_PAGE).fill("")]);
  };

  const upload = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const updated = [...images];
      updated[index] = reader.result as string;
      setImages(updated);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="border p-2">
            {img && (
              <img src={img} className="h-32 object-cover mb-2" />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                e.target.files &&
                upload(i, e.target.files[0])
              }
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={addPage}
          className="px-4 py-2 bg-amber-400 rounded"
        >
          Add Page
        </button>

        <button
          onClick={() => saveAlbum(images)}
          className="px-4 py-2 bg-rose-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
