import { auth } from "@/src/config/token";

const API = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export type TimelineItem = {
  title: string;
  description: string;
  image: string;
};

async function getToken(): Promise<string> {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      unsubscribe();

      if (!user) {
        reject("Not authenticated");
      } else {
        const token = await user.getIdToken();
        resolve(token);
      }
    });
  });
}

export async function getAllData() {
  const token = await getToken();

  const res = await fetch(`${API}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

export async function getStory() {
  const data = await getAllData();
  return data.story || "";
}

export async function saveStory(text: string) {
  const token = await getToken();

  await fetch(`${API}/story`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ story: text }),
  });
  alert("Set Letter Done")
}

export async function getTimeline(): Promise<TimelineItem[]> {
  const data = await getAllData();
  return data.timeline || [];
}

export async function saveTimeline(data: TimelineItem[]) {
  const token = await getToken();

  await fetch(`${API}/timeline`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ timeline: data }),
  });
  alert("Set Timeline Done")
}

export async function getAlbum(): Promise<string[]> {
  const data = await getAllData();
  return data.album || [];
}

export async function saveAlbum(images: string[]) {
  const token = await getToken();

  await fetch(`${API}/album`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ album: images }),
  });
  alert("Set Album Done")
}
