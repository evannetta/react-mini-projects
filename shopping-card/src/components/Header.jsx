import Cart from './Cart';

const Header = () => {
  return (
    <header className='bg-white shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-green-800'>ShopMate</h1>
      <Cart />
    </header>
  );
};

export default Header;
