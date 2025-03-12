import React from "react";
import { Link } from "react-router-dom"
import ProductCard from "./ProductCard";

export const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        image: "/images/image1.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"
        
    },
    {
        id: 2,
        name: "Smartwatch",
        image: "/images/image2.avif",
        price: 99.99,
        category: "Wearables",
        description: "hello this product is good",

    },
    {
        id: 3,
        name: "Gaming Mouse",
        image: "/images/image3.avif",
        price: 24.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 4,
        name: "Bluetooth Speaker",
        image: "/images/image4.avif",
        price: 45.99,
        category: "Audio",
        description: "hello this product is good"

    },
    {
        id: 5,
        name: "Wireless Headphones",
        image: "/images/image5.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 6,
        name: "Wireless Headphones",
        image: "/images/image6.avif",
        price: 45.99,
        category: "Audio",
        description: "hello this product is good"

    },
    {
        id: 7,
        name: "Wireless Headphones",
        image: "/images/image7.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 8,
        name: "Wireless Headphones",
        image: "/images/image8.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 9,
        name: "Wireless Headphones",
        image: "/images/image9.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 10,
        name: "Wireless Headphones",
        image: "/images/image10.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 11,
        name: "Wireless Headphones",
        image: "/images/image11.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 12,
        name: "Wireless Headphones",
        image: "/images/image12.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 13,
        name: "Wireless Headphones",
        image: "/images/image13.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 14,
        name: "Wireless Headphones",
        image: "/images/image14.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 15,
        name: "Wireless Headphones",
        image: "/images/image15.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 16,
        name: "Wireless Headphones",
        image: "/images/image16.avif",
        price: 45.99,
        category: "Accessories",
        description: "hello this product is good"

    },
    {
        id: 17,
        name: "Wireless Headphones",
        image: "/images/image17.avif",
        price: 45.99,
        category: "Electronics",
        description: "hello this product is good"

    },
    {
        id: 18,
        name: "Wireless Headphones",
        image: "/images/image18.avif",
        price: 45.99,
        category: "Accessories",
        description: "hello this product is good"

    },
    {
        id: 19,
        name: "Wireless Headphones",
        image: "/images/image19.avif",
        price: 15.99,
        category: "Wearable",
        description: "hello this product is good"

    },
    {
        id: 20,
        name: "Bluetooth Speaker",
        image: "/images/image20.avif",
        price: 45.99,
        category: "Audio",
        description: "hello this product is good"

    },
    {
        id: 21,
        name: "Bluetooth Speaker",
        image: "/images/image21.avif",
        price: 45.99,
        category: "Audio",
        description: "hello this product is good"

    }
   
]

function Products() {
    return (
      <div className="container mx-auto px-4 py-7">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          </Link>
        ))}
      </div>
      </div>
    );
  }

  export default Products;