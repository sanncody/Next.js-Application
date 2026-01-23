import { Suspense } from "react";
import Posts from "./components/posts";

// As this is a server component, so it can be made async. It renders only on server side
export default async function BlogPage() {
    // const posts = [
    //     {
    //         id: 1,
    //         title: "Post 1",
    //         body: "Post 1 Body"
    //     },
    //     {
    //         id: 2,
    //         title: "Post 2",
    //         body: "Post 2 Body"
    //     },
    //     {
    //         id: 3,
    //         title: "Post 3",
    //         body: "Post 3 Body"
    //     },
    //     {
    //         id: 4,
    //         title: "Post 4",
    //         body: "Post 4 Body"
    //     },
    //     {
    //         id: 5,
    //         title: "Post 5",
    //         body: "Post 5 Body"
    //     },
    // ];

    // If we want caching data from 3rd party api so that refreshed data will not come, we can use { cache: 'no-store' }

    // const apiData = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: "no-store" });
    // const posts = await apiData.json();


    /* Use promise based api call  */

    const promisifiedPost = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

    return (
        <div>
            <h3 className="text-5xl text-center m-10">Blog Posts</h3>
            <Suspense fallback={<div>Loading...</div>}>
                <Posts posts={promisifiedPost} />
            </Suspense>
        </div>
    );
}