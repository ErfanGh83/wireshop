interface Props {
  sender: "user" | "support";
  text: string;
}

function SupportModalItem({ sender, text }: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`w-full flex ${
        !isUser ? "justify-start" : "justify-end"
      } my-2`}
    >
      <div
        className={`max-w-[90%] md:max-w-[75%] px-4 py-2 text-justify rounded-xl text-sm leading-relaxed break-words  whitespace-pre-wrap
          ${
            isUser
              ? "bg-blue-500 dark:bg-purple-400 text-white rounded-bl-none"
              : "bg-gray-200 text-gray-800 rounded-br-none"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}

export default SupportModalItem;
