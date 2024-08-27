import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-white">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md m-2 border border-gray-60 rounded-lg p-3  bg-white shadow-xl">
          <h1 className="text-center font-bold text-xl">Currrency Convertor</h1>
          <form
            className="flex flex-wrap"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-1/2 mt-1 mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                className="text-left"
              />
            </div>
            <div className="relative top-20" style={{}}>
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1"
                onClick={swap}
              >
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.21167 7.28571L0 12.1429L4.21167 17V13.3571H11.6111V10.9286H4.21167V7.28571ZM19 4.85714L14.7883 0V3.64286H7.38889V6.07143H14.7883V9.71429L19 4.85714Z" fill="white"/>
</svg>


              </button>
            </div>
            <div className="w-1/2 mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
                className="text-right"
                className2="justify-end"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
