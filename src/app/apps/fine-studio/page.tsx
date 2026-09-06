import { AppPage, appMetadata } from "@/components/apps/AppPage";
import { apps } from "@/constant/apps";
const app = apps.find((app) => app.slug === "fine-studio")!;
export const metadata = appMetadata(app);
export default function Page() {
  return <AppPage app={app} />;
}
