"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="p-2 top-4 right-4">
                <img src="/icons/menu.png" className="w-6 h-4" alt="Menu" />
            </button>

            <div
                className={`fixed top-0 right-0 h-full w-64  text-white menu-background transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-7 right-5 text-white text-2xl"
                >
                    <img src="/icons/close.png" />
                </button>

                <nav className="mt-20 flex flex-col space-y-8 px-6 items-center font-albertSans">
                    <Link href="/">
                        <p className="hover:text-gray-400">Home</p>
                    </Link>
                    <Link href="who-we-are">
                        <p className="hover:text-gray-400">Quem somos</p>
                    </Link>
                    <Link href="velora-med">
                        <p className="hover:text-gray-400">Velora Med</p>
                    </Link>
                    <Link href="blog">
                        <p className="hover:text-gray-400">Blog</p>
                    </Link>
                </nav>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    );
}
