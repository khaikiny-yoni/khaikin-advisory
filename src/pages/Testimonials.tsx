import { motion } from 'framer-motion';
import { testimonials } from '@/data/index';
import { TestimonialCard } from '@/components/Cards';
import { Quote } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 35,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 35,
    },
  },
};

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Quote className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            המלצות לקוחות
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            מה הלקוחות שלנו אומרים על השירות המקצועי והתוצאות המרשימות
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 35,
            delay: 0.8,
          }}
          className="mt-20 text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              רוצים להצטרף ללקוחות המרוצים שלנו?
            </h2>
            <p className="text-muted-foreground mb-8">
              קבעו פגישת ייעוץ ראשונית ללא התחייבות ותגלו איך אנחנו יכולים לעזור לכם להשיג את היעדים הפיננסיים שלכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972547295318"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                צור קשר עכשיו
              </a>
              <a
                href="tel:054-7295318"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                התקשר: 054-7295318
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
