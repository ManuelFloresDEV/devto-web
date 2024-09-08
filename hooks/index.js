import { getAllPosts } from "@/utils/api";
import { useEffect, useState } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((response) => setPosts(response))
      .catch((error) => console.error(error));
  }, []);
  return posts;
}
