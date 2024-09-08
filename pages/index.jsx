import clsx from "clsx";
import NavBar from "@/components/Navbar/Navbar";
import AsideNav from "@/components/asideNav/AsideNav";
import CardPost from "@/components/CardPost";
import { usePosts } from "@/hooks";
import { getAllPosts } from "@/utils/api";

export default function Home({ posts }) {
  return (
    <>
      <nav className="bg-white text-black  col-span-full fixed h-14 w-screen">
        <NavBar />
      </nav>
      <div
        className={clsx(
          "grid grid-rows-2 grid-cols-1 gap-4",
          "md:grid-cols-[0.8fr_3fr]",
          "lg:grid-cols-[0.6fr_1.8fr_0.8fr]",
          "max-w-screen-xl mx-auto pt-20 px-3 "
        )}
      >
        <aside className={clsx(" ", "hidden md:block")}>
          <AsideNav />
        </aside>
        <main className={clsx("flex flex-col gap-2 ")}>
          {posts.map((post) => {
            return (
              <CardPost
                key={post.title}
                image={post.image}
                title={post.title}
                user={post.user}
                tags={post.tags}
                createdAt={post.createdAt}
              />
            );
          })}
        </main>
        <aside className={clsx("bg-white ", "hidden lg:block ")}>
          <ul className=""></ul>
        </aside>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
