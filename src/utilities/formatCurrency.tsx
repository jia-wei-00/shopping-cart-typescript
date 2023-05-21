const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "MYR",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default formatCurrency;
