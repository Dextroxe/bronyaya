"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import { useState } from "react";

const queryClient = new QueryClient();

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
