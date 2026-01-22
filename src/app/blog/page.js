import Link from "next/link";

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

    const apiData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await apiData.json();
    return (
        <div>
            <h3 className="text-5xl text-center m-10">Blog Posts</h3>
            <div className="mt-5 flex flex-col gap-5 w-full">
                {
                    posts &&
                    posts.map((post, id) => {
                        return (
                            <div key={id} className="w-2/4 mx-auto bg-zinc-700 text-center py-3 font-semibold tracking-tight flex flex-col gap-5">
                                <Link href={`/blog/${post.id}`}>
                                    <h2 className="text-xl">{post.title}</h2>
                                </Link>
                                <p className="text-lg">{post.body}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}