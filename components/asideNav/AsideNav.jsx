import CardAccount from "./CardAccount";
import NavLink from "./NavLink";
import { icons, other, social } from "@/components/IconsAside";

export default function AsideNav(props) {
  return (
    <>
      <CardAccount />
      <ul className="py-4">
        {icons.map((icon) => {
          return <NavLink key={icon.name} name={icon.name} svg={icon.svg} />;
        })}
      </ul>
      <section>
        <p className="font-bold p-3 ">Other</p>
        <ul>
          {other.map((icon) => {
            return <NavLink key={icon.name} name={icon.name} svg={icon.svg} />;
          })}
        </ul>
      </section>
      <section className="flex justify-around py-4">
        {social.map((icon) => {
          return (
            <span
              key={icon.name}
              className="hover:bg-blue-300/20 p-2 rounded-md hover:fill-blue-900 "
            >
              {icon.svg}
            </span>
          );
        })}
      </section>
    </>
  );
}
