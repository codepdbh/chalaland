import {
  Users, Languages, Waves, Home, Footprints, Leaf, ShieldCheck,
} from "lucide-react";
import { reasons, reasonsSectionData } from "@/data/reasons";
import SectionTitle from "./SectionTitle";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-orange" />,
  Languages: <Languages className="w-6 h-6 text-orange" />,
  Waves: <Waves className="w-6 h-6 text-orange" />,
  Home: <Home className="w-6 h-6 text-orange" />,
  Footprints: <Footprints className="w-6 h-6 text-orange" />,
  Leaf: <Leaf className="w-6 h-6 text-orange" />,
};

export default function ReasonsSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title={reasonsSectionData.title}
          subtitle={reasonsSectionData.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange/20">
                {iconMap[reason.icon] || <ShieldCheck className="w-6 h-6 text-orange" />}
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-dark">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-text">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
