import { PropsWithChildren } from "react";
import { Layout } from "@/shared";

export default function BaseLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}
