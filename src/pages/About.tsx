import { motion } from 'framer-motion';
import { advisorInfo } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { CheckCircle2, Award, TrendingUp, Users, Calendar } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              אודות יהונתן חייקין
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {advisorInfo.title} | {advisorInfo.experience}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.ADVISOR_PORTRAIT_PROFESSIONAL}
                  alt={advisorInfo.name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-8 bg-card rounded-2xl border border-border shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-semibold text-foreground">הישגים מרכזיים</h3>
                </div>
                <ul className="space-y-3">
                  {advisorInfo.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-accent" />
                  <h2 className="text-3xl font-bold text-foreground">המסלול המקצועי</h2>
                </div>
                <div className="space-y-6">
                  {advisorInfo.timeline && advisorInfo.timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="flex-shrink-0 w-24 pt-1">
                        <span className="text-lg font-bold text-accent">{item.year}</span>
                      </div>
                      <div className="flex-1">
                        <div className="h-full border-r-2 border-accent/30 pr-4">
                          <p className="text-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mt-8 pt-6 border-t border-border">
                  החלטתי להקים את KHAIKIN - Private Advisory מתוך רצון לספק שירות אישי ומקצועי ללקוחות פרטיים ועסקיים. 
                  לאחר שנים רבות בבנקאות, הבנתי שלקוחות זקוקים ליועץ שעובד עבורם ולא עבור הבנק - מישהו שיכיר את כל 
                  האפשרויות בשוק וימצא את הפתרון המיטבי עבורם.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <h2 className="text-3xl font-bold text-foreground">תחומי התמחות</h2>
                </div>
                <div className="space-y-4">
                  {advisorInfo.specialties.map((specialty, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-lg font-medium text-foreground">{specialty}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-6">הפילוסופיה שלי</h2>
                <p className="text-lg text-foreground leading-relaxed italic">
                  "{advisorInfo.philosophy}"
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <h2 className="text-3xl font-bold text-foreground mb-6">ערכי החברה</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      שקיפות מלאה
                    </h3>
                    <p className="text-muted-foreground pr-4">
                      אני מאמין בעבודה שקופה ללא עמלות נסתרות. הלקוח יודע בדיוק מה הוא משלם ועל מה.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      גישה אישית
                    </h3>
                    <p className="text-muted-foreground pr-4">
                      כל לקוח הוא עולם ומלואו. אני מקדיש זמן להבין את הצרכים הייחודיים ומתאים פתרון אישי.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      מחויבות לתוצאות
                    </h3>
                    <p className="text-muted-foreground pr-4">
                      המטרה שלי היא לא רק לייעץ אלא להשיג תוצאות מדידות - חיסכון אמיתי, יציבות כלכלית, שקט נפשי.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      זמינות ותמיכה
                    </h3>
                    <p className="text-muted-foreground pr-4">
                      אני זמין ללקוחות שלי גם אחרי סגירת העסקה. ליווי מתמשך ותמיכה בכל שאלה או בעיה.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gradient-to-b from-background to-primary/5"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            בואו נדבר על המצב הפיננסי שלכם
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            פגישת ייעוץ ראשונית ללא התחייבות. בואו נבין ביחד מה האפשרויות שלכם.
          </p>
          <motion.a
            href="https://wa.me/972547295318"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            צרו קשר עכשיו
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}