"use client";

import Link from "next/link";
import { Button } from "./button";
import { Card } from "./card";
import { signIn, signOut, useSession } from "next-auth/react";

import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

import React from "react";
import Image from "next/image";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);
  return (
    <Card className="flex items-center justify-between p-[1rem]">
      <Link href="/">
        <h1 className=" text-lg font-semibold">
          <span className="text-primary">EAD</span> Ensino
        </h1>
      </Link>

      {status === "unauthenticated" && (
        <div className="flex items-center">
          <Button onClick={handleLoginClick} variant="ghost">
            <h1 className=" text-sm font-semibold">Entrar</h1>
          </Button>

          <Button variant="outline">
            <h1 className=" text-sm font-semibold">Cadastrar</h1>
          </Button>
        </div>
      )}

      {status === "authenticated" && data.user && (
        
        <div className="relative flex items-center px-4">
          <Button onClick={handleMenuClick} variant="link">
            <Avatar>
              <AvatarFallback>
                {data.user.name?.[0].toUpperCase()}
              </AvatarFallback>

              {data.user.image && <AvatarImage src={data.user.image} />}
            </Avatar>
          </Button>

          {menuIsOpen && (
            <div className="absolute left-0 top-14 z-50 flex h-[100px] w-full flex-col items-center justify-center rounded-lg bg-secondary shadow-md">
              <Link href="/my-trips" onClick={() => setMenuIsOpen(false)}>
                <Button variant="ghost">Minha Conta</Button>
              </Link>
              <Button variant="ghost" onClick={handleLogoutClick}>
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default Header;
