import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../components/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import modules directly
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Home = () => {
  const carouselImages = [
    '/images/image1.avif',
    '/images/image2.avif',
    '/images/image3.avif',
    '/images/image4.avif',
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/image1.avif")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-32 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience the Best in Products</h1>
          <p className="text-lg md:text-xl mb-6">Discover cutting-edge products and devices for your home and office.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-semibold rounded-lg">
            <Link to="/products">Explore Now</Link>
          </button>
        </div>
      </section>

     

      {/* Featured Products Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <Link to={`/products/${product.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>



       {/* Image Carousel */}
       <div className="w-full h-80 md:h-[400px] lg:h-[500px] overflow-hidden mb-12 mt-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          modules={[Autoplay, Pagination, Navigation]} // Add modules here
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object- rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Home;
