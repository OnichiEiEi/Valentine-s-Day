"use client";

import { useEffect, useState } from "react";
import {
  getTimeline,
  saveTimeline,
  TimelineItem
} from "@/src/services/contentservice";

export default function TimelineSetting() {
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getTimeline();
      setTimeline(data);
    };
    load();
  }, []);

  const addItem = () => {
    setTimeline([...timeline, { title: "", description: "", image: "" }]);
  };

  const updateItem = (
    index: number,
    field: keyof TimelineItem,
    value: string
  ) => {
    const updated = [...timeline];
    updated[index][field] = value;
    setTimeline(updated);
  };

  const uploadImage = (index: number, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      updateItem(index, "image", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      {timeline.map((item, index) => (
        <div key={index} className="border p-4 rounded mb-4">
          <input
            className="w-full border p-2 mb-2"
            placeholder="Title"
            value={item.title}
            onChange={(e) =>
              updateItem(index, "title", e.target.value)
            }
          />

          <textarea
            className="w-full border p-2 mb-2"
            placeholder="Description"
            value={item.description}
            onChange={(e) =>
              updateItem(index, "description", e.target.value)
            }
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files &&
              uploadImage(index, e.target.files[0])
            }
          />
        </div>
      ))}

      <div className="flex gap-4">
        <button
          onClick={addItem}
          className="px-4 py-2 bg-amber-400 rounded"
        >
          Add
        </button>

        <button
          onClick={() => saveTimeline(timeline)}
          className="px-4 py-2 bg-rose-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
}
