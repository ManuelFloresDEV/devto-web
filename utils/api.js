const API_BACKEND = "https://server-backend-7xst.onrender.com";

export async function getPosts(search = "") {
  try {
    const url = search
      ? `${API_BACKEND}/posts?search=${search}`
      : `${API_BACKEND}/posts`;

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    return data.data.posts;
  } catch (error) {
    return { error: error.message };
  }
}

export async function login(dataLogin) {
  try {
    const response = await fetch(`${API_BACKEND}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataLogin),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    return data.data?.token;
  } catch (error) {
    return { error: error.message };
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${API_BACKEND}/user/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.data.user;
  } catch (error) {
    return { success: false, message: error.message };
  }
}
