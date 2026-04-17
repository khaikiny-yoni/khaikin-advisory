import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS, COMPANY_INFO } from '@/lib/index';
import { services, advisorInfo } from '@/data/index';
import { ServiceCard } from '@/components/Cards';
import { IMAGES } from '@/assets/images';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 300, damping: 35 },
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
  transition: { type: 'spring', stiffness: 400, damping: 30 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.CITY_DUSK_TRAFFIC_6}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-l from-primary via-accent to-primary bg-clip-text text-transparent"
              variants={staggerItem}
            >
              {COMPANY_INFO.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-accent font-semibold mb-8"
              variants={staggerItem}
            >
              {COMPANY_INFO.slogan}
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              variants={staggerItem}
            >
              ייעוץ פיננסי מקצועי בשלושה תחומים מרכזיים: משכנתאות, כלכלת המשפחה,
              ופתרונות אשראי. ניסיון של מעל 20 שנה בשירותכם.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={staggerItem}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link to={ROUTE_PATHS.CONTACT}>
                  <Phone className="ml-2 h-5 w-5" />
                  צור קשר עכשיו
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
              >
                <Link to={ROUTE_PATHS.SERVICES}>
                  <ArrowLeft className="ml-2 h-5 w-5" />
                  גלה את השירותים
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              תחומי ההתמחות שלנו
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              שלושה תחומים מרכזיים בהם אנו מספקים ייעוץ מקצועי ופתרונות מותאמים
              אישית
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerItem}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.MORTGAGE_2}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                  פגוש את {advisorInfo.name}
                </h2>
                <p className="text-xl text-accent font-semibold mb-4">
                  {advisorInfo.title}
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {advisorInfo.experience} | {advisorInfo.background}
                </p>
                <p className="text-base text-foreground mb-8 leading-relaxed">
                  {advisorInfo.philosophy}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Link to={ROUTE_PATHS.ABOUT}>
                    <ArrowLeft className="ml-2 h-5 w-5" />
                    קרא עוד אודותיי
                  </Link>
                </Button>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform rotate-3" />
                  <img
                    src={advisorInfo.image}
                    alt={advisorInfo.name}
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              מוכנים לשנות את המצב הפיננסי שלכם?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              בואו נדבר על המצב שלכם ונמצא את הפתרון המתאים ביותר. ייעוץ ראשוני
              ללא התחייבות.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <motion.a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center justify-center gap-3 p-6 bg-card rounded-2xl border-2 border-border hover:border-accent transition-all hover:scale-105 shadow-lg"
                whileHover={{ y: -4 }}
              >
                <Phone className="h-6 w-6 text-accent" />
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">התקשר עכשיו</p>
                  <p className="text-lg font-semibold text-foreground">
                    {COMPANY_INFO.contact.phone}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center justify-center gap-3 p-6 bg-card rounded-2xl border-2 border-border hover:border-accent transition-all hover:scale-105 shadow-lg"
                whileHover={{ y: -4 }}
              >
                <Mail className="h-6 w-6 text-accent" />
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">שלח אימייל</p>
                  <p className="text-lg font-semibold text-foreground">
                    {COMPANY_INFO.contact.email}
                  </p>
                </div>
              </motion.a>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-12 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to={ROUTE_PATHS.CONTACT}>
                <ArrowLeft className="ml-2 h-5 w-5" />
                מלא טופס יצירת קשר
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.BUSINESS_DEAL_3}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          >
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
                <p className="text-4xl font-bold text-accent mb-2">20+</p>
                <p className="text-sm text-muted-foreground">שנות ניסיון</p>
              </div>
              <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-sm text-muted-foreground">לקוחות מרוצים</p>
              </div>
              <div className="p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border shadow-lg">
                <p className="text-4xl font-bold text-accent mb-2">100%</p>
                <p className="text-sm text-muted-foreground">מחויבות להצלחה</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}