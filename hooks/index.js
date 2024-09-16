import {
  createPost,
  getPosts,
  getUserById,
  login,
  signUp,
  singUp,
} from "@/utils/api";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Email from "@/svg/Email";

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

export function useNewPost(yupSchema) {
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
      const createP = await createPost(data);

      console.log(createP);
      if (createP.error) {
        setError("root.data", { type: "manual", message: createP.error });
        setIsSubmitting(false);
        return;
      }

      if (createP) {
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

export function useSignUp(yupSchema) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(yupSchema) });

  async function onSubmit(data) {
    console.log(data);

    const modifiedData = {
      name: `${data.name} ${data.user}`,
      password: data.password,
      email: data.email,
      profilePic: data.profilePic,
    };
    console.log(modifiedData);

    try {
      setIsSubmitting(true);
      const register = await signUp(modifiedData);

      if (register.error) {
        setError("root.data", { type: "manual", message: register.error });
        setIsSubmitting(false);
        return;
      }

      const user = JSON.stringify(register.user);

      if (register) {
        localStorage.setItem("token", register.token);
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
