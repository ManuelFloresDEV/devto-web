import Link from "next/link";
import { useLogin } from "@/hooks";
import yupSchema from "@/utils/yupSchema";

export default function Login() {
  const { errors, handleSubmit, isSubmitting, onSubmit, register } =
    useLogin(yupSchema);

  return (
    <>
      <span>OR</span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full"
      >
        <label htmlFor="">Email</label>
        <input
          {...register("email")}
          className="pl-2 h-10 border border-black/20 rounded-md"
          type="email"
          disabled={isSubmitting}
        />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        <label htmlFor="">Password</label>
        <input
          {...register("password")}
          className="pl-2 h-10 border border-black/20 rounded-md"
          type="password"
          disabled={isSubmitting}
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
        <div className="flex gap-2">
          <input className="size-4 mt-1" type="checkbox" required />
          <span>Remember me</span>

          <Link className="ml-auto" href="">
            Forgot password?
          </Link>
        </div>
        {errors.root?.data && (
          <span className="text-sm text-red-500 w-full text-center font-bold uppercase">
            {errors.root.data.message}
          </span>
        )}
        <button
          disabled={isSubmitting}
          className="bg-blue-700 h-14 rounded-md text-white my-6"
        >
          {isSubmitting ? "Loading..." : "Log in"}
        </button>
      </form>
    </>
  );
}
