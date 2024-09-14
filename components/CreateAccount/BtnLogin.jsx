import { useRouter } from "next/router";

export default function BtnLogin({ svg, redSocial }) {
  const router = useRouter();
  const { state } = router.query;

  return (
    <button className="h-[50px] w-full pl-2 flex items-center border border-gray-400 rounded-md">
      <span className="">{svg}</span>
      <span className="mx-auto font-medium">
        {state === "new-user" ? "Sign up" : "Continue"} with {redSocial}
      </span>
    </button>
  );
}
