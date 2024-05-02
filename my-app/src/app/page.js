import HomepageBanner from "@/components/banner/HomepageBanner";
import { getAllProducts } from "@/lib/request";
import Image from "next/image";

export default async function Home() {
  const allProducts = await getAllProducts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mx-auto p-4 xl:px-24 lg:py-12 ">
      <HomepageBanner products={allProducts.slice(10, 20)} />
      {allProducts?.length}
      {allProducts?.map(p => (
        <div className="text-black" key={p.id}>
          <Image src={p.image} width={100} height={100} alt={p.title} />
          <h4>{p.title}</h4>
        </div>
      ))}
    </main>
  );
}
