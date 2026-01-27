// Types
export type { BlogPost } from "./types";

// Individual posts
import { ComoImplementarSGSI } from "./como-implementar-sgsi";
import { ComoIniciarLGPD } from "./como-iniciar-lgpd";
import { Checklist2026 } from "./checklist-lgpd-2026";
import { ImpactoLGPDAmbiente } from "./impacto-lgpd-ambientes";
import { Top5Riscos } from "./top-5-riscos";


// All posts array (ordered by date, most recent first)
export const blogPosts = [
  Top5Riscos,
  ImpactoLGPDAmbiente,
  Checklist2026,
  ComoImplementarSGSI,
  ComoIniciarLGPD,
];

// Re-export individual posts for direct access if needed
export {
  Top5Riscos,
  ImpactoLGPDAmbiente,
  Checklist2026,
  ComoImplementarSGSI,
  ComoIniciarLGPD,
};
