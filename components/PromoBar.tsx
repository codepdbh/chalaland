import { cn } from "@/lib/utils";

interface PromoBarProps {
  text: string;
  className?: string;
}

export default function PromoBar({ text, className }: PromoBarProps) {
  return (
    <div
      className={cn(
        "w-full bg-orange py-4 px-4 shadow-lg shadow-orange/15",
        className
      )}
    >
      <p className="text-center text-white text-sm sm:text-base font-semibold font-heading tracking-wide max-w-4xl mx-auto">
        {text}
      </p>
    </div>
  );
}
