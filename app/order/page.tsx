"use client"

import React, { useState } from 'react';
import ThemeSwitch from "@/components/ThemeSwitch";
import { Select, SelectItem } from "@nextui-org/react";
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {RadioGroup, Radio, cn} from "@nextui-org/react";

import Link from "next/link";
import { CustomRadio } from '@/components/CustomRadio';

const menuItems = ["Home", "past builds", "samples", "Services", "Our Team"];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  
  
  
  
  

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
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
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

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="flex items-center justify-center h-screen">
  <Card className="py-1 w-80 h-auto">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">type of order</p>
      <small className="text-default-500">pls select</small>
      <h4 className="font-bold text-large">what do you want to order</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <RadioGroup label="" description="be careful on what you order">
        <CustomRadio description="Order a Discord Bot" value="Bot">
          Bot 20$
        </CustomRadio>
        <CustomRadio description="Order a Discord Bot's Dashboard" value="website">
          Dashboard 10$
        </CustomRadio>
        <CustomRadio
          description="Order a Discord Bot and its Dashboard"
          value="both"
        >
          Both 25$
        </CustomRadio>
      </RadioGroup>
    </CardBody>
  </Card>
</div>
        </div>
      


      
    </>
  );
}
