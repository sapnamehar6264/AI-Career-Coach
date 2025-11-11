"use client";

import React, { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  // Wait until after client-side hydration to show the app
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Prevent rendering on the server
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
