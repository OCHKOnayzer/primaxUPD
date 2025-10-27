"use client";

import React, { useState } from "react";
import { SideMenuModal } from "./SideMenu";
import { useModal } from "@/shared";

export const CurrentModal = () => {
  const [isAnimatingClose, setIsAnimatingClose] = useState<boolean>(false);

  const {currentModal} = useModal()

  return (
    <div
      onClick={() => setIsAnimatingClose(true)}
      className="h-full w-full border-2"
    >
      {/* {switch()} */}

      <SideMenuModal isAnimatingClose={isAnimatingClose} />
    </div>
  );
};
