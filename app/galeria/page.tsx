"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GaleriaPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/galeria/fotos/");
  }, [router]);

  return (
    <div className="pt-[130px] lg:pt-[140px] min-h-screen flex items-center justify-center">
      <p className="text-gray-text">Redirigiendo...</p>
    </div>
  );
}
