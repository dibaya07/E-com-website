"use client";
import Link from "next/link";
import UploadImg from "./UploadImg";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { productFormData } from "../../types/admin_products.types";

export default function AddForm() {
  const router = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<productFormData>({
    defaultValues: {
      title: "",
      brand: "",
      description: "",
      price: undefined,
      stock: undefined,
      category: "",
      // tages: "",
      status: "",
      image: [],
    },
  });

  const onSubmit = async (data: productFormData) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("brand", data.brand);
    formData.append("description", data.description);
    formData.append("price", String(data.price));

    formData.append("stock", String(data.stock));
    formData.append("category", data.category);
    // formData.append("tages", data.tages);
    formData.append("status", data.status);
    data.image.forEach((item: File) => {
      formData.append("image", item);
    });

    const res = await fetch("http://localhost:3000/api/admin/products", {
      method: "POST",
      body: formData,
    });

    router.push("/admin/Products");
  };

  return (
    <form
      className="px-8 py-4 bg-(--gray) w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-semibold">Add New Product</h1>
      <div className="flex p-1 mt-3 gap-8">
        <div className="rightDiv flex flex-col gap-4 w-[50%]">
          <div className="generalInfo bg-white p-4 rounded-2xl flex flex-col ">
            <h2 className="text-lg font-medium mb-3">General Information</h2>
            <label
              htmlFor="title"
              className="text-base text-black/60 mb-0.5"
            >
              Product Name
            </label>
            <input
              type="text"
              id="title"
              placeholder="eg: Wireless Noise-cancelling Headphones"
              className={`bg-(--gray) outline-0 p-2 rounded-lg mb-3.5 ${errors.title ? "border border-red-600" : ""}`}
              {...register("title", {
                required: "Product Name is required",
              })}
            />
            {errors.title && (
              <p style={{ color: "orangered" }}>{errors.title.message}</p>
            )}
            <label
              htmlFor="brand"
              className="text-base text-black/60 mb-0.5"
            >
              Brand Name
            </label>
            <input
              type="text"
              id="brand"
              placeholder="eg: JBL"
              className={`bg-(--gray) outline-0 p-2 rounded-lg mb-3.5 ${errors.brand ? "border border-red-600" : ""}`}
              {...register("brand", {
                required: "brand Name is required",
              })}
            />
           
           
            <label
              htmlFor="description"
              className="text-base text-black/60 mb-0.5"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Describe Your Product"
              className="bg-(--gray) p-2  rounded-lg"
              {...register("description", {
                required: "description is required",
              })}
            ></textarea>
          </div>

          <UploadImg watch={watch} setValue={setValue} />

          <div className="price bg-white p-3 flex flex-col rounded-2xl">
            <h2>Price & Inventory</h2>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              className="bg-(--gray)"
              placeholder="$ 0.00"
              {...register("price", { required: "price is required" })}
            />
            {/* <label htmlFor="discountedPrice">Discounted Price</label>
            <input
              type="number"
              id="discountedPrice"
              className="bg-(--gray)"
              placeholder="$ 0.00"
              {...register("discountedPrice", {
                required: "discountedPrice is required",
              })}
            /> */}
            <label htmlFor="stock">stock in Stock</label>
            <input
              type="number"
              id="stock"
              className="bg-(--gray)"
              placeholder="1"
              //   value={1}
              //   defaultValue={1}
              min={1}
              {...register("stock", {
                required: "stock is required",
                valueAsNumber: true,
              })}
            />
          </div>
        </div>
        <div className="leftDiv flex flex-col gap-2 w-[30%]">
          <div className="organization flex flex-col gap-2 bg-white p-3 rounded-2xl">
            <h2>Organization</h2>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="bg-(--gray)"
              {...register("category", { required: "category is required" })}
            >
              <option value="">Select Category</option>
              <option value="Headphones">Headphones</option>
            </select>
            {/* <label htmlFor="tages">Tags</label>
            <input
              type="text"
              id="tages"
              className="bg-(--gray)"
              placeholder="Enter tags seperated by comma"
              {...register("tages", { required: "tages is required" })}
            /> */}
          </div>

          <div className="status bg-white p-3 rounded-2xl">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              className="bg-(--gray)"
              {...register("status", { required: "status is required" })}
            >
              <option value="Published">Published</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="submitBtns flex gap-3">
        <Link href={"/admin/Products"} className="bg-red-700  text-white">
          Cancel
        </Link>
        <button type="submit" disabled={isSubmitting} className="bg-green-600 ">
          {isSubmitting ? "Submitting" : "Save Products"}
        </button>
      </div>
    </form>
  );
}
