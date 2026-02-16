"use client";

import { useState } from "react";
import LoginForm from "@/src/froms/loginfrom";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-rose-100 flex items-center justify-center">
            <LoginForm />
        </div>
    );
}