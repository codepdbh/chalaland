import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, getAssetPath } from "@/lib/utils";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${getAssetPath(post.image)})` }}
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-orange px-3 py-1 text-xs font-bold text-white shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-gray-text mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readTime} lectura</span>
        </div>

        <h3 className="font-heading text-xl font-bold text-dark mb-2 group-hover:text-orange transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-gray-text leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-teal-hover transition-colors"
        >
          Leer más
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
