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
    <section className="bg-smoke py-16 md:py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Razones para Visitarnos"
          subtitle="Descubre por qué somos un destino único en la Amazonía"
        />

        <div className="space-y-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                {iconMap[reason.icon] || <Award className="w-7 h-7 text-orange" />}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-dark text-base mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
