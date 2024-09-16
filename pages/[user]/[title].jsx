import DetailUser from "@/components/DetailUser";
import Tags from "@/components/UI/Tags";
import MainLayout from "@/layouts/MainLayout";
import SavePost from "@/svg/SavePost";
import SvgComments from "@/svg/SvgComment";
import SvgHeartPost from "@/svg/SvgHeartPost";
import { getPosts } from "@/utils/api";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";

export default function PostDetail({ post }) {
  const [day, month] = formatDate(post.createdAt);

  return (
    <MainLayout>
      <div
        className={clsx(
          "max-w-screen-xl mx-auto",
          "flex pt-16 md:px-3 bg-[#ebebeb]"
        )}
      >
        <aside
          className={clsx(
            "hidden w-24 gap-6 pt-16 ",
            "md:flex  flex-col items-center"
          )}
        >
          <SvgHeartPost />
          <SvgComments />
          <SavePost />
        </aside>
        <div className="lg:flex w-full">
          <main className="w-full md:mx-3  bg-white">
            <span className="flex h-80 w-full ">
              <img
                className="w-full object-cover h-auto "
                src={post.image}
                alt={post.title}
              />
            </span>
            <div className="pt-6 px-11">
              <section className="flex ">
                <img
                  className="size-10 rounded-full mr-4 items-center"
                  src={post.user.profilePic}
                  alt={post.user.name}
                />
                <div>
                  <p className="font-bold">{post.user.name}</p>
                  <p className="font-extralight text-xs">
                    Posted on {`${month} ${day}`}
                  </p>
                </div>
              </section>

              <section className="pt-5">
                <p>💖</p>
              </section>
              <h1 className="font-black text-4xl py-3">{post.title}</h1>
              <section>
                <Tags tags={post.tags} />
              </section>
              <p className="py-10">{post.body}</p>
            </div>
          </main>
          <DetailUser user={post.user} />
        </div>
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
