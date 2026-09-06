import { AppPage, appMetadata } from "@/components/apps/AppPage";
import { apps } from "@/constant/apps";
const app = apps.find((app) => app.slug === "rovoca")!;
export const metadata = appMetadata(app, true);
export default function Page() {
  return <AppPage app={app} supportOnly />;
}
