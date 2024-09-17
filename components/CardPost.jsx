import { formatDate } from "@/utils/formatDate";
import Tags from "./UI/Tags";
import Link from "next/link";
import clsx from "clsx";
import SavePost from "@/svg/SavePost";

export default function CardPost({
  image,
  title,
  tags = [],
  createdAt,
  user = {},
  showImage = true,
}) {
  const [day, month, year] = formatDate(createdAt);

  return (
    <article className="bg-white rounded-md">
      <Link href={`/${user.name}/${title}`}>
        {showImage && (
          <img
            className="w-full h-64  object-cover rounded-t-md"
            src={image}
            alt={title}
          />
        )}
        <section className="grid grid-cols-[0.1fr_1.5fr] p-3">
          <img
            className="min-w-6 size-8 mt-1 mr-3 rounded-full"
            src={user.profilePic}
            alt={user.name}
          />
          <div>
            <p
              className={clsx(
                "max-w-min py-1 rounded-md",
                "text-s font-medium leading-none whitespace-nowrap",
                "hover:bg-black/5"
              )}
            >
              {user.name}
            </p>
            <p
              className={clsx(
                "text-xs font-light text-black/70 leading-none",
                "hover:text-black"
              )}
            >
              {`${month} ${day}`}
            </p>
            <h4
              className={clsx("text-3xl font-bold py-2", "hover:text-blue-800")}
            >
              {title}
            </h4>
            <Tags tags={tags} />
            <div className="my-4 flex justify-between">
              <div>
                <button
                  className={clsx(
                    "py-1 px-3 rounded-md font-light text-gray-600",
                    "hover:bg-black/5 hover:text-black"
                  )}
                >
                  💖 Reactions
                </button>
                <button
                  className={clsx(
                    "py-1 px-3 rounded-md font-light text-gray-600",
                    "hover:bg-black/5 hover:text-black"
                  )}
                >
                  🗯 Comments
                </button>
              </div>
              <div className="flex items-center gap-5 ">
                <span className="text-xs">4 min read</span>
                <span
                  className={clsx("hover:bg-blue-600/20 ", "p-2 rounded-md")}
                >
                  <SavePost />
                </span>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </article>
  );
}
