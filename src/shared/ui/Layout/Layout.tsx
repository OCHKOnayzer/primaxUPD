"use client";

import React, { FC, PropsWithChildren } from "react";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { ModalLayout } from "@/shared";
import { useModal } from "@/shared";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useModal();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isOpen && <ModalLayout />}
      <main className="flex-1 relative">
        <div className="flex justify-center">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
