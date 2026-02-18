import CoinCard from '../components/CoinCards';
import LimitSelector from '../components/LimitSelector';
import FilterInput from '../components/FilterInput';
import SortSelector from '../components/SortSelector';

const HomePage = ({
  coins,
  filter,
  setFilter,
  loading,
  error,
  sortBy,
  setSort,
  limit,
  setLimit,
}) => {
  const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(filter) || coin.symbol.toLowerCase().includes(filter),
    )
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case 'market_cap_desc':
          return b.market_cap - a.market_cap;
        case 'market_cap_asc':
          return a.market_cap - b.market_cap;
        case 'price_desc':
          return b.current_price - a.current_price;
        case 'price_asc':
          return a.current_price - b.current_price;
        case 'change_desc':
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case 'change_asc':
          return a.price_change_percentage_24h - b.price_change_percentage_24h;
      }
    });

  return (
    <div>
      <h1>🚀 Crypto Dash</h1>
      {loading && <p>'Loading...'</p>}
      {error && <p>{error}</p>}
      <div className='top-controls'>
        <FilterInput
          filter={filter}
          setFilter={setFilter}
        />
        <LimitSelector
          limit={limit}
          setLimit={setLimit}
        />
        <SortSelector
          sortBy={sortBy}
          setSort={setSort}
        />
      </div>
      {!loading && !error && <CoinCard coins={filteredCoins} />}
    </div>
  );
};

export default HomePage;
