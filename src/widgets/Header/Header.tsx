"use client";

import React from "react";
import Image from "next/image";
import { Search } from "../Search";
import { Button } from "@/shared";
import { useModal } from "@/shared";

import {
  ButtonVariant,
  ButtonType,
  ButtonSize,
} from "@/types/enums/buttonEnums";

export const Header = () => {
  const openModal = useModal((state) => state.toggleModalWindow);

  return (
    <header className="relative flex justify-center h-[12vh] bg-custom-gradient after:content-[''] after:block after:w-full after:h-6 after:rounded-t-[24px] after:bg-white after:absolute after:-bottom-px after:left-0">
      <div className="flex items-center w-[75%] h-4/5">
        <div className="flex justify-between w-full h-3/5">
          <div className="flex items-center gap-2">
            <Button
              variant={ButtonVariant.bordered}
              type={ButtonType.button}
              size={ButtonSize.sm}
              onClick={() => openModal()}
            >
              <Image src={"/menu.png"} height={32} width={32} alt="" />
            </Button>
            <div className="flex items-center w-[40px] h-[40px]">PRIMAX</div>
          </div>
          <Search />
          <div>hello world</div>
        </div>
      </div>
    </header>
  );
};
