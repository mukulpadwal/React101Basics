import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "INR",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between gap-2">
        <label htmlFor={id} className="text-white font-semibold">
          {label}
        </label>
        <input
          id={id}
          className="rounded-md p-1 bg-white w-2/4 sm:w-auto"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between gap-2">
        <label htmlFor={id} className="text-white font-semibold">
          Currency Type
        </label>
        <select
          id={id}
          className="rounded-md p-1"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectCurrency}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default InputBox;
