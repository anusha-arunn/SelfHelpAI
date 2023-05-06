import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Articles() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://aitherapist.co/api/blog", { method: "GET" })
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!blogs) return <p>No data</p>;
  return (
    <>
      <Head>
        <title>Wellness Blog</title>
      </Head>

      <div className="mx-auto max-w-3xl pt-5">
        <div className="text-center py-7 text-3xl">
          Our Wellness Blog Center
        </div>
        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 lg:grid-cols-2">
          {blogs.map((post: any) => {
            console.log(post.title);
            return (
              <div key={post.slug}>
                <Link href={`/blogpost/${post.slug}`}>
                  <div className="transition max-w-fit ease-in duration-150 mb-5 p-2 rounded-lg text-left hover:scale-105 bg-slate-100/50 dark:bg-slate-800/70">
                    <div className="dark:text-slate-200">{post.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-light">
                      {post.description}
                    </div>
                  </div>
                  <div />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
