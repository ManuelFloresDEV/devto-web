import Link from "next/link";
import { useLogin } from "@/hooks";
import yupSchema from "@/utils/yupSchema";
import clsx from "clsx";
import Input from "../UI/Input";

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
        <Input id={"Email"} reg={register("email")} type={"email"} />
        {errors.email && (
          <span className="text-red-500 text-xs">{errors.email.message}</span>
        )}
        <Input id={"Password"} reg={register("password")} type={"password"} />
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
          className={clsx(
            "bg-blue-700",
            "rounded-md text-white",
            "h-14  my-6",
            "hover:bg-blue-800"
          )}
        >
          {isSubmitting ? "Loading..." : "Log in"}
        </button>
      </form>
    </>
  );
}
