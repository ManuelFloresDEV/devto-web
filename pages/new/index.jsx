import { iconsNewPost } from "@/components/IconsAside";
import NavNew from "@/components/Navbar/NavNew";
import { useGetUser } from "@/hooks";
import IconBtn from "@/svg/newPost/IconBtn";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NewPost() {
  const size = useWindowSize();
  const { user } = useGetUser();
  const router = useRouter();
  console.log(user);

  return (
    <div className="bg-[#e2e2e2] h-screen ">
      <NavNew />

      <div
        className={clsx("h-max my-3", {
          "grid-cols-[1fr] w-screen": size.width < 768,
          "max-w-screen-xl  mx-auto grid grid-cols-[1fr_0.5fr]":
            size.width > 768,
        })}
      >
        <form>
          <div className="bg-white flex flex-col py-6 px-16 border ">
            <input
              className="pl-3 w-44 h-[39px] border border-black/20 rounded-md"
              type="url"
              placeholder="Add a cover image"
            />
            <input
              className="py-9 placeholder:text-5xl focus:outline-none placeholder:font-black placeholder:text-black/75 font-bold text-black/75 text-3xl "
              type="text"
              placeholder="New post title here..."
            />
            <input
              className="focus:outline-none"
              type="text"
              placeholder="Add up t0 4 tags..."
            />

            <div className="bg-[#e2e2e2] h-10 flex items-center gap-5   ">
              {iconsNewPost.map((icon) => {
                return <span key={icon.icon}>{icon.icon}</span>;
              })}
            </div>
            <textarea
              rows="13"
              className="placeholder:text-black/65 mb-4 resize-none placeholder:text-xl text-black/65 text-xl focus:outline-none"
              placeholder="write your post content here..."
            ></textarea>
          </div>
          <div className="bg-[#dddddd] flex gap-5 p-3 my-3">
            <button>Publish</button>
            <button>Save draft</button>
            <button>
              <IconBtn />
            </button>
            <button>Revert new change</button>
          </div>
        </form>
      </div>
    </div>
  );
}
