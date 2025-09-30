'use client'

import React, { FC, PropsWithChildren } from "react";
import { Header } from "@/features/Header";
import { Footer } from "@/features/footer";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
