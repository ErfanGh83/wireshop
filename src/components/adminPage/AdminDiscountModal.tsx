import {
  getDiscountByProductId,
  patchDiscount,
  postDiscount,
  removeDiscount,
} from "@/lib/api/adminApi";
import { Discount } from "@/types/discount";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../spinner/Spinner";

interface Props {
  id: string;
}

export default function AdminDiscountModal({ id }: Props) {
  const [discountRes, setDiscountRes] = useState<Discount | null>(null);
  // const [hadDiscount, setHadDiscount] = useState<boolean>(false);
  const [discountId, setDiscountId] = useState<string>("");

  useEffect(() => {
    getDiscountByProductId(id)
      .then((res) => {
        if (res) {
          setDiscountRes(res);
          // setHadDiscount(true);
          setDiscountId(res.id);
          return;
        }
        // setHadDiscount(false);
        setDiscountRes({
          product: { id: id, name: "" },
          percentage: 0,
          startsAt: new Date().toISOString(),
          endsAt: new Date().toISOString(),
          isActive: false,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response?.message || err.message || "خطایی رخ داد");
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!discountRes) return;

    if (discountRes.percentage < 0 || discountRes.percentage > 100) {
      toast.error("درصد تخفیف باید بین 0 تا 100 باشد.");
      return;
    }

    if (discountRes.percentage === 0 && !discountId) {
      toast.error("درصد تخفیف نباید صفر باشد.");
      return;
    }

    if (new Date(discountRes.startsAt) >= new Date(discountRes.endsAt)) {
      toast.error("تاریخ شروع باید قبل از تاریخ پایان باشد.");
      return;
    }
    if (new Date(discountRes.endsAt) < new Date()) {
      toast.error("تاریخ پایان نباید در گذشته باشد.");
      return;
    }
    if (new Date(discountRes.startsAt) < new Date()) {
      toast.error("تاریخ شروع نباید در گذشته باشد.");
      return;
    }

    if (discountRes.percentage === 0 && discountId) {
      removeDiscount(discountId)
        .then(() => {
          toast.success("تخفیف با موفقیت حذف شد.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.message || err.message || "خطایی رخ داد");
        });
      return;
    }

    if (!discountId) {
      postDiscount({
        productId: id,
        percentage: discountRes.percentage,
        startsAt: discountRes.startsAt,
        endsAt: discountRes.endsAt,
      })
        .then((res) => {
          setDiscountId(res.id)
          toast.success("تخفیف با موفقیت ایجاد شد.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.message || err.message || "خطایی رخ داد");
        });
    } else {
      patchDiscount(discountId, {
        percentage: discountRes.percentage,
        startsAt: discountRes.startsAt,
        endsAt: discountRes.endsAt,
        isActive: discountRes.isActive,
      })
        .then(() => {
          toast.success("تخفیف با موفقیت به‌روزرسانی شد.");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response?.message || err.message || "خطایی رخ داد");
        });
    }
  };

  if (!discountRes) return <Spinner />;

  return (
    <form>
      <div className="flex flex-col gap-4 mb-0">
        <div>
          <label className="font-medium">درصد تخفیف:</label>
          <input
            type="number"
            min={0}
            max={100}
            className="w-full mt-1 px-4 py-2 border border-slate-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={discountRes.percentage}
            onChange={(e) =>
              setDiscountRes((prev) =>
                prev ? { ...prev, percentage: Number(e.target.value) } : null
              )
            }
          />
        </div>
        <div>
          <label className="font-medium">تاریخ شروع:</label>
          <input
            type="datetime-local"
            className="w-full mt-1 px-4 py-2 border border-slate-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={new Date(discountRes.startsAt)
              .toISOString()
              .slice(0, 16)}
            onChange={(e) =>
              setDiscountRes((prev) =>
                prev
                  ? {
                      ...prev,
                      startsAt: new Date(e.target.value).toISOString(),
                    }
                  : null
              )
            }
          />
        </div>
        <div>
          <label className="font-medium">تاریخ پایان:</label>
          <input
            type="datetime-local"
            className="w-full mt-1 px-4 py-2 border border-slate-300 dark:border-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue={new Date(discountRes.endsAt)
              .toISOString()
              .slice(0, 16)}
            onChange={(e) =>
              setDiscountRes((prev) =>
                prev
                  ? { ...prev, endsAt: new Date(e.target.value).toISOString() }
                  : null
              )
            }
          />
        </div>

        {discountId && (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id={`active-discount-${id}`}
              checked={discountRes.isActive}
              className="peer hidden"
              onChange={(e) =>
                setDiscountRes((prev) =>
                  prev ? { ...prev, isActive: e.target.checked } : prev
                )
              }
            />

            <label
              htmlFor={`active-discount-${id}`}
              className="
            flex items-center cursor-pointer gap-2
            px-4 py-2 rounded-lg border
            border-gray-300 dark:border-slate-600
            bg-gray-100 dark:bg-slate-800
            text-gray-700 dark:text-gray-200
            peer-checked:bg-blue-600
            peer-checked:text-white
            peer-checked:border-blue-600
            transition-all
          "
            >
              فعال کردن تخفیف
            </label>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleSubmit}
        >
          اعمال تخفیف
        </button>
      </div>
    </form>
  );
}
