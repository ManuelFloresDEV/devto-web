import { iconsNewPost } from "@/components/IconsAside";
import NavNew from "@/components/Navbar/NavNew";
import IconBtn from "@/svg/newPost/IconBtn";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import { newPost } from "@/utils/yupSchema";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInputFocus, useNewPost } from "@/hooks";
import CardTipsBody from "@/components/CardTipsbody";
import CardTipsTags from "@/components/CardTipsTags";
import CardTipsTitle from "@/components/CardTipsTitle";
import CardDetailPost from "@/components/CardDetailPost";

export default function NewPost() {
  const { focusInput, handleBlur, handleFocus } = useInputFocus();
  const size = useWindowSize();
  const router = useRouter();
  const [previewPost, setPreviewPost] = useState(false);

  const {
    errors,
    handleSubmit,
    isSubmitting,
    onSubmit,
    register,
    tags,
    addTag,
    watch,
    removeTags,
  } = useNewPost(newPost);

  const watchInput = watch();
  console.log(watchInput.tags);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      router.push("/enter");
    }
  }, [router]);

  return (
    <div className="bg-[#e2e2e2] h-screen ">
      <NavNew previewPost={previewPost} setPreviewPost={setPreviewPost} />

      <div
        className={clsx("h-max my-1", {
          "grid-cols-[1fr] w-screen": size.width < 768,
          "max-w-screen-xl  mx-auto grid grid-cols-[1fr_0.5fr]":
            size.width > 768,
        })}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {!previewPost && (
            <div className="bg-white flex flex-col py-6  border ">
              <div className="flex flex-col pl-16">
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
                  onFocus={() => {
                    handleFocus("title");
                  }}
                  onBlur={handleBlur}
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}

                <div className="flex gap-2 mt-2">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className={clsx(
                        "bg-gray-200/40 cursor-pointer",
                        "hover:bg-gray-200",
                        "p-2 rounded-md"
                      )}
                      onClick={() => removeTags(tag)}
                    >
                      {tag} <span>&times;</span>
                    </div>
                  ))}
                </div>

                <input
                  className="focus:outline-none"
                  type="text"
                  placeholder="Add up t0 4 tags..."
                  {...register("tags")}
                  disabled={isSubmitting || tags.length === 4}
                  onKeyDown={addTag}
                  onFocus={() => {
                    handleFocus("tags");
                  }}
                  onBlur={handleBlur}
                />

                {errors.tags && (
                  <span className="text-red-500">{errors.tags.message}</span>
                )}
              </div>

              <div
                className={clsx(
                  "bg-[#e2e2e2]",
                  "h-10 pl-16",
                  "border border-x-gray-500/20",
                  "flex items-center gap-5   "
                )}
              >
                {iconsNewPost.map((icon, index) => {
                  return <span key={index}>{icon.icon}</span>;
                })}
              </div>
              <textarea
                {...register("body")}
                disabled={isSubmitting}
                rows="13"
                className={clsx(
                  "placeholder:text-black/65 placeholder:text-xl",
                  "mb-4 pl-16",
                  "resize-none text-black/65 text-xl focus:outline-none"
                )}
                placeholder="write your post content here..."
                onFocus={() => {
                  handleFocus("body");
                }}
                onBlur={handleBlur}
              ></textarea>
              {errors.body && (
                <span className="text-red-500 pl-16">
                  {errors.body.message}
                </span>
              )}
            </div>
          )}
          {previewPost && (
            <CardDetailPost
              image={watchInput.image}
              title={watchInput.title}
              tags={tags}
              user={watchInput.user}
              body={watchInput.body}
              createdAt={"2"}
              preview={true}
            />
          )}
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
        <div>
          {focusInput === "title" && size.width > 768 && (
            <section className="max-w-md px-6 pt-24">
              <CardTipsTitle />
            </section>
          )}
          {focusInput === "tags" && size.width > 768 && (
            <section className="max-w-md px-6 pt-40">
              <CardTipsTags />
            </section>
          )}
          {focusInput === "body" && size.width > 768 && (
            <section className="max-w-md px-6 pt-56">
              <CardTipsBody />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
