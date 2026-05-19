import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
      <div className="flex flex-col justify-center items-center  h-screen gap-3">
        <SignIn />
        <Link href={"/"} className="bg-(--gray) hover:bg-blue-800 hover:text-white px-2 py-2 rounded-lg border-white border-r-2 ">GO BACK</Link>
    </div>
  );
}
