"use client";

import { useState } from "react";
import PreviewImg from "./PreviewImg";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { productFormData } from "../../types/admin_products.types";



 type RHFprops = {
  watch : UseFormWatch<productFormData>,
  setValue : UseFormSetValue<productFormData>
}

export default function UploadImg({ watch , setValue } : RHFprops) {
  //   const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const images : File[] = watch("image");

  const removeFile = (index : number) => {
    const filetedFile = images.filter((_, i) => i !== index);
    setValue("image", filetedFile, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleDragEnter = (e : React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e : React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log(e)
    setIsDragging(false);
  };

  const handleDrop = (e : React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropedFiles = [...images, ...Array.from(e.dataTransfer.files)];
    setValue("image", dropedFiles, {
      shouldValidate: true,
      shouldDirty: true,
    });
    // setFiles([...files, ...dropedFiles]);
    setIsDragging(false);
  };

  return (
    <div className="productMedia bg-white p-4 rounded-2xl flex flex-col">
      <h2 className="text-base font-medium mb-3">Product Media</h2>
      <div
        className={` border-green-500 border-dashed border rounded-xl p-4 flex flex-col items-center justify-center ${isDragging ? "bg-green-300 " : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label htmlFor="imgUpload">
          <input
            type="file"
            id="imgUpload"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);

              setValue("image", [...images, ...files], {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
          />
          <p>Click to upload or drag and drop</p>
        </label>
      </div>
      <div className="previewImg flex gap-2 mt-4">
        {images.length > 0 ? images.map((item, index) => {
          return (
            <PreviewImg
              key={item.name}
              fileDetails={item}
              handleRemove={removeFile}
              index={index}
            />
          );
        }) :
        <div className="size-26 bg-black/6 rounded-xl flex justify-center items-center">
            pic image
        </div>
    }
      </div>
    </div>
  );
}
