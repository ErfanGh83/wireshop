"use client";

import { getAllConversations } from "@/lib/api/chatApi";
import SupportMessageItem from "./SupportMessageItem";
import { useEffect, useState } from "react";
import { AllConversation } from "@/types/chat";

interface Message {
  id: number;
  userName: string;
  lastMessage: string;
  date: string;
  isNew: boolean;
  repliedMessage?: string;
  url: string;
}

const messages: Message = {
  id: 1,
  userName: "علی رضایی",
  lastMessage:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  date: "۱۴۰۳/۰۵/۰۱",
  isNew: true,
  url: "test",
};

function SupportMessageContainer() {
  const [data, setData] = useState<AllConversation[] | null>();

  useEffect(() => {
    getAllConversations().then((result) => {
      setData(result);
      console.log(result);
    });
  }, []);

  if (!data) return <h5>در حال بارگذاری...</h5>;

  console.log("all conversations", data);

  return (
    <div className="p-1 md:p-4 lg:p-6 space-y-4 mx-auto max-w-[1200px]">
      <h1 className="text-2xl font-bold mb-4">پیام‌های کاربران</h1>

      {data.map((item) => (
        <SupportMessageItem
          key={item.id}
          date={item.updatedAt}
          lastMessage={messages.lastMessage}
          isNew={item.newMessage}
          userName={messages.userName}
          conversationId={item.id}
        />
      ))}
    </div>
  );
}

export default SupportMessageContainer;
