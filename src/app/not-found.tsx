import { lilita_one } from "@/app/layout";
import imageNotFound from "./images/error404.svg";
export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center bg-zinc-800 text-zinc-200 ">
      <div className="mx-auto flex flex-col-reverse items-center md:w-[80%] lg:w-full lg:flex-row xl:w-[70%]">
        <div className="flex w-full flex-col gap-4 p-5">
          <div>
            <p className={`${lilita_one.className} text-[50px]`}>
              Page Not Found...
            </p>
            <p
              className={`${lilita_one.className} text-2xl tracking-wider text-red-500`}
            >
              Error 404
            </p>
          </div>
          <p className="lg:text-md text-sm tracking-wider text-zinc-400 2xl:text-lg">
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <a
            href="/"
            className="w-fit rounded-md bg-indigo-500 px-3 py-1.5 hover:underline"
          >
            Back to Home Page
          </a>
        </div>
        <div className="w-full p-5">
          <img src={imageNotFound?.src} alt="" className="" />
        </div>
      </div>
    </div>
  );
}
