'use client';

import Link from 'next/link';
import React, { use } from 'react'


/* Streaming of Data -> Server sends UI in pieces as each part becomes ready  */

/* 
use() lets a Server Component pass a Promise to a Client Component,
and the Client Component suspends until that promise resolves.

This allows:

- Header to render immediately

- Sidebar to render later

- Posts to render even later

All without blocking the whole page.
*/

/*
Timeline(real meaning of streaming)
Dashboard heading         ✅ shown immediately
"Loading user..."         ⏳ placeholder
"Loading posts..."        ⏳ placeholder

User data arrives         → User component appears
Posts data arrives later  → Posts appear
*/

/*
Real Life Analogy (Layman):

1. Fetching
🧑‍🍳 Wait till all dishes are cooked → serve everything together

2. Streaming
🧑‍🍳 Serve starter immediately, main course later, dessert last

use() = waiter who knows when each dish is ready 🍽️
*/

// It is a client component -> Renders on both server as well as on Client
const Posts = ({ posts }) => {
    const allPosts = use(posts);
    return (
        <div className="mt-5 flex flex-col gap-5 w-full flex-wrap">
            {
                allPosts &&
                allPosts.map((post, id) => {
                    return (
                        <div key={id} className="w-2/4 mx-auto bg-zinc-700 text-center px-5 py-3 font-semibold tracking-tight flex flex-col gap-5">
                            <Link href={`/blog/${post.id}`}>
                                <h2 className="text-xl text-purple-500">{post.title}</h2>
                            </Link>
                            <p className="text-lg">{post.body}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Posts
