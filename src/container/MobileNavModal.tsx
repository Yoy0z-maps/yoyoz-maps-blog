import MobileNavLink from "@/components/mobile/MobileNavLink";
import { motion } from "motion/react";

export default function MobileNavModal({
  isOpen,
  items,
}: {
  isOpen: boolean;
  items: { id: number; href: string; icon: React.ReactNode }[];
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="bg-red-500 rounded-full p-4 shadow-lg fixed bottom-20 right-5 w-[50px] h-[200px] flex flex-col justify-between items-center"
      initial={{ scale: 0 }}
      animate={{ scale: isOpen ? 1 : 0 }}
      exit={{ scale: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {items.map((item) => (
        <MobileNavLink key={item.id} href={item.href} icon={item.icon} />
      ))}
    </motion.div>
  );
}
