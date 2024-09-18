import { formatDate } from "@/utils/formatDate";
import Tags from "./UI/Tags";

export default function CardDetailPost({
  image,
  title,
  tags = [],
  body,
  user = {},
  createdAt,
  preview = false,
}) {
  const [day, month] = formatDate(createdAt);

  const validTags = Array.isArray(tags) ? tags : [];

  return (
    <main className="w-full md:mx-3  bg-white">
      <span className="flex h-80 w-full ">
        <img className="w-full object-cover h-auto " src={image} alt={title} />
      </span>
      <div className="pt-6 px-11">
        {!preview && (
          <>
            <section className="flex ">
              <img
                className="size-10 rounded-full mr-4 items-center"
                src={user.profilePic}
                alt={user.name}
              />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="font-extralight text-xs">
                  Posted on {`${month} ${day}`}
                </p>
              </div>
            </section>

            <section className="pt-5">
              <p>💖</p>
            </section>
          </>
        )}
        <h1 className="font-black text-4xl py-3">{title}</h1>
        <section>
          <Tags tags={validTags} />
        </section>
        <p className="py-10">{body}</p>
      </div>
    </main>
  );
}
