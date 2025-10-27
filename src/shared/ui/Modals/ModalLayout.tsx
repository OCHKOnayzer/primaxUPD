import React from "react";
import { CurrentModal } from "@/features";

export const ModalLayout = () => {
  return (
    <div className="absolute bg-[#80808098] h-full w-full z-20">
      <CurrentModal />
    </div>
  );
};
