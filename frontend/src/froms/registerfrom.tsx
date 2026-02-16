"use client";

import { useState } from "react";
import { auth } from "@/src/config/token";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function RegisterForm() {
    const [profileName, setProfileName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        try {
            if (!profileName || !email || !password || !confirmPassword) {
                return alert("Please fill in all fields.");
            }
            if (password.length < 6) {
                return alert("Password must be at least 6 characters.");
            }
            if (password !== confirmPassword) {
                return alert("Passwords do not match.");
            }

            setLoading(true);

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, { displayName: profileName });
        alert("Registration successful!");

        } catch (error: any) {
            console.error("Registration error:", error);
            alert("Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold text-center">Create Account</h1>

                <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                />

                <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border p-2 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                onClick={handleRegister}
                disabled={loading}
                className="w-full bg-rose-900 text-white p-2 rounded hover:bg-rose-800 transition"
                >
                {loading ? "Creating..." : "Register"}
                </button>
                <button>
                    <a href="/login" className="text-sm text-rose-900 hover:underline">
                        Already have an account? Login
                    </a>
                </button>
            </div>
        </div>
    );
}