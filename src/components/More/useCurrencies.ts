import { Alert } from "react-native";
import React from "react";
import { ICurrency } from "./types";
import { currencyURL } from "./currencyAPI";

export const useCurrencies = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currencies, setCurrencies] = React.useState<ICurrency[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${currencyURL}&base_currency=RUB&currencies=USD,EUR,GBP`
        );
        const { data } = await res.json();

        setCurrencies([
          {
            name: "USD",
            value: (1 / data.USD.value).toFixed(2),
          },
          {
            name: "EUR",
            value: (1 / data.EUR.value).toFixed(2),
          },
          {
            name: "GBP",
            value: (1 / data.GBP.value).toFixed(2),
          },
        ]);
      } catch (error) {
        Alert.alert("Ой, произошла ошибка.");
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return React.useMemo(
    () => ({
      isLoading,
      currencies,
    }),
    [isLoading, currencies]
  );
};
