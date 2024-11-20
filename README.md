# Currency Converter App

A React-based currency converter app that allows users to convert between different currencies using a live API. It features a custom hook to fetch exchange rates and includes a swap functionality to switch between "from" and "to" currencies.

---

## Features

- **Real-time exchange rates**: Fetches live data from the [Currency API](https://github.com/fawazahmed0/currency-api).
- **Custom hook**: Implements a reusable `useCurrencyConverter` hook for fetching and managing currency data.
- **Swap functionality**: Easily swap "from" and "to" currencies.
- User-friendly interface with intuitive controls.

  ## API Reference

The app uses the [Currency API](https://github.com/fawazahmed0/currency-api) for real-time exchange rate data. Below is an overview of the API and how it is utilized in this app.


### Endpoints

- **Get Exchange Rates for a Currency**
  - **URL**:  
    ```
    https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
    ```
  - **Method**: `GET`
  - **Path Parameter**:  
    - `currency`: The base currency code (e.g., `usd`, `eur`, `inr`, etc.).
  - **Response**: Returns an object containing exchange rates for all available currencies relative to the base currency.
