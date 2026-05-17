import MainLayout from "@/components/layouts/MainLayout";
import Image from "next/image";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function page() {
  const phoneMobile = ["۰۹۱۲۲۸۸۱۹۰۷", "۰۹۱۲۶۳۴۶۵۷۵", "۰۹۰۲۱۹۹۱۳۹۵"];
  const phoneLandline = [
    "۰۲۱۳۶۴۱۹۸۱۶",
    "۰۲۱۳۴۹۱۶۸۳۰",
    "۰۲۱۳۳۹۹۰۵۳۷",
    "۰۲۱۳۳۹۹۰۵۳۸",
  ];
  const email = " lk.electroelka@gmail.com";
  const socials = [
    { icon: "instagram.png", url: "https://www.instagram.com/electro.elka" },
    {
      icon: "whatsapp.jfif",
      url: "https://api.whatsapp.com/send?phone=989357114540&text=",
    },
    { icon: "telegram.webp", url: "https://t.me/Electroelka" },
    { icon: "eitaa.png", url: "https://eitaa.com/s/electroelka" },
    { icon: "rubika.png", url: "https://rubika.ir/Electro_elka" },
  ];
  const addressText =
    "تهران، لاله‌زار جنوبی، نبش کوچه مجمر، پاساژ فراز لاله‌زار، طبقه منفی۱، پلاک۳۸";
  const locations = [
    {
      link: "https://maps.app.goo.gl/eMtNQw5dEQnxpfoe8?g_st=ac",
      icon: "googlemap.png",
    },
    { link: "https://nshn.ir/QbvE-W2xi4TN", icon: "neshan.png" },
    {
      link: "https://balad.ir/location?latitude=35.688117&longitude=51.422547&zoom=16.500000",
      icon: "balad.png",
    },
  ];

  return (
    <MainLayout>
      <div className=" overflow-y-auto size-full bg-blue-50 dark:bg-slate-500 dark:text-gray-100 flex justify-center items-center md:p-6 p-2 overflow-auto">
        <div className="bg-white dark:bg-slate-700 shadow-xl overflow-y-auto rounded-2xl mt-[-50px] md:mt-6 md:p-6 p-2 w-[100%] md:w-[75%] lg:w-[60%] h-[90%]">
          <h1 className="text-3xl lg:text-4xl font-bold my-3">درباره ما</h1>

          <section>
            <div className="col-span-2 space-y-6">
              <div className="bg-white/70 dark:bg-slate-600 backdrop-blur-sm rounded-3xl shadow-lg p-6">
                <h2 className="text-xl dark:text-white font-medium mb-2">
                  راه های ارتباطی
                </h2>
                <p className="text-sm text-gray-600 mb-4 dark:text-gray-300">
                  در صورت هرگونه سؤال یا همکاری با ما تماس بگیرید.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {phoneMobile.map((num) => (
                    <a
                      href={`tel:${num}`}
                      key={num}
                      className="p-4 border border-gray-500/40 dark:border-gray-300/60 flex justify-around rounded-xl"
                    >
                      <div className="text-md text-gray-800 dark:text-gray-200">
                        تلفن همراه
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-300 hover:underline transition">
                        {num}
                      </div>
                    </a>
                  ))}

                  {phoneLandline.map((num) => (
                    <a
                      href={`tel:${num}`}
                      key={num}
                      className="p-4 border border-gray-500/40 dark:border-gray-300/60 flex justify-around rounded-xl"
                    >
                      <div className="text-md text-gray-800 dark:text-gray-200">
                        تلفن ثابت
                      </div>
                      <div className="text-emerald-600 dark:text-emerald-300 hover:underline transition">
                        {num}
                      </div>
                    </a>
                  ))}

                  <a
                    href={`mailto:${email}`}
                    className="p-4 border border-gray-500/40 dark:border-gray-300/60 flex justify-around rounded-xl"
                  >
                    <div className="text-md text-gray-800 dark:text-gray-200">
                      ایمیل
                    </div>
                    <div className="text-emerald-600 dark:text-emerald-300 hover:underline transition">
                      {email}
                    </div>
                  </a>
                </div>
                <div className="text-lg text-black mt-6 dark:text-gray-200 mb-2">
                  شبکه‌های اجتماعی
                </div>
                <div className="flex flex-row">
                  {socials.map((item) => (
                    <a key={item.url} href={item.url} className="mx-1">
                      <Image
                        width={50}
                        height={50}
                        className="rounded-full"
                        src={"/images/about-us/" + item.icon}
                        alt={item.icon}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <aside>
              <div className="my-6 bg-white/70 dark:bg-slate-600 backdrop-blur-sm rounded-2xl shadow-md p-4">
                <h3 className="text-lg font-medium">آدرس</h3>
                <div className="text-sm text-gray-600 dark:text-gray-300 text-justify mt-4 flex flex-row gap-2 items-center">
                  <FaLocationDot className="size-5" />
                  <p>{addressText}</p>
                </div>

                <div className="text-sm mt-2 text-gray-600 dark:text-gray-300 text-justify flex flex-row gap-2 items-center">
                  <FaClock className="size-5" />
                  <p>ساعت کاری: شنبه تا چهارشنبه ساعت 9 الی 19</p>
                </div>

                <div className="flex flex-row gap-2 my-2">
                  {locations.map((item) => (
                    <a
                      key={item.icon}
                      // className="w-10 h-10"
                      href={item.link}
                      target="_blank"
                    >
                      <Image
                        className="rounded"
                        src={"/images/about-us/" + item.icon}
                        alt={item.icon}
                        width={50}
                        height={50}
                      />
                    </a>
                  ))}
                </div>
                {/* <a
                  href={locations[0].link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 border rounded-lg text-sm hover:bg-gray-50"
                >
                  مسیریابی در گوگل مپ
                </a> */}
              </div>

              <div className="overflow-hidden rounded-2xl shadow-md border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5434167141016!2d51.422814699999996!3d35.6882429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e018e7eb8d833%3A0x10950303a447c44e!2sFaraz%20laleh%20zar!5e0!3m2!1sen!2s!4v1758620430283!5m2!1sen!2s"
                  className="w-full"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}
