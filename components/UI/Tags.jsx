import clsx from "clsx";

export default function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <span
          key={tag}
          className={clsx(
            "py-1 px-2 text-sm rounded-md",
            " hover:border-black hover:bg-black/10"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
