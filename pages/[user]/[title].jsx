import CardDetailPost from "@/components/CardDetailPost";
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
          <CardDetailPost
            image={post.image}
            title={post.title}
            tags={post.tags}
            user={post.user}
            body={post.body}
            createdAt={post.createdAt}
          />

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
