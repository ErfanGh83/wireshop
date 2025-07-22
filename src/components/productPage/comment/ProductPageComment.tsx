import { FaRegUser } from "react-icons/fa";

interface Props {
  userName: string;
  text: string;
}

function ProductPageComment({ text, userName }: Props) {
  return (
    <li className="p-3 m-2 grid grid-cols-15">
      <div className="p-3 w-10 mt-1 h-10 bg-blue-200 dark:bg-blue-900 rounded-full col-span-1">
        <FaRegUser className=" text-black dark:text-white" />
      </div>
      <div className="col-span-14 bg-blue-50 text-black rounded-xl p-3">
        <h4 className="text-lg font-bold">{userName}</h4>
        <p className="text-cyan-800">{text}</p>
      </div>
    </li>
  );
}

export default ProductPageComment;
