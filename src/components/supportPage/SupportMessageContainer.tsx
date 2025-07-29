import SupportMessageItem from "./SupportMessageItem";

interface Message {
  id: number;
  userName: string;
  lastMessage: string;
  date: string;
  isNew: boolean;
  repliedMessage?: string,
  url: string;
}

const messages: Message[] = [
  {
    id: 1,
    userName: "علی رضایی",
    lastMessage:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    date: "۱۴۰۳/۰۵/۰۱",
    isNew: true,
    url: "test",
  },
  {
    id: 2,
    userName: "سارا محمدی",
    lastMessage: "لطفاً حقوق من را پرداخت کنید.",
    date: "۱۴۰۳/۰۵/۰۲",
    isNew: false,
    repliedMessage: "در اسرع وقت پرداخت میشود 😁",
    url:"test1",
  },
];

function SupportMessageContainer() {
  return (
    <div className="p-1 md:p-4 lg:p-6 space-y-4 mx-auto max-w-[1200px]">
      <h1 className="text-2xl font-bold mb-4">پیام‌های کاربران</h1>

      {messages.map((msg) => (
        <SupportMessageItem
          key={msg.id}
          date={msg.date}
          lastMessage={msg.lastMessage}
          isNew={msg.isNew}
          userName={msg.userName}
          chatUrl={msg.url}
        />
      ))}
    </div>
  );
}

export default SupportMessageContainer;
