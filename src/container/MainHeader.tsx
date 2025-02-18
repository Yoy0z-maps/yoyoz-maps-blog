import ThemeToggleButton from "../components/ThemeToggleButton";
import MainHeaderNavigationItem from "../components/MainHeaderNavigationItem";

const navigationItems = [
  { href: "/", text: "HOME" },
  { href: "/projects", text: "PROJECTS" },
  { href: "/blog", text: "BLOG" },
  { href: "/guest", text: "GUEST" },
];

export default function MainHeader() {
  return (
    <div className="fixed w-full flex items-center justify-center px-10 py-7  sm:py-5 sm:px-9 z-50">
      <div
        id="logo"
        className="absolute left-5 flex flex-shrink-0 items-center"
      >
        <p className="font-pretendard text-logo-light dark:text-white text-xl">
          Yoy0z-maps.
        </p>
      </div>
      <nav className="hidden sm:flex items-center justify-center gap-x-7">
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
