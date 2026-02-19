import { useState } from 'react';
import { FaShoppingCart, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart, clearCart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.num, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className='relative'>
      {
        <button
          className='cursor-pointer'
          onClick={() => setShowCart(!showCart)}
        >
          <FaShoppingCart className='text-2xl text-gray-700' />
          {totalItems > 0 && (
            <span className='absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
              {totalItems}
            </span>
          )}
        </button>
      }

      {showCart && (
        <div className='absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50'>
          <div className='p-4'>
            <h2 className='font-semibold text-lg mb-2'>Cart Items</h2>
            {cart.length === 0 ? (
              <p className='text-gray-500 text-sm'>Your cart is empty</p>
            ) : (
              <>
                <ul className='max-h-60 overflow-y-auto divide-y divide-gray-200'>
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className='flex justify-between items-center py-2'
                    >
                      <div>
                        <p className='font-semibold'>{item.name}</p>
                        <p className='text-sm text-gray-500'>
                          {item.num} x ${item.price} = ${item.num * item.price}
                        </p>
                      </div>

                      <button onClick={() => removeFromCart(item.id)}>
                        <FaTrash className='text-sm text-gray-400 hover:text-gray-500 cursor-pointer'></FaTrash>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className='mt-4 flex justify-between font-semibold'>
                  <span>Total:</span>
                  <span>${totalPrice}</span>
                </div>

                <button
                  onClick={clearCart}
                  className='mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600 cursor-pointer'
                >
                  Clear cart
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
