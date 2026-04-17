import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { springPresets } from "@/lib/motion";

export function WhatsAppButton() {
  const phoneNumber = "972547295318";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={springPresets.gentle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="צור קשר דרך WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
