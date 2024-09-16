export default function Tags({ tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <span
          key={tag}
          className="py-1 px-2  hover:border-black hover:bg-black/5 text-sm rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
