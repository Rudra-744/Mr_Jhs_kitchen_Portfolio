import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ArrowRight } from 'lucide-react';
import useStore from '../../store/useStore';
import { createOrder } from '../../lib/api';

const CartDrawer = () => {
  const { isCartOpen, toggleCart, cart, updateQty, removeFromCart, clearCart } = useStore();

  const handleCheckout = async () => {
    if(cart.length === 0) return;
    try {
      // Simple checkout logic for now
      await createOrder({
        customerName: "Website User", 
        phone: "9999999999", 
        items: cart.map(i => ({ itemId: i._id, qty: i.qty })),
        totalAmount: cart.reduce((a, b) => a + b.price * b.qty, 0)
      });
      alert("Order Placed Successfully!");
      clearCart();
      toggleCart();
    } catch (e) {
      console.error(e);
      alert("Failed to place order.");
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-jha-cream flex justify-between items-center border-b">
              <h2 className="text-2xl font-serif font-bold text-jha-maroon">Your Order</h2>
              <button onClick={toggleCart} className="p-2 hover:bg-black/5 rounded-full"><X /></button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-50">
                  <span className="text-6xl mb-4">🥟</span>
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item._id} className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-jha-brown">{item.name}</h4>
                      <p className="text-jha-maroon font-bold">₹{item.price * item.qty}</p>
                    </div>
                    {/* Qty Controls */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                      <button onClick={() => updateQty(item._id, -1)} className="p-1 hover:bg-white rounded shadow-sm"><Minus size={14}/></button>
                      <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item._id, 1)} className="p-1 hover:bg-white rounded shadow-sm"><Plus size={14}/></button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between text-xl font-bold mb-4 text-jha-maroon">
                  <span>Total</span>
                  <span>₹{cart.reduce((a, b) => a + b.price * b.qty, 0)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-jha-yellow text-jha-maroon py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-yellow-400 transition"
                >
                  Proceed to Checkout <ArrowRight size={20} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;