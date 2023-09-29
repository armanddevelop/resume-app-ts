import { createContext } from "react";
import { ContextTypeApp } from "../@types/@types.App";

export const ContextApp = createContext<ContextTypeApp | null>(null);
