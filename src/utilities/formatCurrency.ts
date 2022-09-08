const CURRENCY_FOMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "INR",
});
export function formatCurrency(number: number) {
  return CURRENCY_FOMATTER.format(number);
}
