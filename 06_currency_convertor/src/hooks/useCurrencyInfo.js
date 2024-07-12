import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((response) => response.json())
      .then((data) => setData(data.rates))
      .catch((err) => console.error(err));
  }, [currency]);

  console.log(data);

  return data;
}

export default useCurrencyInfo;
