"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/shared";
import { Button } from "@/shared";
import { ButtonVariant, ButtonType } from "@/shared/ui/Button";
import { CommonSize } from "@/types";
import { SideMenuList } from "./ui";
import { useControls } from "./hooks";

export const SideMenuModal = ({
  isAnimatingClose,
}: {
  isAnimatingClose: boolean;
}) => {
  const isOpen = useModal((state) => state.isOpen);

  const { controls, closing, start, handleClose } = useControls();

  useEffect(() => {
    if (!closing) {
      if (isOpen) start();
      if (isAnimatingClose) handleClose();
    }
  }, [isOpen, isAnimatingClose, closing]);

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
            size={CommonSize.md}
            disabled={closing}
          >
            x
          </Button>
          <SideMenuList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
