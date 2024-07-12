import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  function convert() {
    setConvertedAmount(amount * currencyInfo[`${to.toUpperCase()}`]);
  }

  return (
    <div className="relative bg-black min-h-screen min-w-screen flex flex-row items-center justify-center">
      <div className="relative w-full flex flex-col items-center sm:justify-center gap-8">
        <h1 className="text-white text-3xl sm:text-5xl font-bold text-center">
          Currency Converter
        </h1>
        <form
          onClick={(e) => {
            e.preventDefault();
            convert();
          }}
          className="relative bg-slate-400 w-11/12 sm:w-10/12 h-96 rounded-xl flex flex-col items-center justify-center gap-2 lg:gap-12"
        >
          <div className="w-11/12 flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-6">
            <div className="w-10/12 sm:w-11/12 flex flex-col items-center justify-center sm:justify-between gap-8 bg-slate-600 p-4 rounded-2xl">
              <InputBox
                label={from}
                amount={amount}
                onAmountChange={setAmount}
                onCurrencyChange={setFrom}
                currencyOptions={currencyOptions}
                selectCurrency={from}
              />
            </div>

            <button
              className="text-center cursor-pointer font-bold text-white text-xl w-4/12 sm:w-6/12 h-full bg-red-300 hover:bg-red-500 p-2 rounded-2xl sm:rounded-full"
              onClick={() => swap()}
            >
              SWAP
            </button>

            <div className="w-10/12 sm:w-11/12 flex flex-col items-center justify-center sm:justify-between gap-8 bg-slate-600 p-4 rounded-2xl">
              <InputBox
                label={to}
                amount={convertedAmount}
                onAmountChange={setConvertedAmount}
                onCurrencyChange={setTo}
                currencyOptions={currencyOptions}
                selectCurrency={to}
                amountDisabled
              />
            </div>
          </div>

          <button
            className="text-center cursor-pointer text-lg sm:text-xl w-10/12 sm:w-10/12 p-2 bg-green-300 hover:bg-green-500 hover:text-white px-4 font-semibold rounded-2xl"
            type="submit"
          >
            Convert <span className="font-bold">{from}</span> to{" "}
            <span className="font-bold">{to}</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
