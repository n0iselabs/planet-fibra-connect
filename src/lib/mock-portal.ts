// Dados fictícios do portal (demonstração). Na integração, vêm do ERP via API.

export const CLIENTE = { nome: "Marina", inicial: "M" };

export const PROXIMA_FATURA = { valor: "109,90", vence: "12/08/2026" };

// Código PIX ilustrativo — claramente não funcional (não pagável).
export const PIX_CODE = "PIX-DEMO-PLANETTEL-700MEGA-0000-0000-0000";

export type Fatura = {
  id: string;
  mes: string;
  valor: string;
  vence: string;
  pago: boolean;
};

export const FATURAS: Fatura[] = [
  { id: "2026-08", mes: "Agosto 2026", valor: "109,90", vence: "12/08/2026", pago: false },
  { id: "2026-07", mes: "Julho 2026", valor: "109,90", vence: "12/07/2026", pago: true },
  { id: "2026-06", mes: "Junho 2026", valor: "109,90", vence: "12/06/2026", pago: true },
  { id: "2026-05", mes: "Maio 2026", valor: "109,90", vence: "12/05/2026", pago: true },
  { id: "2026-04", mes: "Abril 2026", valor: "109,90", vence: "12/04/2026", pago: true },
];
