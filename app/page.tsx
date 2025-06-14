import Image from "next/image";
import TestPage from "./components/test";
import ReviewCard from "./components/ReviewCard";
import ProductList from "./components/ProductList";
import OrderProductsCard from "./components/OrderProductsCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 gap-16 2xl:px-[230px] 2xl:py-[55px] font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="bg-[#777777] rounded-3xl min-w-[200px] text-center text-[#F0F0F0] 2xl:text-8xl lg:text-6xl sm:text-5xl text-3xl py-4 px-6 sm:px-12 xl:px-[300px]">
          тестовое задание
        </div>
      </header>
      <main className="flex flex-col items-center 2xl:mt-[105px] mt-24">
        <div className="flex gap-8 mb-[100px]">
          <ReviewCard />
        </div>
        <OrderProductsCard classes="mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[35px]">
          <ProductList />
        </div>
        {/* <TestPage /> */}
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
