import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CloudRain,
  Info,
  ShieldAlert,
  SunMedium,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import PageHero from "@/components/PageHero";
import {
  agendaLegend,
  agendaMonths,
  agendaSeasons,
  agendaYear,
  type AgendaStatus,
  type PackageTone,
} from "@/data/agenda";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Agenda 2027",
  description:
    "Calendario operativo 2027 para reservar la ruta turística comunitaria Tsimane de Eco-cabañas CECASEM.",
};

const statusStyles: Record<
  AgendaStatus,
  {
    label: string;
    icon: LucideIcon;
    badge: string;
    panel: string;
    border: string;
    text: string;
  }
> = {
  recommended: {
    label: "Recomendado",
    icon: CheckCircle2,
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    panel: "bg-emerald-50/80",
    border: "border-emerald-200",
    text: "text-emerald-700",
  },
  caution: {
    label: "Con precaución",
    icon: AlertTriangle,
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
    panel: "bg-amber-50/80",
    border: "border-amber-200",
    text: "text-amber-700",
  },
  "not-recommended": {
    label: "No recomendado",
    icon: ShieldAlert,
    badge: "bg-red-50 text-red-700 ring-red-200",
    panel: "bg-red-50/80",
    border: "border-red-200",
    text: "text-red-700",
  },
};

const toneStyles: Record<PackageTone, string> = {
  national: "bg-amber-100 text-amber-900 ring-amber-200",
  "international-3": "bg-red-100 text-red-800 ring-red-200",
  "international-4": "bg-blue-100 text-blue-800 ring-blue-200",
  "international-5": "bg-yellow-100 text-yellow-900 ring-yellow-200",
};

const seasonIcons: Record<AgendaStatus, LucideIcon> = {
  recommended: SunMedium,
  caution: AlertTriangle,
  "not-recommended": CloudRain,
};

export default function AgendaPage() {
  return (
    <>
      <PageHero
        title={`Agenda operativa ${agendaYear}`}
        eyebrow="Calendario de reservas"
        subtitle="Consulta los meses recomendados, las temporadas con precaución y las fechas que no conviene reservar sin confirmación previa."
        image="/assets/gallery/landscape-3.jpg"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <CTAButton href="#meses" variant="secondary">
            <CalendarDays className="mr-2 h-4 w-4" />
            Ver meses
          </CTAButton>
          <CTAButton href="/reservas" variant="outline-white">
            Consultar reserva
          </CTAButton>
        </div>
      </PageHero>

      <section className="canopy-section px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {agendaSeasons.map((season) => {
              const styles = statusStyles[season.status];
              const SeasonIcon = seasonIcons[season.status];
              const StatusIcon = styles.icon;

              return (
                <article
                  key={season.title}
                  className={cn(
                    "glass-surface rounded-2xl border p-6",
                    styles.border
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-xs font-bold uppercase tracking-wide text-gray-text">
                        {season.period}
                      </p>
                      <h2 className="mt-2 text-xl font-bold text-dark">
                        {season.title}
                      </h2>
                    </div>
                    <span
                      className={cn(
                        "inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full",
                        styles.panel,
                        styles.text
                      )}
                    >
                      <SeasonIcon className="h-5 w-5" />
                    </span>
                  </div>
                  <span
                    className={cn(
                      "mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ring-1",
                      styles.badge
                    )}
                  >
                    <StatusIcon className="h-3.5 w-3.5" />
                    {styles.label}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-gray-text">
                    {season.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className="dark-card rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-orange">
                  <Info className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-wide text-white/50">
                    Guía rápida
                  </p>
                  <h2 className="text-2xl font-bold">
                    Antes de elegir fecha
                  </h2>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/8 p-4">
                  <p className="font-heading text-sm font-bold text-emerald-300">
                    Mejor temporada
                  </p>
                  <p className="mt-1 text-sm text-white/70">Mayo a julio</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/8 p-4">
                  <p className="font-heading text-sm font-bold text-red-300">
                    Evitar sin confirmar
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Febrero a abril
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/8 p-4">
                  <p className="font-heading text-sm font-bold text-amber-300">
                    Revisar clima
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Enero y agosto a diciembre
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Las fechas del cronograma son ventanas operativas. Fuera de esas
                fechas, o cuando una fecha figure como tentativa, se debe
                confirmar disponibilidad antes de avanzar con una reserva.
              </p>
            </div>

            <div className="glass-surface rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Clock3 className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-wide text-gray-text">
                    Leyenda del PDF
                  </p>
                  <h2 className="text-2xl font-bold text-dark">
                    Duración y público
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {agendaLegend.map((item) => (
                  <div
                    key={`${item.label}-${item.detail}`}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
                  >
                    <span
                      className={cn(
                        "h-5 w-5 flex-shrink-0 rounded-md ring-1",
                        toneStyles[item.tone]
                      )}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-dark">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-text">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {agendaMonths.map((month) => (
                  <Link
                    key={month.slug}
                    href={`#${month.slug}`}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-dark transition-colors hover:border-orange hover:text-orange"
                  >
                    {month.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="meses" className="bg-smoke px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow">
              <CalendarDays className="h-3.5 w-3.5" />
              Mes a mes
            </span>
            <h2 className="mt-5 text-3xl font-bold text-dark md:text-4xl">
              Ventanas operativas y recomendaciones
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-text md:text-base">
              Cada mes muestra las fechas del cronograma, el paquete previsto,
              duración, público y el nivel de recomendación para reservas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            {agendaMonths.map((month) => {
              const styles = statusStyles[month.status];
              const StatusIcon = styles.icon;

              return (
                <article
                  key={month.slug}
                  id={month.slug}
                  className={cn(
                    "glass-surface scroll-mt-36 rounded-2xl border p-5 md:p-6",
                    styles.border
                  )}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="font-heading text-xs font-bold uppercase tracking-wide text-gray-text">
                        {agendaYear}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold text-dark">
                        {month.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-text">
                        {month.guidance}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "inline-flex w-fit flex-shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ring-1",
                        styles.badge
                      )}
                    >
                      <StatusIcon className="h-3.5 w-3.5" />
                      {styles.label}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "mt-5 rounded-xl border p-4",
                      styles.panel,
                      styles.border
                    )}
                  >
                    <p className="text-sm leading-relaxed text-dark/78">
                      {month.recommendation}
                    </p>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-xl border border-gray-100 bg-white">
                    {month.events.map((event, index) => (
                      <div
                        key={`${month.slug}-${event.displayDates}-${event.packageName}-${index}`}
                        className={cn(
                          "grid grid-cols-1 gap-3 p-4 sm:grid-cols-[110px_120px_minmax(0,1fr)]",
                          index !== 0 && "border-t border-gray-100"
                        )}
                      >
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-text">
                            Semana
                          </p>
                          <p className="mt-1 text-sm font-bold text-dark">
                            {event.week}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-text">
                            Fechas
                          </p>
                          <p className="mt-1 text-sm font-bold text-dark">
                            {event.displayDates}
                          </p>
                          {event.tentative && (
                            <span className="mt-2 inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-bold text-red-700 ring-1 ring-red-200">
                              Tentativa
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-start gap-2">
                            <p className="min-w-0 flex-1 break-words text-sm font-bold text-dark">
                              {event.packageName}
                            </p>
                            <span
                              className={cn(
                                "inline-flex flex-shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1",
                                toneStyles[event.tone]
                              )}
                            >
                              {event.duration}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-gray-text">
                            Publico: {event.audience}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
