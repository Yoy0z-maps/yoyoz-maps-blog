import ThemeToggleButton from "./ThemeToggleButton";
import MainHeaderNavigationItem from "./MainHeaderNavigationItem";

const navigationItems = [
  { href: "/", text: "HOME" },
  { href: "/projects", text: "PROJECTS" },
  { href: "/blog", text: "BLOG" },
  { href: "/guest", text: "GUEST" },
];

export default function MainHeader() {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between py-6 px-9 z-50">
      <div id="logo" className="flex flex-shrink-0 items-center">
        <p className="font-productSansMedium text-white text-2xl">
          Yoy0z-maps.
        </p>
      </div>
      <nav className="flex items-center justify-center gap-x-7">
        {navigationItems.map((item) => (
          <MainHeaderNavigationItem
            key={item.href}
            href={item.href}
            text={item.text}
          />
        ))}
      </nav>
      <ThemeToggleButton />
    </div>
  );
}
