import connected from "@/config/dbConnect";
import Admin_detail from "@/models/admin_details";
import Image from "next/image";
import InpBtn from './component/InpBtn'


export default async function page() {
        await connected()
        const data = await Admin_detail.find()
        const admin_details = data[0]
        // console.log(admin_details)

  return (
    <div className=" h-screen mx-auto flex flex-col justify-center items-center">
        <div className=" py-5 px-5 flex flex-col gap-4 justify-center items-center">

      <Image src={'/productImg.jpeg'} alt="ProfileImg" width={20} height={20} />
      <select>
        <option value="username">{admin_details.username}</option>
        <option value="Log Out">Log Out</option>
      </select>
        <InpBtn/>
        </div>
    </div>
  )
}
