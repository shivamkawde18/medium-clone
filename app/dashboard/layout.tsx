import { HomeComponent } from "@/components";
import { Providers } from "../providers";
import StyledJsxRegistry from "../registry";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
        <HomeComponent/>
      <StyledJsxRegistry>{children}</StyledJsxRegistry>
    </Providers>
  );
}
