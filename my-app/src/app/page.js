import RenderProduct from "@/components/RenderOneProduct/RenderProduct";
import HomepageBanner from "@/components/banner/HomepageBanner";
import { getAllProducts } from "@/lib/request";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const allProducts = await getAllProducts()
  let products = allProducts?.sort(() => Math.random() - 0.5);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mx-auto p-4 xl:px-24 lg:py-12 w-full ">
      <HomepageBanner products={allProducts.slice(10, 20)} />
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-xl text-main-color border-b-2">Trends</h1>
        <Link href={"/products"}>
          <button className="bg-main-color text-white  rounded-md px-4 py-2 text-sm font-light transition-all  hover:bg-primary-red">See more</button>
        </Link>
      </div>

      {allProducts?.length}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products?.slice(0, 8).map(p => (
          <RenderProduct key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
