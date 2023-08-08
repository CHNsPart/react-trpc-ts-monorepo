import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@npm_workspace/server";

export const trpc = createTRPCReact<AppRouter>();