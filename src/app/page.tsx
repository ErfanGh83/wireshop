import BannersContainer from "@/components/banners/BannersContainer";
import MainLayout from "@/components/layouts/MainLayout";
import { banners } from "../../public/api/examples";
import CircularProductsContainer from "@/components/products/CircularProductsContainer";
import NormalProductsContainer from "@/components/products/NormalProductsContainer";
import BigProductsContainer from "@/components/products/BigProductsContainer";
import MainFooter from "@/components/footers/MainFooter";

export default function Home() {
  return (
    <MainLayout>
      <div
        dir="ltr"
        className="size-full flex flex-col bg-gradient-to-b from-white bg-gray-50 dark:from-slate-900 dark:to-slate-800 text-black dark:text-white overflow-y-auto"
      >
        <BannersContainer banners={banners} />

        <section
          className="w-full h-fit my-4"
        >
          <CircularProductsContainer />
        </section>

        <section
          className="w-full h-fit my-4"
        >
          <BigProductsContainer />
        </section>

        <section
          className="w-full h-fit my-4"
        >
          <NormalProductsContainer />
        </section>

        <section>
          <MainFooter />
        </section>

      </div>
    </MainLayout>
  );
}