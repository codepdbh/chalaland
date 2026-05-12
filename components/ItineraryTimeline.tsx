import { cn } from "@/lib/utils";
import type { ItineraryDay } from "@/data/packages";
import { Utensils, Activity } from "lucide-react";

interface ItineraryTimelineProps {
  itinerary: ItineraryDay[];
}

export default function ItineraryTimeline({ itinerary }: ItineraryTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange/20 hidden md:block" />

      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <div key={day.day} className="relative flex gap-6">
            {/* Day Circle */}
            <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-orange text-white items-center justify-center font-heading font-bold text-sm z-10">
              D{day.day}
            </div>

            {/* Card */}
            <div
              className={cn(
                "flex-1 bg-white border border-gray-200 rounded-lg p-5 md:p-6 shadow-sm",
                "hover:shadow-md transition-shadow duration-300"
              )}
            >
              {/* Mobile day badge */}
              <div className="md:hidden inline-block px-3 py-1 bg-orange text-white text-xs font-bold rounded-full mb-3">
                Día {day.day}
              </div>

              <h4 className="font-heading font-bold text-dark text-lg mb-2">
                {day.title}
              </h4>
              <p className="text-sm text-gray-text leading-relaxed mb-4">
                {day.description}
              </p>

              {/* Meals */}
              {day.meals && day.meals.length > 0 && (
                <div className="flex items-start gap-2 mb-3">
                  <Utensils className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-dark uppercase tracking-wide">
                      Comidas:
                    </span>
                    <span className="text-sm text-gray-text ml-1">
                      {day.meals.join(", ")}
                    </span>
                  </div>
                </div>
              )}

              {/* Activities */}
              {day.activities.length > 0 && (
                <div className="flex items-start gap-2">
                  <Activity className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-dark uppercase tracking-wide">
                      Actividades:
                    </span>
                    <ul className="mt-1 space-y-1">
                      {day.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-text flex items-start gap-2"
                        >
                          <span className="text-orange mt-1.5">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
