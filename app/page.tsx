"use client";

import { SparklesCore } from "@/components/Sparkles";
import ThemeSwitch from "@/components/ThemeSwitch";
import { TypewriterEffect } from "@/components/typewriter-effect";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuItems = ["Home", "past builds", "samples", "Services", "Our Team"];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const words = [
    {
      text: "order",
    },
    {
      text: "fullstack",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Discord",
    },
    {
      text: "Bots",
    },
  ];

  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="center">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarBrand>
            <p className="font-bold text-inherit">Shop</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
          <NavbarBrand>
            <p className="font-bold text-inherit">Shop</p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              past builds
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              samples
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              past builds
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Our Team
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="" justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Get in Touch</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">
              Donate
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.5] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <div className="flex flex-col items-center justify-center h-[40rem] ">
            <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
              Discover the world of possibilities with us
            </p>
            <TypewriterEffect words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
              <Button className="w-40 h-10">Get in Touch</Button>
              <Button
                className="w-40 h-10 rounded-xl"
                href="order"
                as={Link}
                color="primary"
                variant="solid"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
