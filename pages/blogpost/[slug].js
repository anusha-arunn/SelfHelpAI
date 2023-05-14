import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  const [post, setPost] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`https://aitherapist.co/api/getblogs?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [router.isReady]);

  if (isLoading) return <p>Loading...</p>;
  if (!post) return <p>No data</p>;

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
      <article className="mx-auto max-w-2xl prose prose-stone">
        <div className="text-left">
          <div className="text-xl font-semibold">{post.title}</div>
          <div className="text-m font-light text-slate-800">
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
