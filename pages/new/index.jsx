import { iconsNewPost } from "@/components/IconsAside";
import NavNew from "@/components/Navbar/NavNew";
import IconBtn from "@/svg/newPost/IconBtn";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import { newPost } from "@/utils/yupSchema";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useNewPost } from "@/hooks";

export default function NewPost() {
  const [token, setToken] = useState(null);
  const router = useRouter();
  const { errors, handleSubmit, isSubmitting, onSubmit, register } =
    useNewPost(newPost);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      router.push("/enter");
    } else {
      setToken(storedToken);
    }
  }, [router]);

  const size = useWindowSize();

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white flex flex-col py-6 px-16 border ">
            <input
              className="pl-3 w-44 h-[39px] border border-black/20 rounded-md"
              type="url"
              placeholder="Add a cover image"
              {...register("image")}
              disabled={isSubmitting}
            />
            {errors.image && (
              <span className="text-red-500">{errors.image.message}</span>
            )}

            <input
              className="py-9 placeholder:text-5xl focus:outline-none placeholder:font-black placeholder:text-black/75 font-bold text-black/75 text-3xl "
              type="text"
              placeholder="New post title here..."
              {...register("title")}
              disabled={isSubmitting}
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}

            <input
              className="focus:outline-none"
              type="text"
              placeholder="Add up t0 4 tags..."
              {...register("tags")}
              disabled={isSubmitting}
            />
            {errors.tags && (
              <span className="text-red-500">{errors.tags.message}</span>
            )}

            <div className="bg-[#e2e2e2] h-10 flex items-center gap-5   ">
              {iconsNewPost.map((icon) => {
                return <span key={icon.icon}>{icon.icon}</span>;
              })}
            </div>
            <textarea
              {...register("body")}
              disabled={isSubmitting}
              rows="13"
              className="placeholder:text-black/65 mb-4 resize-none placeholder:text-xl text-black/65 text-xl focus:outline-none"
              placeholder="write your post content here..."
            ></textarea>
            {errors.body && (
              <span className="text-red-500">{errors.body.message}</span>
            )}
          </div>
          <div className="bg-[#dddddd] flex gap-5 p-3 my-3">
            <button className="bg-[#3b49df] py-2 text-white hover:bg-blue-900 px-3 rounded-md">
              {isSubmitting ? "Loading..." : "Publish"}
            </button>
            <button className="hover:bg-blue-900/20 5 px-3 py-2 hover:text-blue-700">
              Save draft
            </button>
            <button className="hover:bg-blue-900/20 5 px-3 py-2 hover:text-blue-700">
              <IconBtn />
            </button>
            <button className="hover:bg-blue-900/20 5 px-3 py-2 hover:text-blue-700">
              Revert new change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
