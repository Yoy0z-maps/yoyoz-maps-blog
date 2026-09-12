import { AppShell } from "./AppShell";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaApple,
  FaArrowRight,
  FaEnvelope,
  FaGooglePlay,
} from "react-icons/fa";
import { type AppInfo } from "@/constant/apps";
import styles from "./apps.module.css";

export function appMetadata(app: AppInfo, support = false): Metadata {
  const title = `${app.name} — ${support ? "고객 지원" : app.headline.replace("\n", " ")}`;
  const description = support
    ? `${app.name} 사용 안내, 자주 묻는 질문과 이메일 문의.`
    : app.description;
  return {
    title,
    description,
    alternates: {
      canonical: `https://yoy0z-maps.com/apps/${app.slug}${support ? "/support" : ""}`,
    },
    openGraph: { title, description, locale: "ko_KR", type: "website" },
  };
}

function Download({ app }: { app: AppInfo }) {
  const stores = [
    {
      url: app.storeUrl,
      name: "App Store",
      caption: "Download on the",
      Icon: FaApple,
    },
    {
      url: app.playStoreUrl,
      name: "Google Play",
      caption: "GET IT ON",
      Icon: FaGooglePlay,
    },
  ].filter((store) => store.url);

  return stores.length ? (
    <div className={styles.downloads}>
      {stores.map(({ url, name, caption, Icon }) => (
        <a
          key={name}
          className={styles.download}
          href={url!}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${app.name} — ${name}에서 다운로드 (새 탭)`}
        >
          <Icon size={29} aria-hidden />
          <span>
            <small>{caption}</small>
            {name}
          </span>
          <FaArrowRight aria-hidden />
        </a>
      ))}
    </div>
  ) : (
    <span className={styles.comingSoon}>App Store 출시 준비 중</span>
  );
}

function Support({ app }: { app: AppInfo }) {
  const body = `앱: ${app.name}\n기기 모델:\n운영체제 및 버전:\n앱 버전:\n문의 내용:\n\n문제가 발생한 순서와 오류 메시지를 알려주세요. 비밀번호 등 민감한 정보는 보내지 마세요.`;
  return (
    <section
      id="support"
      className={styles.support}
      aria-labelledby="support-title"
    >
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>HERE TO HELP</span>
        <h2 id="support-title">도움이 필요하신가요?</h2>
        <p>
          자주 묻는 질문에서 답을 찾고, 해결되지 않는 문제는 편하게 알려주세요.
        </p>
      </div>
      <div className={styles.supportGrid}>
        <div>
          {app.faqs.map(([question, answer]) => (
            <details key={question} className={styles.faq}>
              <summary>
                {question}
                <span aria-hidden>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <aside className={styles.contact}>
          <FaEnvelope size={25} aria-hidden />
          <h3>직접 문의하기</h3>
          <p>
            오류 제보부터 사용 방법, 기능 제안까지.
            <br />
            개발자에게 이메일을 보내주세요.
          </p>
          <a
            className={styles.contactLink}
            href={`mailto:work.johnhan@gmail.com?subject=${encodeURIComponent(`[${app.name}] 지원 문의`)}&body=${encodeURIComponent(body)}`}
          >
            이메일로 문의하기 <FaArrowRight aria-hidden />
          </a>
          <a className={styles.email} href="mailto:work.johnhan@gmail.com">
            work.johnhan@gmail.com
          </a>
          <p className={styles.note}>
            기기 모델, 운영체제·앱 버전과 문제가 발생한 상황을 함께 보내주시면
            확인에 도움이 됩니다.
          </p>
        </aside>
      </div>
    </section>
  );
}

export function AppPage({
  app,
  supportOnly = false,
}: {
  app: AppInfo;
  supportOnly?: boolean;
}) {
  return (
    <AppShell app={app}>
      {supportOnly ? (
        <div className={styles.supportIntro}>
          <Link href={`/apps/${app.slug}`}>← {app.name} 소개로 돌아가기</Link>
          <Image
            unoptimized
            src={app.icon}
            width={64}
            height={64}
            alt=""
            className={styles.icon}
          />
          <h1>{app.name} 고객 지원</h1>
          <p>앱 사용 안내와 문의를 한곳에서 확인하세요.</p>
        </div>
      ) : (
        <>
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
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
                  <span>{app.eyebrow}</span>
                </div>
              </div>
              <h1>{app.headline}</h1>
              <p>{app.description}</p>
              <div className={styles.heroActions}>
                <Download app={app} />
                <a href="#features" className={styles.textLink}>
                  더 알아보기 ↓
                </a>
              </div>
              <span className={styles.heroNote}>
                {app.playStoreUrl
                  ? "iPhone과 Android에서 만나보세요"
                  : app.storeUrl
                    ? "iPhone에서 만나보세요"
                    : "곧 iPhone에서 만나요. 아래에서 앱을 미리 살펴보세요."}
              </span>
            </div>
            <div className={styles.heroVisual}>
              <span className={styles.visualLabel}>
                {app.name} <span>IN YOUR EVERYDAY</span>
              </span>
              <Image
                unoptimized
                priority
                src={app.screens[0]}
                alt={`${app.name} ${app.screenLabels[0]} 스크린샷`}
                width={320}
                height={640}
                className={styles.heroScreen}
              />
              <span className={styles.visualFoot}>
                작은 순간이 쌓이는, 나만의 일상.
              </span>
            </div>
          </section>
          <section
            id="features"
            className={styles.features}
            aria-labelledby="features-title"
          >
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>MADE FOR YOUR EVERYDAY</span>
              <h2 id="features-title">매일 쓰는 이유, 세 가지.</h2>
            </div>
            <div className={styles.featureGrid}>
              {app.features.map(([title, description], index) => (
                <article key={title}>
                  <span className={styles.number}>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.gallery} aria-labelledby="gallery-title">
            <div className={styles.sectionHeading}>
              <span className={styles.eyebrow}>A CLOSER LOOK</span>
              <h2 id="gallery-title">미리 만나는 {app.name}.</h2>
              <p>
                {app.storeUrl
                  ? "앱의 주요 화면을 미리 살펴보세요."
                  : "출시를 준비 중인 앱의 미리보기입니다. 실제 출시 화면은 달라질 수 있습니다."}{" "}
                이미지를 선택하면 크게 볼 수 있어요.
              </p>
            </div>
            <div className={styles.screenTrack}>
              {app.screens.map((src, i) => (
                <figure key={src}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${app.name} 스크린샷 ${i + 1} 크게 보기 (새 탭)`}
                  >
                    <Image
                      unoptimized
                      src={src}
                      alt={`${app.name} 앱 스크린샷 ${i + 1}`}
                      width={320}
                      height={640}
                      className={styles.galleryScreen}
                    />
                  </a>
                  <figcaption>
                    <span>{String(i + 1).padStart(2, "0")}</span> {app.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        </>
      )}
      <Support app={app} />
      {!supportOnly && (
        <section className={styles.closing}>
          <div>
            <span className={styles.eyebrow}>MAKE IT A DAILY THING</span>
            <h2>{app.name}와 함께 시작하세요.</h2>
          </div>
          <Download app={app} />
        </section>
      )}
    </AppShell>
  );
}
