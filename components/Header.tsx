'use client';

import { Search, Bell } from 'lucide-react';

interface HeaderProps {
    title: string;
    description: string;
}

export default function Header({ title, description }: HeaderProps) {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
            <div className="px-8 py-5 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h1>
                    <p className="text-gray-600 text-sm mt-0.5">{description}</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-64 text-sm transition-all"
                        />
                        <Search className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
                    </div>
                    <button className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors relative">
                        <Bell className="text-gray-600 w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-600 rounded-full"></span>
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://i.pravatar.cc/150?u=sarah"
                        alt="Profile"
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200"
                    />
                </div>
            </div>
        </header>
    );
}
