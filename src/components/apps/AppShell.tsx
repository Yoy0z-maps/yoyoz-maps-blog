import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { apps, type AppInfo } from "@/constant/apps";
import styles from "./apps.module.css";

export function AppShell({
  app,
  children,
}: {
  app: AppInfo;
  children: ReactNode;
}) {
  return (
    <div
      lang="ko"
      className={styles.page}
      style={
        { "--app-accent": app.accent, "--app-soft": app.soft } as CSSProperties
      }
    >
      <a href="#main" className={styles.skip}>
        본문으로 바로가기
      </a>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>
          Yoy0z-maps<span> / APPS</span>
        </Link>
        <nav aria-label="앱 탐색">
          {apps.map((item) => (
            <Link
              key={item.slug}
              href={`/apps/${item.slug}`}
              aria-current={item.slug === app.slug ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link className={styles.supportNav} href={`/apps/${app.slug}/support`}>
          고객 지원 ↗
        </Link>
      </header>
      <main id="main" className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <Link href="/">© {new Date().getFullYear()} Yoy0z-maps</Link>
        <div>
          <Link href={`/apps/${app.slug}`}>앱 소개</Link>
          <Link href={`/apps/${app.slug}/support`}>고객 지원</Link>
          {app.privacy && <Link href={app.privacy}>개인정보처리방침</Link>}
          {app.slug === "fine-studio" && (
            <Link href="/apps/fine-studio/terms-of-use">이용약관</Link>
          )}
        </div>
      </footer>
    </div>
  );
}
