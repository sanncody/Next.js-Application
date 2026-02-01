import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-center gap-10 px-5 py-2 bg-blue-800 text-2xl">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
            </nav>
        </div>
    );
}

export default Navbar;
