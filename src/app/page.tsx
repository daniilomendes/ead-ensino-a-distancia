import CardPresentation from "@/components/ui/card-presentation";
import PresentationTitle from "@/components/ui/presentation";
import SectionTitle from "@/components/ui/section-title";

export default function Home() {
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
