import TripManage from "@/components/trip/TripManage";
export const metadata = {
  title: "여행 사진 관리",
  robots: { index: false, follow: false },
};
export default function TripManagePage() {
  return <TripManage />;
}
