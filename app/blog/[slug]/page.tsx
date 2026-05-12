import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import BlogCard from "@/components/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post no encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  // Related posts (exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  // Simple markdown-like rendering (paragraphs and headings)
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-lg font-heading font-bold text-dark mt-6 mb-2">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-heading font-bold text-dark mt-8 mb-3">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 text-gray-text text-sm my-4">
            {items.map((item, j) => (
              <li key={j}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-gray-text text-sm leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="pt-[130px] lg:pt-[140px]">
      {/* Hero Image */}
      <section className="relative h-[30vh] sm:h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* Content */}
      <section className="bg-white py-12 md:py-16 px-4">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-teal hover:text-teal-hover transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Blog
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-gray-text mb-4">
            <span className="px-3 py-1 bg-orange/10 text-orange rounded-full font-semibold">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime} lectura</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-dark mb-6">
            {post.title}
          </h1>

          {/* Author */}
          <p className="text-sm text-gray-text mb-8 pb-6 border-b border-gray-200">
            Por <span className="font-semibold text-dark">{post.author}</span>
          </p>

          {/* Content */}
          <article className="mb-12">{renderContent(post.content)}</article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-gray-200 pt-10">
              <h2 className="font-heading font-bold text-dark text-xl mb-6">
                Artículos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
