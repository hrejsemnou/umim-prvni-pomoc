import BaseLayout from "@/app/baseLayout";
import { siteMetadata } from "@/app/siteMetadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>; // No nav/footer
}
