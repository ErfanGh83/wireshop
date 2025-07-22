import BannersContainer from "@/components/banners/BannersContainer";
import MainLayout from "@/components/layouts/MainLayout";
import { banners } from "../../public/api/examples";
import CircularProductsContainer from "@/components/products/CircularProductsContainer";
import NormalProductsContainer from "@/components/products/NormalProductsContainer";

export default function Home() {

  return (
    <MainLayout>
      <div
        className="size-full flex flex-col bg-white dark:bg-slate-800 text-black dark:text-white overflow-y-auto"
      >
        <BannersContainer banners={banners} />

        <section
          className="w-full h-fit my-16"
        >
          <CircularProductsContainer />
        </section>

        <section
          className="w-full h-fit my-16"
        >
          <NormalProductsContainer />
        </section>

      </div>
    </MainLayout>
  );
}