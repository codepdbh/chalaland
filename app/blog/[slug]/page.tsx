import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import BlogCard from "@/components/BlogCard";
import PageHero from "@/components/PageHero";

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

  // Simple markdown-like rendering (paragraphs, lists and headings)
  const renderContent = (content: string) => {
    const elements: React.ReactNode[] = [];
    let paragraph: string[] = [];
    let list: string[] = [];

    const flushParagraph = () => {
      if (paragraph.length === 0) return;
      elements.push(
        <p key={`p-${elements.length}`} className="mb-4 text-sm leading-relaxed text-gray-text">
          {paragraph.join(" ")}
        </p>
      );
      paragraph = [];
    };

    const flushList = () => {
      if (list.length === 0) return;
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="my-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-text"
        >
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
      list = [];
    };

    content.split("\n").forEach((line) => {
      const block = line.trim();

      if (!block) {
        flushParagraph();
        flushList();
        return;
      }

      if (block.startsWith("### ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="mt-7 mb-2 font-heading text-lg font-bold text-dark">
            {block.replace("### ", "")}
          </h3>
        );
        return;
      }

      if (block.startsWith("## ")) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="mt-9 mb-3 font-heading text-2xl font-bold text-dark">
            {block.replace("## ", "")}
          </h2>
        );
        return;
      }

      if (block.startsWith("- ")) {
        flushParagraph();
        list.push(block.replace("- ", ""));
        return;
      }

      flushList();
      paragraph.push(block);
    });

    flushParagraph();
    flushList();

    return elements;
  };

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        eyebrow={post.category}
        image={post.image}
        align="left"
      />

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
    </>
  );
}
