import BannersContainer from "@/components/banners/BannersContainer";
import MainLayout from "@/components/layouts/MainLayout";
import { banners } from "../../public/api/examples";
import CircularProductsContainer from "@/components/products/CircularProductsContainer";
import NormalProductsContainer from "@/components/products/NormalProductsContainer";
import BigProductsContainer from "@/components/products/BigProductsContainer";

export default function Home() {

  return (
    <MainLayout>
      <div
        dir="ltr"
        className="size-full flex flex-col bg-white dark:bg-slate-900 text-black dark:text-white overflow-y-auto"
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
          <BigProductsContainer />
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