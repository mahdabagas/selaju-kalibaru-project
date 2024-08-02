"use client";

import Link from "next/link";
import React from "react";

import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 text-primary drop-shadow-md md:px-12 lg:px-20 lg:py-6">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="object-cover object-center"
            width={60}
            height={20}
          />
        </Link>
        <Link
          href="/"
          className="rounded-md bg-gradient-to-r from-primary to-secondary bg-clip-text text-lg font-medium text-white lg:text-2xl"
          style={{ color: "transparent" }}
        >
          Selaju Kalibaru
        </Link>
      </div>
      {/* link Desktop */}
      <div className="hidden lg:block">
        <ul className="grid w-[30rem] grid-cols-3 place-items-end text-xl">
          <Link
            href="/#wisata"
            className="transition duration-150 hover:underline"
          >
            Wisata
          </Link>
          <Link
            href="/festival-kopi"
            className="transition duration-150 hover:underline"
          >
            Festival Kopi
          </Link>
          <Link
            href="/tentang-kopi"
            className="transition duration-150 hover:underline"
          >
            Tentang Kopi
          </Link>
        </ul>
      </div>
      {/* Link Phone or Tablet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <RiMenu3Fill className="size-6 lg:size-10" />
          </SheetTrigger>
          <SheetContent className="bg-white text-primary" side="right">
            <SheetHeader>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="mb-4 rounded-md bg-gradient-to-r from-primary to-secondary bg-clip-text text-start text-lg font-medium text-white lg:text-2xl"
                  style={{ color: "transparent" }}
                >
                  Selaju Kalibaru
                </Link>
              </SheetClose>
            </SheetHeader>
            <SheetFooter>
              <div className="flex w-full flex-col justify-start gap-3">
                <SheetClose asChild>
                  <Link href="/#wisata">Wisata</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/festival-kopi">Festival Kopi</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/tentang-kopi">Tentang Kopi</Link>
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
