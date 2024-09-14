import { Button } from "@/components/UI/Button";
import clsx from "clsx";

export default function CreateAccount() {
  return (
    <section
      className={clsx(
        "gap-2 flex justify-end",
        "md:justify-center",
        "lg:justify-end ",
        "mr-3 py-2"
      )}
    >
      <Button href="/enter" text={"Login"} />
      <Button
        href="/enter?state=new-user"
        text={"Create account"}
        variant={"create"}
      />
    </section>
  );
}
