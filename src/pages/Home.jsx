import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../components/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // Import modules directly
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import BusinessOfferings from '../components/BusinessOfferings';
import ExploreOfferings from '../components/ExploreOfferings';
import GetStarted from '../components/GetStarted';

const Home = () => {
  const carouselImages = [
    '/images/image1.avif',
    '/images/image2.avif',
    '/images/image3.avif',
    '/images/image4.avif',
  ];

  const testimonials = [
    {
      name: 'Eric James',
      role: 'Founder of Eva Jane Beauty',
      quote:
        '“As an entrepreneur who is deeply involved in the Tech industry, I have been very devoted to creating my original products. GevMexs.com has been my trusted partner in this process.”',
      image: '/images/image16.avif', // Add the path to the testimonial image
    },
    {
      name: 'Eva Jane',
      role: 'Founder of Eva Jane Beauty',
      quote:
        '“As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. GevMexs.com has been my trusted partner in this process.”',
      image: '/images/image15.avif', // Add the path to the testimonial image
    },
    {
      name: 'Kendrick Vill',
      role: 'Founder of Eva Jane Beauty',
      quote:
        '“As an entrepreneur who is deeply involved in Music industry, I have been very devoted to creating my original products. GevMexs.com has been my trusted partner in this process.”',
      image: '/images/image5.avif', // Add the path to the testimonial image
    },
    {
      name: 'Drill Woods',
      role: 'Founder of Eva Jane Beauty',
      quote:
        '“As an entrepreneur who is deeply involved in the Food industry, I have been very devoted to creating my original products. GevMexs.com has been my trusted partner in this process.”',
      image: '/images/image3.avif', // Add the path to the testimonial image
    },
    {
      name: 'Micheal Rice',
      role: 'Founder of Eva Jane Beauty',
      quote:
        '“As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. GevMexs.com has been my trusted partner in this process.”',
      image: '/images/image12.avif', // Add the path to the testimonial image
    },
    // Add more testimonials here
  ];

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/image1.avif")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-32 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience the Best of Products</h1>
          <p className="text-lg md:text-xl mb-6">Discover cutting-edge products and devices for your home and office.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg font-semibold rounded-lg">
            <Link to="/products">Explore Now</Link>
          </button>
        </div>
      </section>

      <BusinessOfferings />

      <ExploreOfferings />

      {/* Testimonial Carousel */}
      <div className="bg-white shadow-xl py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            // navigation
            loop
            modules={[Autoplay, Pagination, Navigation]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-600 text-lg mb-4">{testimonial.quote}</p>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

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

      <GetStarted />
    </div>
  );
};

export default Home;