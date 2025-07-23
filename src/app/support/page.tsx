import MainLayout from "@/components/layouts/MainLayout";
import SupportMessageContainer from "@/components/supportPage/SupportMessageContainer";

function page() {
  return (
    <MainLayout>
      <div className=" overflow-y-auto size-full bg-blue-100 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto">
        <div className="bg-white dark:bg-slate-600 shadow-xl overflow-y-auto md:overflow-y-hidden rounded-2xl md:p-6 p-4 w-full h-full">
          <SupportMessageContainer />
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
