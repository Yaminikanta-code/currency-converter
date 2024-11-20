import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

/**
 * The main App component. It fetches the currency exchange rates for the 'from'
 * currency and displays a form to input the amount to convert. It also displays
 * the converted amount in the 'to' currency. The user can swap the currencies
 * by clicking the 'Swap' button.
 *
 * The component also handles the input of the amount to convert and the
 * conversion of the amount to the 'to' currency when the user clicks the
 * 'Convert' button.
 */
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // Fetch the exchange rates for 'from' currency
  const options = currencyInfo ? Object.keys(currencyInfo) : []; // Handle case when currencyInfo is not ready

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Swap the amounts as well
    setConvertedAmount(amount);
  };

  /**
   * Handles the conversion of the amount to the 'to' currency when the user
   * clicks the 'Convert' button. If the currency exchange rates for the 'from'
   * currency are ready and the 'to' currency is present in the exchange rates
   * object, it multiplies the amount by the exchange rate and sets the
   * convertedAmount state variable to the result.
   */
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512075135822-67cdd9dd7314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGN1cnJlbmN5JTIwY29udmVydGVyfGVufDB8fDB8fHww')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)} // Set the 'from' currency
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)} // Update the amount
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 border-none"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)} // Set the 'to' currency
                  selectCurrency={to} // Display the correct 'to' currency
                  amountDisable={true} // Disable the amount input for the 'to' currency
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg border-none"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
