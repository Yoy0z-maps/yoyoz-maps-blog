import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { AppInfo } from "@/constant/apps";
import { AppShell } from "./AppShell";
import styles from "./apps.module.css";

export function privacyMetadata(app: AppInfo): Metadata {
  const title = `${app.name} — 개인정보처리방침`;
  const description = `${app.name}의 개인정보 처리, 보관 및 삭제, 외부 서비스와 문의 안내.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.yoy0z-maps.com/apps/${app.slug}/privacy`,
    },
    openGraph: { title, description, locale: "ko_KR", type: "website" },
  };
}

export function AppPrivacyPage({
  app,
  effectiveDate,
  contentLang = "ko",
  children,
}: {
  app: AppInfo;
  effectiveDate: string;
  contentLang?: string;
  children: ReactNode;
}) {
  return (
    <AppShell app={app}>
      <header className={styles.privacyIntro}>
        <Link className={styles.textLink} href={`/apps/${app.slug}`}>
          ← {app.name} 소개로 돌아가기
        </Link>
        <div className={styles.appIdentity}>
          <Image
            unoptimized
            src={app.icon}
            width={60}
            height={60}
            alt=""
            className={styles.icon}
          />
          <div>
            <strong>{app.name}</strong>
            <span>PRIVACY POLICY</span>
          </div>
        </div>
        <h1>개인정보처리방침</h1>
        <p>개인정보의 이용과 보호에 관한 안내입니다.</p>
        <span className={styles.privacyDate}>
          시행일 <time dateTime={effectiveDate}>{effectiveDate}</time>
        </span>
      </header>
      <div className={styles.privacyLayout}>
        <article className={styles.privacyContent} lang={contentLang}>
          {children}
        </article>
        <aside className={styles.contact}>
          <span className={styles.eyebrow}>PRIVACY SUPPORT</span>
          <h2>개인정보 문의</h2>
          <p>개인정보 처리나 계정 삭제에 관한 문의를 보내주세요.</p>
          <a
            className={styles.email}
            href={`mailto:work.johnhan@gmail.com?subject=${encodeURIComponent(`[${app.name}] 개인정보 문의`)}`}
          >
            work.johnhan@gmail.com
          </a>
          <Link
            className={styles.contactLink}
            href={`/apps/${app.slug}/support`}
          >
            고객 지원 ↗
          </Link>
        </aside>
      </div>
    </AppShell>
  );
}
