import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/index";
import { IMAGES } from "@/assets/images";

export default function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 300, damping: 35 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const contactItems = [
    {
      icon: Phone,
      label: "טלפון",
      value: COMPANY_INFO.contact.phone,
      href: `tel:${COMPANY_INFO.contact.phone}`,
      description: "זמינים לשיחה בשעות הפעילות",
    },
    {
      icon: Mail,
      label: "אימייל",
      value: COMPANY_INFO.contact.email,
      href: `mailto:${COMPANY_INFO.contact.email}`,
      description: "נחזור אליך בהקדם האפשרי",
    },
    {
      icon: MapPin,
      label: "כתובת",
      value: COMPANY_INFO.contact.address,
      href: null as string | null,
      description: "משרד ראשי",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div
        className="relative h-[40vh] min-h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.FINANCIAL_MEETING_8})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 35, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              צור קשר
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              נשמח לענות על כל שאלה ולסייע לך במסע הפיננסי שלך
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto space-y-6"
        >
          {/* Phone & Email - main cards */}
          {contactItems.slice(0, 2).map((item) => (
            <motion.a
              key={item.label}
              href={item.href!}
              variants={fadeInUp}
              className="flex items-center gap-6 p-8 rounded-2xl bg-card border border-border hover:border-accent/60 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors duration-200">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1 text-right">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {item.description}
                </p>
                <p className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                  {item.value}
                </p>
                <p className="text-sm text-accent mt-1">{item.label}</p>
              </div>
            </motion.a>
          ))}

          {/* Address - no link */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-6 p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                {contactItems[2].description}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {contactItems[2].value}
              </p>
              <p className="text-sm text-accent mt-1">{contactItems[2].label}</p>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-6 justify-end">
              <h3 className="text-xl font-bold text-foreground">שעות פעילות</h3>
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <div className="space-y-3 text-right">
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-foreground font-medium">{COMPANY_INFO.hours.weekdays}</span>
                <span className="text-muted-foreground">ראשון - חמישי</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border/50">
                <span className="text-foreground font-medium">{COMPANY_INFO.hours.friday}</span>
                <span className="text-muted-foreground">שישי</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">{COMPANY_INFO.hours.saturday}</span>
                <span className="text-muted-foreground">שבת</span>
              </div>
            </div>
          </motion.div>

          {/* Slogan */}
          <motion.div
            variants={fadeInUp}
            className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              {COMPANY_INFO.slogan}
            </h3>
            <p className="text-muted-foreground">
              צוות {COMPANY_INFO.name} כאן כדי לעזור לך להשיג את היעדים הפיננסיים שלך
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
