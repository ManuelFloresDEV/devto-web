import Input from "@/components/UI/Input";
import { useSignUp } from "@/hooks";
import MainLayout from "@/layouts/MainLayout";
import { signUp } from "@/utils/yupSchema";

export default function Signup() {
  const { errors, handleSubmit, isSubmitting, onSubmit, register } =
    useSignUp(signUp);

  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white border border-black/20 rounded-md w-full max-w-xl  absolute left-1/2 transform -translate-x-1/2 mt-16 p-6 gap-3"
      >
        <h1 className="font-bold text-lg ">Create your account</h1>
        <label className="font-medium" htmlFor="img">
          Profile Image<span className="text-red-600">*</span>
        </label>
        <input
          id="img"
          className="h-9 rounded-md border border-black/20 bg-black/20 placeholder:text-black max-w-min font-medium"
          type="url"
          placeholder="Seleccionar archivo"
          {...register("profilePic")}
        />
        {errors.profilepic && (
          <span className="text-red-600">{errors.profilepic.message}</span>
        )}
        <Input id={"name"} reg={register("name")} type={"text"} />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
        <Input id={"user"} reg={register("user")} type={"text"} />
        {errors.user && (
          <span className="text-red-600">{errors.user.message}</span>
        )}
        <Input id={"email"} reg={register("email")} type={"email"} />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
        <Input id={"password"} reg={register("password")} type={"password"} />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
        <Input
          id={"confirmar password"}
          reg={register("passconf")}
          type={"password"}
        />
        {errors.passconf && (
          <span className="text-red-600">{errors.passconf.message}</span>
        )}

        <label className="flex gap-3 border border-black/20 max-w-min py-4 bg-[#f9f9f9] px-2">
          <input id="" className="size-7" type="checkbox" required />
          <p className=" whitespace-nowrap">Im not a robot</p>
        </label>
        <button
          disabled={isSubmitting}
          className="max-w-min whitespace-nowrap py-2 px-4 bg-[#3b49df] text-white rounded-md"
        >
          {isSubmitting ? "Submitting..." : "Sign up"}
        </button>
      </form>
    </MainLayout>
  );
}
