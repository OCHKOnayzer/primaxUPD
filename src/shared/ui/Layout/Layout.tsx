"use client";

import React, { FC, PropsWithChildren } from "react";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { ModalLayout } from "@/shared";
import { useModal } from "@/shared";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const isModalOpen = useModal((state) => state.isOpen);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isModalOpen && <ModalLayout />}

      <main className="flex-1 relative">{children}</main>
      <Footer />
    </div>
  );
};
