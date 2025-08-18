# Crypto Dash

A cryptocurrency tracking web application that displays real-time market data, price changes, and charts for various coins.  
Originally built following the **Modern React From The Beginning** course by [Brad Traversy](https://www.traversymedia.com/) and Will Adams on [Udemy](https://www.udemy.com/course/modern-react-from-the-beginning/?couponCode=KEEPLEARNING), but adapted with my own approach in some areas.

## Live Demo

[**View Crypto Dash on Vercel**](https://crypto-dash-react-type-script-l3wphuu5o.vercel.app)


## Features

- **TypeScript Migration** – Entire codebase converted from JavaScript to TypeScript.
- **Axios for API Calls** – Replaced native `fetch` with `axios` for cleaner async data handling.
- **Custom Hook (`useFetchData`)** – Modularized data fetching logic for reusability and maintainability.
- **Tailwind CSS Styling** – Switched from native CSS to Tailwind for rapid, utility-first styling.
- **Live Crypto Data** – Displays current price, market cap, and 24h price changes.
- **Sorting & Filtering** – Sort coins by market cap, price, or 24h change; filter by name or symbol.
- **Pagination Control** – Select the number of coins displayed per page.
- **Coin Detail Page** – Price chart (7-day) powered by Chart.js. -**7-Day Price Chart** – Interactive chart powered by **Chart.js** and **react-chartjs-2**
- **Responsive Design** – Works across desktop, tablet, and mobile.

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/) & [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd <project-folder>

# Install dependencies
npm install

# Create a .env file and add your API endpoint
VITE_API_URL=<Your_CoinGecko_API_URL>
VITE_COIN_API_URL=<Your_CoinGecko_Coin_Detail_API_URL>

# Start development server
npm run dev
```

## API

This project uses the [CoinGecko API](https://www.coingecko.com/en/api) to fetch cryptocurrency market data.

## Differences from the Original Course

- Migrated to TypeScript (TSX) for all components.
- Used Axios instead of native fetch for HTTP requests.
- Added a reusable custom hook for API data fetching.
- Switched to Tailwind CSS instead of native CSS for styling.


## Credits

Original concept & tutorial by [Brad Traversy](https://www.traversymedia.com/) and Will Adams in the  
[Modern React From The Beginning](https://www.udemy.com/course/modern-react-from-the-beginning/?couponCode=KEEPLEARNING) Udemy course.  
Adapted and customized with TypeScript, Axios, Tailwind CSS, and personal modifications.
