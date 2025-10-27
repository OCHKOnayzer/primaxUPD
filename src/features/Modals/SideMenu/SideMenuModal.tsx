"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/shared";
import { Button } from "@/shared";
import Link from "next/link";
import {
  ButtonVariant,
  ButtonType,
  ButtonSize,
} from "@/types/enums/buttonEnums";
import { sideMenuItems } from "./items";
import { useControls } from "./hooks";

export const SideMenuModal = ({
  isAnimatingClose,
}: {
  isAnimatingClose: boolean;
}) => {
  const isOpen = useModal((state) => state.isOpen);

  const { controls, start, handleClose } = useControls();

  useEffect(() => {
    if (isOpen) start();
    if (isAnimatingClose) handleClose();
  }, [isOpen, isAnimatingClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="side-menu"
          className="fixed left-0 top-0 h-full w-[20vw] bg-white z-40 shadow-lg flex justify-start"
          initial={{ x: "-100%", backdropFilter: "blur(0px)" }}
          animate={controls}
          onClick={(e) => e.stopPropagation()}
        >
          <Button
            onClick={handleClose}
            className="fixed top-4 left-[calc(20vw+16px)] text-white hover:text-black hover:bg-gray-200 transition-colors z-50 shadow-lg"
            variant={ButtonVariant.bordered}
            type={ButtonType.button}
            size={ButtonSize.md}
          >
            x
          </Button>
          <div className="p-4 flex flex-col w-full">
            <div className="flex flex-col gap-[12px]">
              {sideMenuItems.map((items, key) => (
                <Link
                  className="h-[40px] flex items-center justify-center rounded-[10px] hover:bg-indigo-100"
                  href={"/"}
                  key={key}
                >
                  <div className="layout-area flex gap-sm items-center">
                    <span className="">{items.image}</span>
                    <span>{items.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
