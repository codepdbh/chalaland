import type { PriceRow } from "@/data/packages";

interface PriceTableProps {
  title: string;
  prices: PriceRow[];
  note?: string;
}

export default function PriceTable({ title, prices, note }: PriceTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="bg-dark px-5 py-3">
        <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wide">
          {title}
        </h4>
      </div>
      <div className="divide-y divide-gray-100">
        {prices.map((row, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-3 hover:bg-smoke/50 transition-colors"
          >
            <span className="text-sm text-gray-text">{row.people}</span>
            <span className="text-sm font-semibold text-dark">{row.price}</span>
          </div>
        ))}
      </div>
      {note && (
        <div className="px-5 py-2 bg-smoke/50 border-t border-gray-100">
          <p className="text-xs text-gray-text italic">{note}</p>
        </div>
      )}
    </div>
  );
}
