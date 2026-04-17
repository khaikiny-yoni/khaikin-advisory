import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Target, CheckCircle, Users, Calculator, LineChart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ROUTE_PATHS } from "@/lib/index";
import { IMAGES } from "@/assets/images";

const springPresets = {
  gentle: { type: "spring" as const, stiffness: 300, damping: 35 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const processSteps = [
  {
    icon: Users,
    title: "פגישת היכרות",
    description: "ניתוח מצב כלכלי נוכחי והבנת צרכי המשפחה",
  },
  {
    icon: Calculator,
    title: "בניית תקציב",
    description: "יצירת תקציב מותאם אישית המתאים לאורח החיים שלכם",
  },
  {
    icon: Target,
    title: "הגדרת יעדים",
    description: "קביעת יעדים פיננסיים ברורים וניתנים להשגה",
  },
  {
    icon: LineChart,
    title: "מעקב והתאמה",
    description: "ליווי שוטף והתאמת התוכנית לפי התקדמות",
  },
];

const benefits = [
  "שליטה מלאה בהוצאות המשפחה",
  "מעבר ממינוס לפלוס תוך זמן קצר",
  "בניית קרן חירום למקרי חירום",
  "תכנון פיננסי לטווח ארוך",
  "הפחתת לחץ כלכלי במשפחה",
  "השגת יעדים פיננסיים",
];

const tools = [
  {
    title: "מערכת תקצוב חכמה",
    description: "כלים דיגיטליים למעקב אחר הכנסות והוצאות",
  },
  {
    title: "אסטרטגיות חיסכון",
    description: "טכניקות מוכחות להגדלת החיסכון החודשי",
  },
  {
    title: "ניהול חובות",
    description: "תוכנית מסודרת לסגירת חובות בצורה יעילה",
  },
  {
    title: "תכנון השקעות",
    description: "הכוונה להשקעות חכמות לעתיד המשפחה",
  },
];

const successStories = [
  {
    title: "משפחת ראובני",
    before: "מינוס של 15,000 ₪ בחשבון",
    after: "חיסכון של 50,000 ₪ תוך שנה",
    quote: "יהונתן עזר לנו להבין לאן הכסף הולך ולבנות תקציב שעובד",
  },
  {
    title: "משפחת אוחנה",
    before: "חובות של 80,000 ₪",
    after: "סגירת כל החובות תוך שנתיים",
    quote: "הייעוץ שינה לנו את החיים, סוף סוף אנחנו שולטים בכסף שלנו",
  },
];

export default function FamilyFinance() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.FAMILY_FINANCE_2}
            alt="ייעוץ כלכלי למשפחות"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto text-center"
          >
            <Link to={ROUTE_PATHS.SERVICES}>
              <Button variant="ghost" className="mb-6 gap-2">
                <ArrowLeft className="w-4 h-4" />
                חזרה לשירותים
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent">
              ייעוץ לכלכלת המשפחה
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              מעבר ממינוס לפלוס - בניית תקציב משפחתי חכם ושליטה מלאה בכסף שלכם
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={staggerItem} transition={springPresets.gentle}>
              <h2 className="text-3xl font-bold mb-6 text-center">למה ייעוץ כלכלי למשפחה?</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                רבות ממשפחות בישראל מתמודדות עם אתגרים כלכליים: מינוסים בחשבון, חובות מצטברים, קושי לחסוך, ותחושת חוסר שליטה בכסף. ייעוץ כלכלי מקצועי יכול לשנות את המציאות הזו לחלוטין.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} transition={springPresets.gentle}>
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-accent" />
                        היתרונות
                      </h3>
                      <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative">
                      <img
                        src={IMAGES.FAMILY_FINANCE_3}
                        alt="משפחה מאושרת"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={staggerItem}
              transition={springPresets.gentle}
              className="text-3xl font-bold mb-12 text-center"
            >
              תהליך הייעוץ
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    transition={springPresets.gentle}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-200">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-accent" />
                        </div>
                        <div className="text-sm font-semibold text-accent mb-2">
                          שלב {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={staggerItem}
              transition={springPresets.gentle}
              className="text-3xl font-bold mb-12 text-center"
            >
              כלים וטכניקות
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  transition={springPresets.gentle}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={staggerItem}
              transition={springPresets.gentle}
              className="text-3xl font-bold mb-12 text-center"
            >
              סיפורי הצלחה
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  transition={springPresets.gentle}
                >
                  <Card className="h-full overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <img
                          src={IMAGES.SUCCESS_7}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-4">{story.title}</h3>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-destructive font-medium">לפני:</span>
                            <span className="text-muted-foreground">{story.before}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-accent font-medium">אחרי:</span>
                            <span className="text-muted-foreground">{story.after}</span>
                          </div>
                        </div>
                        <blockquote className="border-r-4 border-accent pr-4 italic text-muted-foreground">
                          "{story.quote}"
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-l from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">מוכנים לשנות את המציאות הכלכלית שלכם?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              קבעו פגישת ייעוץ ראשונית ללא התחייבות ונתחיל לבנות את העתיד הפיננסי של המשפחה שלכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTE_PATHS.CONTACT}>
                <Button size="lg" className="gap-2">
                  <Users className="w-5 h-5" />
                  צור קשר לייעוץ
                </Button>
              </Link>
              <a href="https://wa.me/972547295318" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  שלח הודעה ב-WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}