"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const HomeAuth = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") {
    return router.push("/");
  }

  return <div>HOME AUTH</div>;
};

export default HomeAuth;
