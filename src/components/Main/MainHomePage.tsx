import React from "react";
import { Enterprise } from "./Enterprise/Enterprise";
import { Features } from "./Features/Features";
import { ValueProposition } from "./ValueProposition/ValueProposition";

export const MainHomePage = () => {
  return (
    <div>
      <Features />
      <Enterprise />
      <ValueProposition />
    </div>
  );
};
