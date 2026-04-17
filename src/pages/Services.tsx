import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Users, CreditCard, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/index';
import { ROUTE_PATHS } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const iconMap = {
  home: Home,
  users: Users,
  'credit-card': CreditCard,
};

const springPresets = {
  gentle: { type: 'spring' as const, stiffness: 300, damping: 35 },
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
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGES.MODERN_OFFICE_RECEPTION})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-primary/10" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            השירותים שלנו
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            פתרונות פיננסיים מקיפים המותאמים אישית לצרכים שלך
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={staggerItem} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              שלושה תחומי התמחות מרכזיים
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              אנו מתמחים בשלושה תחומים עיקריים בעולם הפיננסים, ומספקים ליווי מקצועי
              ואישי לאורך כל התהליך
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div key={service.id} variants={staggerItem}>
                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-border/50 bg-card">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg">
                          {IconComponent && (
                            <IconComponent className="w-10 h-10 text-primary-foreground" />
                          )}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            מה כולל השירות:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-muted-foreground"
                              >
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link to={service.path}>
                          <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                          >
                            למידע נוסף על {service.title}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-border/30"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              לא בטוח איזה שירות מתאים לך?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              צור איתנו קשר לייעוץ ראשוני ללא התחייבות. נשמח לעזור לך למצוא את הפתרון
              הפיננסי המושלם עבורך
            </p>
            <Link to={ROUTE_PATHS.CONTACT}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                צור קשר עכשיו
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Link
              to={ROUTE_PATHS.HOME}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>חזרה לדף הבית</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
