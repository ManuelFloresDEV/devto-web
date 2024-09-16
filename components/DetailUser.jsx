import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";

export default function DetailUser({ user = {} }) {
  const [day, month, year] = formatDate(user.createdAt);

  return (
    <section
      className={clsx(
        "lg:w-[550px] lg:m-0",
        "bg-white border-t-[35px] rounded-lg border-[#341dc7] ",
        "mt-3 h-min",
        "md:m-3 md:w-full"
      )}
    >
      <article className={clsx("px-6", "relative top-[-15px] left-1 ")}>
        <div className="flex items-end gap-5">
          <img
            className="size-12 rounded-full"
            src={user.profilePic}
            alt={user.name}
          />
          <p className={clsx("text-xl font-bold", "hover:text-blue-800")}>
            {user.name}
          </p>
        </div>
        <button
          className={clsx(
            "font-bold text-white  bg-blue-700 ",
            "my-5 py-2 w-full rounded-lg",
            "hover:bg-blue-800"
          )}
        >
          Follow
        </button>
        <span className="font-semibold text-gray-500">JOINED</span>
        <p>{`${month} ${day}, ${year}`}</p>
      </article>
    </section>
  );
}
