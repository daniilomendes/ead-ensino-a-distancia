"use client";

import CardPresentation from "@/components/ui/card-presentation";
import PresentationTitle from "@/components/ui/presentation";
import SectionTitle from "@/components/ui/section-title";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    return router.push("/homeAuth");
  }
  
  return (
    <div>
      <PresentationTitle />
      <CardPresentation />

      <div className="mb-5 flex flex-col items-center justify-center">
        <SectionTitle>AULAS JÁ DISPONÍVEIS</SectionTitle>
      </div>
    </div>
  );
}
