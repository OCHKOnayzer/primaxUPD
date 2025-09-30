import { PropsWithChildren } from 'react';
import { Layout } from "@/shared/ui/Layout";

export default function BaseLayout({ children }: PropsWithChildren) {
  return <Layout>{children}</Layout>;
}