"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import antdTheme from "./themes/antd";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // ✅ this is stable
  const [query] = useState(() => new QueryClient());

  return (
    <ConfigProvider theme={antdTheme}>
      {/* Ant Design Theme */}
      <QueryClientProvider client={query}>
        {/* Tanstack Query Context API */}
        {children}
      </QueryClientProvider>
    </ConfigProvider>
  );
}
