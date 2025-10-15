"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useModal } from "@/shared"
import { Button } from "@/shared"

import {
  ButtonVariant,
  ButtonType,
  ButtonSize,
} from "@/types/enums/buttonEnums";


export const SideMenuModal = () => {
  const isOpen = useModal((state) => state.isOpen)
  const closeModal = useModal((state) => state.toggleModalWindow)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed left-0 top-0 h-full w-[20vw] bg-white z-50 shadow-lg flex justify-start"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <div className="p-4 flex flex-col w-full">
              <Button onClick={()=> closeModal()} variant={ButtonVariant.default} type={ButtonType.button} size={ButtonSize.md}> x </Button>
              <p>hello SideMenuModal</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
