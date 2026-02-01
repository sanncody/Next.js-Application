'use client';

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ParticularBlogPost() {
    const params = useParams();
    return (
        <div className="min-h-screen bg-zinc-800 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-zinc-700 rounded-lg shadow-lg p-8 md:p-12">
                <div className="text-center py-6 px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-amber-50 mb-6">
                        Blog Post
                    </h1>
                    <p className="text-xl md:text-2xl text-green-600 mt-2">
                        This is the blog post with the id: <span className="font-semibold text-blue-500">{params.postId}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}