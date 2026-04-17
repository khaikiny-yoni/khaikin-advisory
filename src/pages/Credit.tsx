import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IMAGES } from "@/assets/images";
import { ROUTE_PATHS } from "@/lib/index";
import { CheckCircle2, AlertCircle, TrendingUp, Clock, Shield, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 400, damping: 30 },
};

const solutions = [
  {
    title: "הלוואות חוץ בנקאיות",
    description: "פתרונות אשראי גמישים ממוסדות פיננסיים מורשים",
    icon: TrendingUp,
    features: [
      "אישור מהיר תוך 24-48 שעות",
      "דרישות פשוטות יותר מבנקים",
      "גמישות בתנאי ההחזר",
      "מתאים לעסקים ופרטיים",
    ],
  },
  {
    title: "מימון לעסקים",
    description: "פתרונות מימון מותאמים לצרכי העסק שלך",
    icon: Shield,
    features: [
      "מימון לרכישת ציוד ומלאי",
      "הלוואות גישור לתזרים מזומנים",
      "מימון לפרויקטים מיוחדים",
      "ליווי צמוד לאורך כל התהליך",
    ],
  },
  {
    title: "פתרונות חוב",
    description: "איחוד חובות ומחזור אשראי",
    icon: FileText,
    features: [
      "איחוד כל החובות להלוואה אחת",
      "הפחתת תשלום חודשי",
      "שיפור מצב האשראי",
      "תכנית החזר מותאמת אישית",
    ],
  },
];

const whenToConsider = [
  {
    title: "דחייה בנקאית",
    description: "כאשר הבנק דחה את בקשתך להלוואה או משכנתא",
    icon: AlertCircle,
  },
  {
    title: "צורך דחוף במימון",
    description: "כאשר אתה זקוק למימון מהיר ולא יכול לחכות לתהליך בנקאי ארוך",
    icon: Clock,
  },
  {
    title: "מצב אשראי מורכב",
    description: "כאשר יש לך היסטוריית אשראי לא מושלמת או חובות קיימים",
    icon: TrendingUp,
  },
  {
    title: "עסק חדש",
    description: "כאשר העסק שלך חדש ואין לך עדיין היסטוריה פיננסית מספקת",
    icon: Shield,
  },
];

const advantages = [
  "תהליך אישור מהיר ופשוט",
  "דרישות גמישות יותר",
  "פתרונות מותאמים אישית",
  "ליווי אישי לאורך כל התהליך",
  "אפשרות למימון גם במצבים מורכבים",
];

const disadvantages = [
  "ריבית גבוהה יותר מהלוואות בנקאיות",
  "תקופת החזר קצרה יותר בדרך כלל",
  "דרישה לבטוחות במקרים מסוימים",
  "חשוב לבחור מוסד מורשה ואמין",
];

const processSteps = [
  {
    step: "1",
    title: "פגישת ייעוץ ראשונית",
    description: "ניתוח מצבך הפיננסי והבנת הצרכים שלך",
  },
  {
    step: "2",
    title: "בחירת הפתרון המתאים",
    description: "מציאת המוסד והמסלול האופטימליים עבורך",
  },
  {
    step: "3",
    title: "הגשת הבקשה",
    description: "ליווי בהכנת המסמכים והגשת הבקשה",
  },
  {
    step: "4",
    title: "אישור ומימוש",
    description: "קבלת האישור וקבלת הכסף לחשבון",
  },
];

export default function Credit() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.STREET_HANDSHAKE}
            alt="פתרונות אשראי"
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center 60%' }}
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
            <Badge className="mb-6 text-base px-6 py-2">
              פתרונות אשראי חוץ בנקאיים
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent">
              פתרונות מימון אלטרנטיביים
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              כאשר הבנקים אומרים "לא", אנחנו מוצאים את ה"כן". פתרונות אשראי גמישים ומהירים
              ממוסדות פיננסיים מורשים, מותאמים למצבך הייחודי
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to={ROUTE_PATHS.CONTACT}>קבע פגישת ייעוץ</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a href={`https://wa.me/972547295318`} target="_blank" rel="noopener noreferrer">
                  <Phone className="ml-2 h-5 w-5" />
                  054-7295318
                </a>
              </Button>
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
            <h2 className="text-4xl font-bold mb-4">סוגי פתרונות זמינים</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              מגוון רחב של פתרונות מימון המותאמים לצרכים שונים
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl">{solution.title}</CardTitle>
                      <CardDescription className="text-base">
                        {solution.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4">מתי כדאי לשקול אשראי חוץ בנקאי?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                מצבים בהם פתרונות אשראי אלטרנטיביים יכולים להיות הפתרון המתאים
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {whenToConsider.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                            <CardDescription className="text-base">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <img
                  src={IMAGES.BUSINESS_DEAL_7}
                  alt="יתרונות וחסרונות"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </motion.div>

              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <h2 className="text-4xl font-bold mb-8">יתרונות וחסרונות</h2>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    יתרונות
                  </h3>
                  <ul className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <motion.li
                        key={index}
                        variants={staggerItem}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{advantage}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-destructive flex items-center gap-2">
                    <AlertCircle className="h-6 w-6" />
                    נקודות לתשומת לב
                  </h3>
                  <ul className="space-y-3">
                    {disadvantages.map((disadvantage, index) => (
                      <motion.li
                        key={index}
                        variants={staggerItem}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                        <span>{disadvantage}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-4">תהליך קבלת האשראי</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ארבעה שלבים פשוטים לקבלת המימון שאתה צריך
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {processSteps.map((step, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={IMAGES.SUCCESS_8}
                    alt="התחל עכשיו"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                </div>

                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">
                    מוכן למצוא את הפתרון המתאים?
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    קבע פגישת ייעוץ חינם ונבדוק יחד מה הפתרון האופטימלי עבורך. אנחנו כאן כדי
                    לעזור לך למצוא את הדרך הטובה ביותר לקבל את המימון שאתה צריך.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="flex-1">
                      <Link to={ROUTE_PATHS.CONTACT}>קבע פגישה</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="flex-1">
                      <a
                        href={`https://wa.me/972547295318`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="ml-2 h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
