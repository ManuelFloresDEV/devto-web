export default function NavLink(props) {
  return (
    <>
      <li>
        <a
          className=" whitespace-nowrap ps-2 flex items-center hover:rounded-lg gap-2 hover:bg-blue-300/25 hover:text-blue-700 hover:underline h-10"
          href=""
        >
          <span className="size-6">{props.svg}</span>
          <span>{props.name}</span>
        </a>
      </li>
    </>
  );
}
