import clsx from "clsx";
import AsideNav from "@/components/asideNav/AsideNav";
import CardPost from "@/components/CardPost";
import { getPosts } from "@/utils/api";
import { useSize } from "@/hooks";
import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";

export default function Home({ posts }) {
  const size = useSize();
  const [search, setSearch] = useState("");

  const postFilter = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <MainLayout search={search} setSearch={setSearch}>
      <div
        className={clsx(
          "grid grid-cols-1 gap-4",
          "md:grid-cols-[0.8fr_3fr]",
          "lg:grid-cols-[0.6fr_1.8fr_0.8fr]",
          "max-w-screen-xl mx-auto pt-20  "
        )}
      >
        {size > 766 && (
          <aside className={clsx("hidden md:block")}>
            <AsideNav />
          </aside>
        )}

        <main className={clsx("flex flex-col gap-2 ")}>
          {postFilter.map((post, idx) => {
            const showImage = idx === 0;
            return (
              <CardPost
                key={post._id}
                image={post.image}
                title={post.title}
                user={post.user}
                tags={post.tags}
                createdAt={post.createdAt}
                showImage={showImage}
              />
            );
          })}
        </main>
        {size > 1023 && (
          <aside className={clsx("bg-white ", "hidden lg:block ")}></aside>
        )}
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
