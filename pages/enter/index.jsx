import BtnLogin from "@/components/CreateAccount/BtnLogin";
import { iconsLogin } from "@/components/IconsAside";
import { useRouter } from "next/router";
import Login from "@/components/CreateAccount/Login";
import Links from "@/components/CreateAccount/Links";
import Email from "@/svg/Email";
import Link from "next/link";
import clsx from "clsx";

export default function Enter() {
  const router = useRouter();
  const { state } = router.query;

  return (
    <div className="bg-white">
      <main
        className={clsx(
          "w-full max-w-screen-sm",
          "flex flex-col items-center",
          "py-10 px-4 mx-auto "
        )}
      >
        <Link href="/">
          <img
            className="h-12 w-16 mb-5"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
            alt=""
          />
        </Link>

        <h1 className="text-3xl font-bold pb-1">Join the DEV Community</h1>
        <p className="text-center">
          DEV Community is Link community of 2,019.490 amazing developers
        </p>
        <section
          className={clsx("w-full py-6", "flex flex-col items-center gap-3")}
        >
          {iconsLogin.map((icon) => {
            return (
              <BtnLogin key={icon.name} svg={icon.svg} redSocial={icon.name} />
            );
          })}
          {state === "new-user" && (
            <Link
              href={"users/sign_up"}
              className={clsx(
                "pl-2 h-[50px] w-full",
                "bg-green-500 border border-gray-400 rounded-md",
                "flex items-center"
              )}
            >
              <span className="">
                <Email />
              </span>
              <span className="mx-auto font-medium">Sign up with Email</span>
            </Link>
          )}
        </section>

        {state !== "new-user" && <Login />}

        <p className="text-center italic opacity-75 w-3/4">
          By signing up, you are agreeing to our
          <Links text={" privacy policy, "} />
          <Links text={"terms of use "} />
          and
          <Links text={" code of conduct. "} />
        </p>
        <hr className="w-full my-6" />
        {state === "new-user" ? (
          <p>
            Already have an account?
            <Links text={" Log in"} href={"/enter"} />
          </p>
        ) : (
          <p>
            New to DEV Community?
            <Links text={" Create account"} href={"?state=new-user"} />
          </p>
        )}
      </main>
    </div>
  );
}
