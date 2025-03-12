export default function MegaMenu() {
    return (
      <nav>
        <ul className="flex space-x-6">
          <li className="relative group">
            <a href="#" className="hover:text-yellow-400">Categories</a>
            
            {/* Mega Menu Container */}
            <div className="absolute -left-113 top-13 w-screen bg-blue-200 text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-1 ">
              <div className="max-w-6xl mx-auto p-6 grid grid-cols-4 gap-6">
                
                {/* Column 1 */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Electronics</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-500">Laptops</a></li>
                    <li><a href="#" className="hover:text-blue-500">Phones</a></li>
                    <li><a href="#" className="hover:text-blue-500">Tablets</a></li>
                    <li><a href="#" className="hover:text-blue-500">Accessories</a></li>
                  </ul>
                </div>
  
                {/* Column 2 */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Clothing</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-500">Men</a></li>
                    <li><a href="#" className="hover:text-blue-500">Women</a></li>
                    <li><a href="#" className="hover:text-blue-500">Kids</a></li>
                    <li><a href="#" className="hover:text-blue-500">Shoes</a></li>
                  </ul>
                </div>
  
                {/* Column 3 */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Home & Kitchen</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-500">Furniture</a></li>
                    <li><a href="#" className="hover:text-blue-500">Decor</a></li>
                    <li><a href="#" className="hover:text-blue-500">Kitchenware</a></li>
                    <li><a href="#" className="hover:text-blue-500">Lighting</a></li>
                  </ul>
                </div>
  
                {/* Column 4 */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Sports & Outdoors</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-blue-500">Gym Equipment</a></li>
                    <li><a href="#" className="hover:text-blue-500">Camping Gear</a></li>
                    <li><a href="#" className="hover:text-blue-500">Bicycles</a></li>
                    <li><a href="#" className="hover:text-blue-500">Accessories</a></li>
                  </ul>
                </div>
  
              </div>
            </div>
  
          </li>
        </ul>
      </nav>
    );
  }
  