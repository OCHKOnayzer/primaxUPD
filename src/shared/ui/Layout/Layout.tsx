"use client";

import React, { FC, PropsWithChildren } from "react";
import { Header } from "@/widgets";
import { Footer } from "@/widgets";
import { ModalLayout } from "../Modals";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <ModalLayout/>
      <main className="flex-1 relative">
        {children}
        </main>
      <Footer />
    </div>
  );
};
