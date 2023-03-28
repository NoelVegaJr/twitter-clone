import {
  HomeIcon,
  EnvelopeIcon,
  BellIcon,
  BookmarkIcon,
  UserIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { name: "home", icon: <HomeIcon className="w-10 h-10" /> },
  { name: "notifications", icon: <BellIcon className="w-10 h-10" /> },
  { name: "messages", icon: <EnvelopeIcon className="w-10 h-10" /> },
  { name: "bookmarks", icon: <BookmarkIcon className="w-10 h-10" /> },
  { name: "profile", icon: <UserIcon className="w-10 h-10" /> },
];

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-8">
      <CubeIcon className="w-10 h-10" />
      {links.map((link) => (
        <Link
          key={link.name}
          href={`/${link.name}`}
          className="flex items-items gap-6 text-2xl"
        >
          {link.icon}
          {link.name[0].toUpperCase() + link.name.slice(1)}
        </Link>
      ))}
    </nav>
  );
}
