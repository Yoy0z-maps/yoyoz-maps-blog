import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  detail: string;
}

export default function InfoItem({ icon, title, detail }: Props) {
  return (
    <div className="flex w-full h-full justify-start items-center gap-x-2">
      <div className="w-[45px] h-[45px] flex justify-center items-center">
        <div className="p-[10px] bg-gray-500 rounded-lg">{icon}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-white opacity-80 text-sm">{title}</span>
        <span className="text-white font-semibold text-sm">{detail}</span>
      </div>
    </div>
  );
}
