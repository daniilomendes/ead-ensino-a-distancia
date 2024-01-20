"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Card } from "./card";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import {
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  NotebookText,
} from "lucide-react";
import { Separator } from "./separator";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = () => {
    signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-[18.875rem]">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Bons estudos!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="mt-4 flex flex-col gap-2">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/all-courses">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <NotebookText size={16} />
                  Todos os cursos
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">EAD</span> Ensino
        </h1>
      </Link>

      {status === "unauthenticated" && (
        <div className="flex items-center">
          <Button variant="outline">
            <h1 className=" text-sm font-semibold">Login</h1>
          </Button>
        </div>
      )}

      {status === "authenticated" && data.user && (
        <div className="relative flex items-center">
          <Avatar>
            <AvatarFallback>{data.user.name?.[0].toUpperCase()}</AvatarFallback>

            {data.user.image && <AvatarImage src={data.user.image} />}
          </Avatar>
        </div>
      )}
    </Card>
  );
};

export default Header;
