'use client';

import Link from 'next/link';
import React, { use } from 'react'

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
