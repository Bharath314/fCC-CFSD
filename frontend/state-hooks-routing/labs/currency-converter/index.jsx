const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD"];

  const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, JPY: 110.0, AUD: 1.35 },
    EUR: { EUR: 1, USD: 1.18, GBP: 0.88, JPY: 129.53, AUD: 1.59 },
    GBP: { GBP: 1, USD: 1.33, EUR: 1.14, JPY: 147.0, AUD: 1.80 },
    JPY: { JPY: 1, USD: 0.0091, EUR: 0.0077, GBP: 0.0068, AUD: 0.012 },
    AUD: { AUD: 1, USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 82.0 },
  };

  const conversions = useMemo(() => {
    console.log("calculated: ", fromCurrency)
    return Object.fromEntries(Object.keys(exchangeRates[fromCurrency]).map(key => [key, (amount * exchangeRates[fromCurrency][key]).toFixed(2)]));
  }, [amount, fromCurrency])

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="converter-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          min="0"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="result">
        <h3>Converted Amount:</h3>
        <p>
          {amount} {fromCurrency} = {conversions[toCurrency]} {toCurrency}
        </p>
      </div>
    </div>
  );
}