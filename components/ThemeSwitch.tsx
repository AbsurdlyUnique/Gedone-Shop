"use client"

import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(true);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setIsSelected(!isSelected);
    setTheme(isSelected ? "light" : "dark");
  };

  return (
    <div className="flex flex-col gap-2">
      <Switch
        isSelected={isSelected}
        onValueChange={handleThemeChange}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      >
      </Switch>
    </div>
  );
}
