"use client";

import { useState } from "react";
import RegisterForm from "@/src/froms/registerfrom";

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-rose-100 flex items-center justify-center">
            <RegisterForm />
        </div>
    );
}