import Link from "next/link";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1rem]">
      <Link href="/">
        <h1 className=" text-lg font-semibold">
          <span className="text-primary">EAD</span> Ensino
        </h1>
      </Link>

      <div className="flex items-center">
        <Link href="/">
          <h1 className=" mr-5 text-sm font-semibold">Entrar</h1>
        </Link>
        <Link href="/">
          <Button variant="outline">
          <h1 className=" text-sm font-semibold">Cadastrar</h1>
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default Header;
