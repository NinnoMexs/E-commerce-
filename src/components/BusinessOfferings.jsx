import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaLayerGroup } from 'react-icons/fa';
import { HiOutlineShieldCheck } from 'react-icons/hi';
import { TfiWallet } from 'react-icons/tfi';

const BusinessOfferings = () => {
  return (
    <div className="bg-slate-200 shadow-xl py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Millions of Business Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 pt-9 rounded-lg shadow-xl cursor-pointer">
            <AiOutlineProduct className='text-5xl mb-2'/>
            <h3 className="text-xl font-semibold mb-4">Explore Products and Suppliers</h3>
            <p className="text-gray-600">
              Explore products and suppliers for your business from millions of offerings worldwide.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 pt-9 rounded-lg shadow-xl cursor-pointer">
            <HiOutlineShieldCheck className='text-5xl mb-2'/>
            <h3 className="text-xl font-semibold mb-4">Assured Quality and Transactions</h3>
            <p className="text-gray-600">
              Ensure production quality from verified suppliers, with your orders protected from payment to delivery.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 pt-9 rounded-lg shadow-xl cursor-pointer">
            <TfiWallet className='text-5xl mb-3'/>
            <h3 className="text-xl font-semibold mb-4">One-Stop Trading Solution</h3>
            <p className="text-gray-600">
              Order seamlessly from product/supplier search to order management, payment, and fulfillment.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 pt-9 rounded-lg shadow-xl cursor-pointer">
            <FaLayerGroup className='text-5xl mb-2' />
            <h3 className="text-xl font-semibold mb-4">Tailored Trading Experience</h3>
            <p className="text-gray-600">
              Get curated benefits, such as exclusive discounts, enhanced protection, and extra support, to help grow your business every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOfferings;