"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/src/config/token";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    console.log("User token:", token);
    await fetch("http://localhost:5000/api/secret", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Login successful!");
    router.push("/");
    } catch (error: any) {
        console.error("Login error:", error);
        alert("Login failed. Please check your credentials and try again.");
    }
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 max-w-md h-86 mx-auto bg-white p-8 rounded-xl shadow-md" >
        <h2 className="text-4xl text-center">Login</h2>
        <input
          className="border p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={handleLogin}
          className="bg-rose-900 text-white p-2 hover:bg-rose-950 transition-colors duration-300 rounded cursor-pointer"
        >
          Login
        </button>
        <button>
          <a href="/register" className="text-sm text-rose-900 hover:underline">
            Don't have an account? Register
          </a>
        </button>
      </div>
    </div>
  );
}