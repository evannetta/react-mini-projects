import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className='bg-white rounded-lg shadow p-4 flex flex-col justify-between'>
      <img
        src={product.image}
        alt={product.name}
        className='h-40 object-cover rounded mb-4'
      />

      <h2 className='text-xl font-semibold'>{product.name}</h2>
      <p className='text-gray-500 text-sm mb-2 flex-grow-2'>{product.description}</p>

      <p className='font-bold text-lg'>${product.price.toFixed(2)}</p>
      <button
        className='bg-amber-800 text-white mt-3 px-4 py-2 rounded transition hover:bg-amber-700 outline-0 cursor-pointer'
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
