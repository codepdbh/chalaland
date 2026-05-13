import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre turismo comunitario, naturaleza amazónica, consejos de viaje y cultura indígena.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        eyebrow="Cuaderno de viaje"
        subtitle="Historias, consejos y miradas desde la selva, la comunidad y el lago."
        image="/assets/gallery/flora-3.jpg"
      />

      {/* Blog Grid */}
      <section className="canopy-section py-14 md:py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
