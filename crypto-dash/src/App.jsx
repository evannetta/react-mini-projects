import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './components/Header';
import NotFoundPage from './pages/notfound';
import CoinDetailsPage from './pages/coindetails';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSort] = useState('market_cap_desc');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}markets?vs_currency=usd&order=${sortBy}&per_page=${limit}&page=1&sparkline=false`,
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              loading={loading}
              error={error}
              sortBy={sortBy}
              setSort={setSort}
              limit={limit}
              setLimit={setLimit}
            />
          }
        />
        <Route
          path='/about'
          element={<AboutPage />}
        />
        <Route
          path='/coin/:id'
          element={<CoinDetailsPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
};

export default App;
