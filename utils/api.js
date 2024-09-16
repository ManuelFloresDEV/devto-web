const API_BACKEND = "https://server-backend-7xst.onrender.com";

export async function getPosts(search = "") {
  try {
    const url = search
      ? `${API_BACKEND}/posts?search=${search}`
      : `${API_BACKEND}/posts`;

    const response = await fetch(url);

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData.data.posts;
  } catch (error) {
    throw new Error(error.message);
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

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData.data.token;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch(`${API_BACKEND}/user/${id}`);

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `Error: ${responseData.status} - ${responseData.statusText}`
      );
    }
    return responseData.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createPost(newPost) {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found, authorization required.");

    let response = await fetch(`${API_BACKEND}/Posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(newPost),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Error al crear el post");
    }

    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signUp(newUser) {
  try {
    const response = await fetch(`${API_BACKEND}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Error during sign up");
    }

    return responseData.data.user;
  } catch (error) {
    throw new Error(error.message);
  }
}
