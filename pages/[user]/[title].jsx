import Tags from "@/components/UI/Tags";
import { useSize } from "@/hooks";
import MainLayout from "@/layouts/MainLayout";
import { getPosts } from "@/utils/api";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";

export default function PostDetail({ post }) {
  const size = useSize();
  return (
    <MainLayout>
      <div
        className={clsx({
          "grid grid-cols-[0.3fr_1fr_0.6fr]": size > 1023,
          "grid grid-cols-[0.3fr_1fer]": size > 767,
        })}
      >
        <div className="hidden text-white bg-black border border-white ">
          <ul>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
          </ul>
        </div>
        <main className>
          <span className="flex w-full h-[323px] ">
            <img className="w-full h-auto " src={post.image} alt="" />
          </span>
          <div className="p-6">
            <section className="flex ">
              <img
                className="size-10 rounded-full mr-4 items-center"
                src={post.user.profilePic}
                alt={post.user.name}
              />
              <div>
                <p className="font-bold">{post.user.name}</p>
                <p className="font-extralight text-xs">
                  Posted on {formatDate(post.createdAt)}
                </p>
              </div>
            </section>

            <section className="pt-5">
              <p>icons</p>
            </section>
            <h1 className="font-black text-3xl py-3">{post.title}</h1>
            <section>
              <Tags tags={post.tags} />
            </section>
            <p className="pt-3">{post.body}</p>
          </div>
        </main>
        <article className="hidden text-white bg-black border border-white ">
          <ul>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
            <li>asds</li>
          </ul>
        </article>
      </div>
    </MainLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: {
      user: post.user.name.toString(),
      title: post.title.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { user, title } = params;

  const posts = await getPosts(title);
  const post = posts.find(
    (currentPost) =>
      currentPost.title === title && currentPost.user.name === user
  );

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}
