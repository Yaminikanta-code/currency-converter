import React, { useId } from "react";

/**
 * A form component that allows users to input an amount and select a currency.
 * The component will render a label, an input field for the amount, and a select
 * field for the currency.
 *
 * @param {string} label - The label to display for the input field.
 * @param {number} amount - The current value of the input field.
 * @param {(value: number) => void} onAmountChange - The callback function to call
 *   when the user changes the value of the input field.
 * @param {(value: string) => void} onCurrencyChange - The callback function to call
 *   when the user changes the selected currency.
 * @param {string[]} currencyOptions - An array of currency codes to offer as
 *   options in the select field. Defaults to an empty array.
 * @param {string} selectCurrency - The value of the currency that is currently
 *   selected in the select field. Defaults to "usd".
 * @param {boolean} amountDisable - Whether the input field should be disabled.
 *   Defaults to false.
 * @param {boolean} currencyDisable - Whether the select field should be disabled.
 *   Defaults to false.
 * @param {string} className - Additional CSS classes to apply to the component.
 *   Defaults to an empty string.
 *
 * @returns {ReactElement} The rendered component.
 */
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
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
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
    </div>
  );
}

export default InputBox;
