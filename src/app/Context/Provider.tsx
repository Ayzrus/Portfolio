"use client";

import React, { ReactNode } from "react";
import { LanguageProvider } from "./LanguageContext";

export default function Provider({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
