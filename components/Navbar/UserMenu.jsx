import clsx from "clsx";
import { Button } from "@/components/UI/Button";
import Notification from "@/svg/Notificacton";
import { useWindowSize } from "@uidotdev/usehooks";
import { logout } from "@/utils/logout";
import { useRouter } from "next/router";

export default function UserMenu({ pic, name }) {
  const size = useWindowSize();
  const router = useRouter();

  return (
    <section
      className={clsx(
        "gap-4 flex justify-end",
        "md:justify-center",
        "lg:justify-end ",
        "mr-3 py-2"
      )}
    >
      {size.width > 767 && (
        <Button href="/new" text={"Create Post"} variant={"create"} />
      )}
      <span className="my-auto">
        <Notification />
      </span>
      <button onClick={() => logout(router)} className="my-auto rounded-full">
        <img className="rounded-full size-10" src={pic} alt={name} />
      </button>
    </section>
  );
}
