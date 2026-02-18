import { Link } from 'react-router';

const CoinCards = ({ coins }) => {
  return (
    <main className='grid'>
      {coins.length > 0 ? (
        coins.map((coin) => (
          <Link
            to={`/coin/${coin.id}`}
            key={coin.id}
          >
            <div className='coin-card'>
              <div className='coin-header'>
                <img
                  className='coin-image'
                  src={coin.image}
                  alt={coin.name}
                />
                <div>
                  <h2>{coin.name}</h2>
                  <p className='symbol'>{coin.symbol.toUpperCase()}</p>
                </div>
              </div>
              <p>Price: ${coin.current_price.toLocaleString()}</p>
              {coin.price_change_percentage_24h ? (
                <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                  {coin.price_change_percentage_24h.toFixed(3)} %
                </p>
              ) : (
                <p style={{ color: '#aaa' }}>No data</p>
              )}
              <p>Market cap: {coin.market_cap.toLocaleString()}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No matching coins</p>
      )}
    </main>
  );
};

export default CoinCards;
