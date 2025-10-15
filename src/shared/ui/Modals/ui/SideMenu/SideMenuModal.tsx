"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useModal } from "@/shared";
import { Button } from "@/shared";
import {
  ButtonVariant,
  ButtonType,
  ButtonSize,
} from "@/types/enums/buttonEnums";

export const SideMenuModal = () => {
  const isOpen = useModal((state) => state.isOpen);
  const closeModal = useModal((state) => state.toggleModalWindow);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 120, damping: 18 } });
    }
  }, [isOpen]);

  const handleClose = async () => {
    await controls.start({ x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } });
    closeModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="side-menu"
          className="fixed left-0 top-0 h-full w-[20vw] bg-white z-50 shadow-lg flex justify-start"
          initial={{ x: "-100%" }} 
          animate={controls}
        >
          <div className="p-4 flex flex-col w-full">
            <Button
              onClick={handleClose}
              variant={ButtonVariant.default}
              type={ButtonType.button}
              size={ButtonSize.md}
            >
              ×
            </Button>
            <p>hello SideMenuModal</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
