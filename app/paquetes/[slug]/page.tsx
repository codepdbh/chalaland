import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageDetail from "@/components/PackageDetail";

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return { title: "Paquete no encontrado" };

  return {
    title: pkg.title,
    description: pkg.shortDescription,
    openGraph: {
      title: `${pkg.title} — ${pkg.duration} / ${pkg.nights}`,
      description: pkg.shortDescription,
      images: [{ url: pkg.image }],
    },
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) return notFound();

  return <PackageDetail pkg={pkg} />;
}
