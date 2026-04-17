import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { springPresets } from "@/lib/motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "השם חייב להכיל לפחות 2 תווים" }),
  email: z.string().email({ message: "כתובת אימייל לא תקינה" }),
  phone: z.string().min(9, { message: "מספר טלפון לא תקין" }),
  message: z.string().min(10, { message: "ההודעה חייבת להכיל לפחות 10 תווים" }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const subject = encodeURIComponent(`פנייה חדשה מהאתר מאת ${data.name}`);
      const body = encodeURIComponent(
        `שם: ${data.name}\n` +
        `אימייל: ${data.email}\n` +
        `טלפון: ${data.phone}\n\n` +
        `הודעה:\n${data.message}`
      );
      window.location.href = `mailto:khaikiny@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      alert('אירעה שגיאה בשליחת ההודעה. אנא נסה שנית.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={springPresets.gentle}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl" />
        <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={springPresets.bouncy}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                ההודעה נשלחה בהצלחה!
              </h3>
              <p className="text-muted-foreground">
                נחזור אליך בהקדם האפשרי
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  שם מלא
                </Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="הזן את שמך המלא"
                  className="bg-background/50 border-border focus:border-accent transition-colors"
                  dir="rtl"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  אימייל
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="example@email.com"
                  className="bg-background/50 border-border focus:border-accent transition-colors"
                  dir="ltr"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  טלפון
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="054-1234567"
                  className="bg-background/50 border-border focus:border-accent transition-colors"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  הודעה
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="ספר לנו כיצד נוכל לעזור לך..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-accent transition-colors resize-none"
                  dir="rtl"
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-l from-accent via-accent/90 to-accent/80 hover:from-accent/90 hover:via-accent/80 hover:to-accent/70 text-accent-foreground font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                    />
                    שולח...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    שלח הודעה
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
