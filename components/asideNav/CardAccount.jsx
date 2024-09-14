import { Button } from "@/components/UI/Button";

export default function CardAccount() {
  return (
    <section className="bg-white p-3 flex flex-col gap-2">
      <h5 className="text-xl font-bold mb-2">
        DEV Community is a community of 2,015,351 amazing developers
      </h5>
      <p className="mb-2">
        We&apos;re a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <Button
        href="/enter?state=new-user"
        text={"Create account"}
        variant={"create"}
        className={"w-full h-10"}
      />
      <Button href="/enter" text={"Log in"} className={"w-full h-10"} />
    </section>
  );
}
