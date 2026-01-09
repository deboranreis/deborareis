// Types
export type { BlogPost } from "./types";

// Individual posts
import { ComoImplementarSGSI } from "./como-implementar-sgsi";
import { ComoIniciarLGPD } from "./como-iniciar-lgpd";
import { Checklist2026 } from "./checklist-lgpd-2026";
import { ImpactoLGPDAmbiente } from "./impacto-lgpd-ambientes";


// All posts array (ordered by date, most recent first)
export const blogPosts = [
  ImpactoLGPDAmbiente,
  Checklist2026,
  ComoImplementarSGSI,
  ComoIniciarLGPD,
];

// Re-export individual posts for direct access if needed
export {
  ImpactoLGPDAmbiente,
  Checklist2026,
  ComoImplementarSGSI,
  ComoIniciarLGPD,
};
