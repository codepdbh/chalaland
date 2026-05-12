"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SobreNosotrosPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/sobre-nosotros/sobre/");
  }, [router]);

  return (
    <div className="pt-[130px] lg:pt-[140px] min-h-screen flex items-center justify-center">
      <p className="text-gray-text">Redirigiendo...</p>
    </div>
  );
}
