import Link from "next/link";

export default function Links({ text, href = "/" }) {
  return (
    <Link className="text-blue-900 " href={href}>
      {text}
    </Link>
  );
}
