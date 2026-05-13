import {
  MapPin, Leaf, Languages, Footprints, Award, Clock, Waves,
} from "lucide-react";
import { reasons } from "@/data/reasons";
import SectionTitle from "./SectionTitle";

const iconMap: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-7 h-7 text-orange" />,
  Leaf: <Leaf className="w-7 h-7 text-orange" />,
  Languages: <Languages className="w-7 h-7 text-orange" />,
  Footprints: <Footprints className="w-7 h-7 text-orange" />,
  Award: <Award className="w-7 h-7 text-orange" />,
  Clock: <Clock className="w-7 h-7 text-orange" />,
  Waves: <Waves className="w-7 h-7 text-orange" />,
};

export default function ReasonsSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="Razones para Visitarnos"
          subtitle="No se trata solo de llegar a un lugar bonito. Se trata de cómo te recibe, quién lo cuida y qué queda después de tu visita."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-7">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group rounded-2xl border border-gray-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 || index === 3
                  ? "dark-card text-white lg:col-span-3"
                  : "bg-smoke text-dark lg:col-span-2"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange/10 transition-transform duration-300 group-hover:scale-110">
                {iconMap[reason.icon] || <Award className="w-7 h-7 text-orange" />}
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">
                {reason.title}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  index === 0 || index === 3 ? "text-white/70" : "text-gray-text"
                }`}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
