import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/blogs">
        <h1 className="text-2xl hover:underline hover:text-red-700">Blogs</h1>
      </Link>
      <Link href="/addblogs">
        <h1 className="text-2xl hover:underline hover:text-red-700">
          Add Blogs
        </h1>
      </Link>
    </div>
  );
}
