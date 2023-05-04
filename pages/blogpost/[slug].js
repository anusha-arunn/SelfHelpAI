import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const [post, setPost] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setPost(data);
      });
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="py-5 md:pb-5 md:pt-1 md:px-6 lg:pb-11 lg:pt-1">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            className="font-semilight tracking-tight text-slate-400"
            href="/Articles"
          >
            ← Back to Articles
          </Link>
        </div>
      </div>
      <article className="mx-auto max-w-2xl prose prose-stone dark:prose-invert">
        <div className="text-left">
          <div className="text-xl font-semibold dark:text-gray-100">
            {post.title}
          </div>
          <div className="text-m font-light text-slate-800 dark:text-gray-200">
            {post.description}
          </div>
          <br />
        </div>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: post.blog }}
        />
      </article>
    </>
  );
}
