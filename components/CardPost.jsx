import { formatDate } from "@/utils/formatDate";
import Tags from "./UI/Tags";
import Link from "next/link";

export default function CardPost({
  image,
  title,
  tags = [],
  createdAt,
  user = {},
}) {
  return (
    <article className="bg-white rounded-md">
      <Link href={`/${user.name}/${title}`}>
        <img
          className="w-full h-64 object-cover rounded-t-md"
          src={image}
          alt={title}
        />
        <section className="grid grid-cols-[0.1fr_1.5fr] p-3">
          <img
            className="size-8 rounded-full"
            src={user.profilePic}
            alt={user.name}
          />
          <div className="">
            <p>{user.name}</p>
            <span>{formatDate(createdAt)}</span>
            <h4>{title}</h4>
            <Tags tags={tags} />
            <div>
              <div>
                <button>react</button>
                <button>coment</button>
              </div>
              <div>
                <span>time</span>
                <span>imga</span>
              </div>
            </div>
          </div>
        </section>
      </Link>
    </article>
  );
}
