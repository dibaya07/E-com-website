"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

export const DeleteProduct = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/products`,
        { data: { id } },
      );
      console.log(res);
      router.push("/admin/Products");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <span
      className="hover:bg-red-200 hover:text-red-600 p-1 rounded-md"
      onClick={handleDelete}
    >
      <MdDelete />
    </span>
  );
};
