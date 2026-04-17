import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, TrendingDown, Shield, Clock, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS, COMPANY_INFO } from "@/lib/index";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 300, damping: 35 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const benefits = [
  {
    icon: TrendingDown,
    title: "ריבית נמוכה יותר",
    description: "השגת תמהיל אופטימלי עם ריביות תחרותיות ביותר בשוק",
  },
  {
    icon: Shield,
    title: "הגנה מקסימלית",
    description: "מיצוי זכויות והטבות, הגנה מפני עליות ריבית עתידיות",
  },
  {
    icon: Clock,
    title: "חיסכון בזמן",
    description: "ליווי מקצועי לאורך כל התהליך, מהערכה ועד לחתימה",
  },
];

const process = [
  {
    step: "01",
    title: "פגישת היכרות",
    description: "ניתוח מצב פיננסי, הבנת צרכים ויעדים",
  },
  {
    step: "02",
    title: "בדיקת זכאות",
    description: "בחינה מקיפה של יכולת ההלוואה והתנאים האפשריים",
  },
  {
    step: "03",
    title: "השוואת הצעות",
    description: "איסוף והשוואה של הצעות מכל הבנקים והמלווים",
  },
  {
    step: "04",
    title: "בניית תמהיל",
    description: "יצירת תמהיל משכנתא אופטימלי המותאם אישית",
  },
  {
    step: "05",
    title: "משא ומתן",
    description: "ניהול משא ומתן מקצועי עם הבנקים לתנאים הטובים ביותר",
  },
  {
    step: "06",
    title: "ליווי לחתימה",
    description: "ליווי צמוד עד לחתימה על ההסכם הסופי",
  },
];

const stats = [
  { value: "20+", label: "שנות ניסיון" },
  { value: "700+", label: "לקוחות מרוצים" },
  { value: "₪500M+", label: "היקף משכנתאות" },
  { value: "0.5%", label: "חיסכון ממוצע בריבית" },
];

export default function Mortgage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.MORTGAGE_2}
            alt="ייעוץ משכנתאות"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Home className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">ייעוץ משכנתאות</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent">
              השגת המשכנתא האופטימלית
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ליווי מקצועי להשגת תמהיל משכנתא מיטבי עם הריביות הנמוכות ביותר בשוק.
              חיסכון של עשרות אלפי שקלים לאורך חיי ההלוואה.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              >
                <Link to={ROUTE_PATHS.CONTACT}>קבע פגישת ייעוץ</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/30 hover:bg-accent/5"
              >
                <a href={`https://wa.me/${COMPANY_INFO.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 ml-2" />
                  {COMPANY_INFO.contact.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">למה לבחור בייעוץ מקצועי?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              יועץ משכנתאות מנוסה יכול לחסוך לך עשרות אלפי שקלים ולהבטיח את התנאים הטובים ביותר
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-200 hover:scale-[1.02] border-border/50">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img
              src={IMAGES.MORTGAGE_4}
              alt="תהליך משכנתא"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4">חיסכון משמעותי לאורך זמן</h3>
              <p className="text-lg text-muted-foreground max-w-2xl">
                הפרש של 0.5% בריבית על משכנתא של מיליון שקל ל-25 שנה יכול לחסוך לך למעלה מ-70,000 ₪
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4">תהליך העבודה שלנו</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ליווי מקצועי ושקוף בכל שלב, מהפגישה הראשונה ועד לחתימה על ההסכם
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {process.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-200 border-border/50">
                  <div className="text-6xl font-bold text-accent/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src={IMAGES.SUCCESS_1}
                alt="הצלחה פיננסית"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-6">מה כולל השירות?</h2>
              <div className="space-y-4">
                {[
                  "ניתוח מקיף של המצב הפיננסי והצרכים",
                  "בדיקת זכאות והערכת יכולת החזר",
                  "איסוף והשוואת הצעות מכל הבנקים",
                  "בניית תמהיל משכנתא אופטימלי",
                  "ניהול משא ומתן מקצועי עם הבנקים",
                  "ליווי בהכנת מסמכים ואישורים",
                  "ליווי צמוד עד לחתימה על ההסכם",
                  "ייעוץ לגבי ביטוחים נלווים",
                  "תמיכה גם לאחר קבלת המשכנתא",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              קבעו פגישת ייעוץ ללא התחייבות ונתחיל לעבוד על המשכנתא האידיאלית עבורכם
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
              >
                <Link to={ROUTE_PATHS.CONTACT}>צור קשר עכשיו</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/30 hover:bg-accent/5"
              >
                <a href={`tel:${COMPANY_INFO.contact.phone}`}>
                  <Phone className="w-4 h-4 ml-2" />
                  התקשר עכשיו
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}