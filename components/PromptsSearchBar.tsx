'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';

export default function PromptsSearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSearch = searchParams.get('search') || '';

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get('search') as string;

        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set('search', search);
        } else {
            params.delete('search');
        }

        router.push(`/prompts?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full sm:w-auto">
            <input
                type="text"
                name="search"
                defaultValue={currentSearch}
                placeholder="Search prompts..."
                className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full sm:w-64 text-sm transition-all"
            />
            <Search className="absolute left-3.5 top-3 text-gray-400 w-4 h-4 pointer-events-none" />
        </form>
    );
}
