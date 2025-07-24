"use client";

import { ReactLenis } from "lenis/react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      options={{
        duration: 2,
        autoRaf: true,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
