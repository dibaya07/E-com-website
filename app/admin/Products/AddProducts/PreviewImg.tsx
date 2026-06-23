"use client";
import Image from "next/image";
import { PreviewImgProps } from "../../types/admin_products.types";
// import { useEffect, useState } from "react";

export default function PreviewImg({ fileDetails, handleRemove, index } : PreviewImgProps) {

//   const [previewUrl, setPreviewUrl] = useState("");

// useEffect(() => {
//   const url = URL.createObjectURL(fileDetails);
//   setPreviewUrl(url);

//   return () => URL.revokeObjectURL(url);
// }, [fileDetails]);

  return (
    <div className="p-2 bg-[#e3e3e3]  flex relative rounded-2xl">
      
      <Image
        src={URL.createObjectURL(fileDetails)}
        alt={fileDetails.name}
        width={40}
        height={20}
        className="size-16 bg-cover rounded-2xl"
      />
      <span
        className="p-2 text-xs bg-red-600 text-white rounded-full flex h-2 w-2 justify-center items-center absolute top-1 right-1 cursor-pointer"
        onClick={() => handleRemove(index)}
      >
        X
      </span>
    </div>
  );
}
