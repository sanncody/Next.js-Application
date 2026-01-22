'use client';

import { useParams } from "next/navigation";

export default function ParticularBlogPost() {
    const params = useParams();
    return (
        <h1>This is a blog post with id: {params.postId}</h1>
    );
}