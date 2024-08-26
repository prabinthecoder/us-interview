import BackButton from "@/components/back-button";
import { getInterviewPost } from "@/data/interview";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getInterviewPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/interview/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getInterviewPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <BackButton />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
            ? `${DATA.url}${post.metadata.image}`
            : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/interview/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <p className="p-2 mt-4 mb-4 bg-sky-100 text-sky-900 text-xs rounded">When it is your turn, PLEASE SHARE your Visa Interview Experience here. </p>
      <Image
        src={post.metadata.image}
        alt={post.metadata.title}
        width={500}
        height={400}
        className="h-40 w-full overflow-hidden object-cover object-center rounded mb-8"
      />
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
      <footer className="mt-5">
        <p className="text-xs text-neutral-600 dark:text-neutral-400">Copyright © 2024 Prabin Jaishi. All rights reserved.</p>
      </footer>
    </section>
  );
}
