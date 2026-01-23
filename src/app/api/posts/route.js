export async function GET(request) {
    // Application Logic
    return Response.json([
        {
            id: 1,
            title: "Post 1",
            body: "Post 1 Body"
        },
        {
            id: 2,
            title: "Post 2",
            body: "Post 2 Body"
        },
    ]);
}

export async function POST(request) {
    const post = await request.json();

    // Further store in Database

    return Response.json({ message: "OK", post });
}