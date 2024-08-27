import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  className2 = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-2 rounded-lg text-sm flex flex-col flex-wrap  ${className}`}>
      <div className={`flex flex-wrap ${className2}`}>
        <p className="text-black/40  w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-xl uppercase "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className={`flex flex-wrap flex-col ${className2}`}>
        <label
          htmlFor={amountInputId}
          className="text-black/40  mt-6 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-offwhite p-1.5 text-xl"
          type="number"
          placeholder="00"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      
    </div>
  );
}

export default InputBox;
