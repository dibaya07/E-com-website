import connected from "@/config/dbConnect";
import { Products } from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

import cloudinary from "@/lib/cloudinary";
import { UploadApiResponse } from "cloudinary";



export async function GET(req: NextRequest) {
    try {
        await connected()
        const page = Number(req.nextUrl.searchParams.get("page")) || 0
        const res = await Products.find().sort({ _id: -1 }).skip(page * 6).limit(6)
        const productCount = await Products.countDocuments()
        return NextResponse.json({ messges: "success", res, productCount })
    } catch (error) {
        return NextResponse.json({ message: "Got error" })
    }
}

//addProducts
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData() //getting data request body

        const data = Object.fromEntries(formData.entries()) 
        const { image, ...productData } = data; 
        const files = formData.getAll("image") as File[]

        if (!files.length) {
            return Response.json(
                { message: "Please upload at least one image" },
                { status: 400 }
            );
        }

        const imageUrls = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);

                const result = await new Promise<UploadApiResponse>(
                    (resolve, reject) => {
                        cloudinary.uploader
                            .upload_stream(
                                {
                                    folder: "products",
                                },
                                (error, result) => {
                                    if (error) {
                                        return reject(error);
                                    }

                                    if (!result) {
                                        return reject(
                                            new Error("No upload result returned")
                                        );
                                    }

                                    resolve(result);
                                }
                            )
                            .end(buffer);
                    }
                );

                return result.secure_url;
            })
        );

        // console.log(imageUrls)

        await connected()
        const result = await Products.create({ ...productData, images: imageUrls })
        return Response.json({ message: "got req successfully", result })
    } catch (err) {
        console.log(err)
        return Response.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}







//DELETE PRODUCTS
export async function DELETE(req: NextRequest) {
    try {
        // console.log()
        const { id } = await req.json()
        // console.log(id)

        const result = await Products.findByIdAndDelete(id)
        console.log(result)

        return Response.json({ message: "successfully deleted", })
    } catch (err) {
        console.log(err)
    }
}




