import { getPosts, getUserById, login } from "@/utils/api";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then((response) => setPosts(response))
      .catch((error) => setError(error?.message));
  }, []);
  return { posts, error };
}

export function useLogin(yupSchema) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  async function onSubmit(data) {
    try {
      setIsSubmitting(true);
      const token = await login(data);

      if (token.error) {
        setError("root.data", { type: "manual", message: token.error });
        setIsSubmitting(false);
        return;
      }

      if (token) {
        localStorage.setItem("token", token);
        router.push("/");
        setIsSubmitting(false);
      }
    } catch (error) {
      setError("root.data", { type: "manual", message: error.message });
      setIsSubmitting(false);
    }
  }

  return {
    isSubmitting,
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}

export function useSize() {
  const [isClient, setIsClient] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [size, setSize] = useState(width);

  useEffect(() => {
    if (isClient) {
      setSize(width);
    }
  }, [width, isClient]);
  return size;
}

export function useGetUser() {
  const [token, setToken] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const hastoken = localStorage.getItem("token");
      if (hastoken) {
        setToken(hastoken);
      }
    }
  }, [isClient]);

  useEffect(() => {
    if (token && isClient) {
      try {
        const payloadString = token.split(".")[1];
        const payloadJsonAsString = atob(payloadString);
        const payloadJson = JSON.parse(payloadJsonAsString);
        getUserById(payloadJson.id)
          .then((response) => setUser(response))
          .catch((error) => setError(error));
      } catch (error) {
        setError(error);
      }
    }
  }, [token]);

  return { user, error };
}
