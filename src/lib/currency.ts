const COP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export function formatCOP(amount: number): string {
  return COP.format(amount);
}

export function formatCompactCOP(amount: number): string {
  return formatCOP(amount).replace("COP", "$").trim();
}
