import { getAllProducts } from "@/lib/request";
import Image from "next/image";

export default async function Home() {
  let allProducts = await getAllProducts()
  console.log(allProducts)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allProducts?.map(p => (
        <div className="text-white" key={p.id}>{p.title}</div>
      ))}
    </main>
  );
}
