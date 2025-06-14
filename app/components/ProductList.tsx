// "use client";
// import { getProducts } from "@/lib/api";
// import { ProductType } from "@/types/porduct.type";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const ProductList = () => {
//   const [count, setCount] = useState<number>(0);
//   const [products, setProducts] = useState<ProductType[]>([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await getProducts();
//         setProducts(data.items);
//       } catch (error) {
//         console.error("Ошибка загрузки продуктов: ", error);
//       }
//     };
//     loadProducts();
//   }, []);

//   // console.log("products", products);

//   return (
//     <>
//       {products.map((product: ProductType) => (
//         <div key={product.id} className="bg-[#D9D9D9] p-3 rounded-[15px] max-w-[300px]">
//           <Image
//             // src="/images/chimp.png"
//             src={`${product.image_url}`}
//             alt="товар"
//             width={281}
//             height={366}
//             className="object-fit"
//           />
//           <h2 className="text-black text-4xl">{product.title}</h2>
//           <p className="text-black">
//             {product.description}
//           </p>
//           <div className="flex gap-2">
//             {count > 0 && (
//               <>
//                 <button
//                   className="max-h-[68px] max-w-[68px] w-full py-3.5 px-auto text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none cursor-pointer"
//                   onClick={() => setCount((prev) => prev - 1)}
//                 >
//                   -
//                 </button>
//                 <p className="text-center max-h-[68px] w-full py-3.5 px-8 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none">
//                   {count}
//                 </p>
//               </>
//             )}
//             {/* <button className={`max-h-[68px] w-full py-3.5 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none cursor-pointer`}>Buy</button> */}
//             <button
//               className={`max-h-[68px] ${
//                 count > 0 ? "max-w-[68px] px-auto" : "px-8"
//               } w-full py-3.5 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none cursor-pointer`}
//               onClick={() => setCount((prev) => prev + 1)}
//             >
//               {count > 0 ? "+" : "купить"}
//             </button>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default ProductList;








"use client";
import { getProducts } from "@/lib/api";
import { ProductType } from "@/types/porduct.type";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  // Храним количество для каждого товара по его id: { [id]: quantity }
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.items);
      } catch (error) {
        console.error("Ошибка загрузки продуктов: ", error);
      }
    };
    loadProducts();
  }, []);

  const handleIncrement = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 0) - 1, 0),
    }));
  };

  return (
    <>
      {products.map((product: ProductType) => {
        const currentQuantity = quantities[product.id] || 0;
        return (
          <div key={product.id} className="bg-[#D9D9D9] p-3 rounded-[15px] max-w-[300px]">
            <Image
              src={product.image_url}
              alt="товар"
              width={281}
              height={366}
              className="object-fit"
            />
            <h2 className="text-black text-4xl">{product.title}</h2>
            <p className="text-black text-[20px]">{product.description}</p>
            <div className="flex gap-2">
              {currentQuantity > 0 && (
                <>
                  <button
                    className="max-h-[68px] max-w-[68px] w-full py-3.5 px-auto text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none cursor-pointer"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <p className="text-center max-h-[68px] w-full py-3.5 px-8 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none">
                    {currentQuantity}
                  </p>
                </>
              )}
              <button
                className={`max-h-[68px] ${
                  currentQuantity > 0 ? "max-w-[68px] px-auto" : "px-8"
                } w-full py-3.5 text-4xl rounded-[15px] bg-[#222222] text-[#F0F0F0] border-none cursor-pointer`}
                onClick={() => handleIncrement(product.id)}
              >
                {currentQuantity > 0 ? "+" : "купить"}
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;