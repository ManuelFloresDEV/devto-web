const API_BACKEND = "https://server-backend-7xst.onrender.com";

export async function getAllPosts() {
  try {
    const response = await fetch(`${API_BACKEND}/posts`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
}
