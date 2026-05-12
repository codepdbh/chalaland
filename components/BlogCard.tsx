import Link from "next/link";
import { cn, formatDate, getAssetPath } from "@/lib/utils";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${getAssetPath(post.image)})` }}
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full">
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

        <h3 className="font-heading font-bold text-dark text-lg mb-2 group-hover:text-orange transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-gray-text leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-block text-sm font-semibold text-teal hover:text-teal-hover transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </article>
  );
}
