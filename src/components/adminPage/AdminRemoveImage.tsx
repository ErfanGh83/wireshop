import { deleteImage } from "@/lib/api/adminApi";
import { BASE_URL } from "@/lib/api/constants";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  images: string[];
  productId: string;
  removeImage: (image: string) => void;
}

function AdminRemoveImage({ images, productId, removeImage }: Props) {
  const handleRemove = (image: string) => {
    const imageToRemove = image.split("uploads/")[1]
    deleteImage(productId, imageToRemove)
      .then(() => {
        toast.success("عکس با موفقیت حذف شد.");
        removeImage(image);
      })
      .catch((err) => toast.error(err?.message || "مشکلی پیش آمد."));
  };

  return (
    <div>
      <h3 className="font-bold mb-2">حذف تصاویر موجود</h3>
      <div className="flex w-full overflow-x-auto gap-4 pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 group rounded overflow-hidden"
          >
            {/* Overlay */}
            <div
              onClick={() => handleRemove(image)}
              className="absolute inset-0 z-10 opacity-0 flex justify-center items-center hover:opacity-100 transition-all bg-black/80 cursor-pointer"
            >
              <FaTrash className="text-red-500/70 w-10 h-10" />
            </div>

            {/* Image */}
            <Image
              crossOrigin="anonymous"
              src={BASE_URL + image}
              alt={`product-${index}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminRemoveImage;
