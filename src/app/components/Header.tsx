"use client";

import { useEffect, useState } from "react";
import { lilita_one } from "../layout";
import { motion } from "framer-motion";
import {
  User,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import AmazingButton from "./buttons/AmazingButton";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export default function Header({ user }: { user: User }) {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const logoutUser = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="mx-auto flex h-fit w-full items-center justify-between px-5 py-3 text-zinc-200 lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[80%]">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <p
          className={`${lilita_one.className} text-2xl text-zinc-200 md:text-4xl`}
        >
          Football App
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        {user ? (
          <AmazingButton
            text="Sign Out"
            variant
            className="px-6 py-2 text-xs"
            onClick={logoutUser}
          />
        ) : (
          <a className="cursor-pointer rounded-md bg-indigo-600 px-5 py-1.5 text-sm tracking-wide transition-all hover:bg-indigo-500">
            Log In
          </a>
        )}
      </motion.div>
    </div>
  );
}
