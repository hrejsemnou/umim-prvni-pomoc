import BaseLayout from "@/app/baseLayout";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { siteMetadata } from "@/app/siteMetadata";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseLayout header={<Navigation />} footer={<Footer />}>
      {children}
    </BaseLayout>
  );
}
