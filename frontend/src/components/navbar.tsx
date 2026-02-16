"use client";

import { useEffect, useState } from "react";
import { auth } from "@/src/config/token";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/login"); // redirect หลัง logout
        } catch (error) {
            console.error("Logout error:", error);
            alert("Logout failed. Please try again.");
        }
    };

    return (
        <header className="bg-rose-900 shadow-sm relative z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-end md:justify-between">
                    
                    <div className="hidden md:block">
                        <nav>
                            <ul className="flex items-center gap-6 text-sm font-bold">
                                <li><Link className="text-white hover:text-gray-200/75" href="/">HOME</Link></li>
                                <li><Link className="text-white hover:text-gray-200/75" href="/letter">LETTER</Link></li>
                                <li><Link className="text-white hover:text-gray-200/75" href="/timeline">TIMELINE</Link></li>
                                <li><Link className="text-white hover:text-gray-200/75" href="/album">ALBUM</Link></li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4 text-white">
                        
                        <div
                        onClick={() => router.push("/settings")}
                        className="w-8 h-8 rounded-full bg-white text-rose-900 flex items-center justify-center font-bold cursor-pointer"
                        >
                            {user.displayName
                            ? user.displayName.charAt(0).toUpperCase()
                            : user.email?.charAt(0).toUpperCase()}
                        </div>

                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-rose-950 px-5 py-2.5 text-sm font-medium text-white hover:opacity-80"
                        >
                            Logout
                        </button>
                        </div>
                        ) : (
                            <Link
                            className="rounded-md bg-rose-950 px-5 py-2.5 text-sm font-medium text-white hover:opacity-80"
                            href="/login"
                            >
                            Login
                            </Link>
                    )}

                        <div className="block md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-white"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`
                    absolute left-0 w-full bg-rose-900 shadow-lg
                    overflow-hidden
                    transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <ul className="flex flex-col p-6 gap-4 text-white font-semibold justify-center items-center">
                    <li><Link href="/"> HOME </Link></li>
                    <li><Link href="/letter"> LETTER </Link></li>
                    <li><Link href="/timeline"> TIMELINE </Link></li>
                    <li><Link href="/album"> ALBUM </Link></li>
                </ul>
            </div>
        </header>
    );
}
