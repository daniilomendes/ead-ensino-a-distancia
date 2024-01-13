import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import Link from "next/link";

const PresentationTitle = () => {
  return (
    <div className="bg-presentation-background container mx-auto h-auto bg-cover bg-no-repeat p-5">
      <div className="flex flex-col justify-start">
        <p className="mt-5 text-lg font-bold text-primary">ACESSO ILIMITADO</p>
        <p className=" mt-5 text-4xl font-bold">
          Tenha acesso aos melhores <br /> tutoriais de Programação.
        </p>
        <p className="mt-5 text-lg">
          Estude de onde estiver, a qualquer momento, e continue <br />{" "}
          evoluindo como programador.
        </p>
        <Link href="/">
          <Button className="mt-5 w-full" variant="outline">
            <p className="mr-2">ACESSE AGORA</p>
            <Play size={16} />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ChevronDown className="mt-10 " size={30} />
      </div>
    </div>
  );
};

export default PresentationTitle;
