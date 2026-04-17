import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Home, Users, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Service, Testimonial } from "@/lib/index";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/10">
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            {service.icon === 'home' && <Home className="w-8 h-8 text-white" />}
            {service.icon === 'users' && <Users className="w-8 h-8 text-white" />}
            {service.icon === 'credit-card' && <CreditCard className="w-8 h-8 text-white" />}
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            {service.title}
          </CardTitle>
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Link to={service.path} className="flex items-center justify-center gap-2">
              <span>למידע נוסף</span>
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent/20 shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${
                  index < testimonial.rating
                    ? "fill-accent text-accent"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <blockquote className="text-muted-foreground leading-relaxed italic relative">
            <span className="text-4xl text-accent/30 absolute -top-2 -right-2">״</span>
            <p className="relative z-10">{testimonial.content}</p>
            <span className="text-4xl text-accent/30 absolute -bottom-6 -left-2">״</span>
          </blockquote>
        </CardContent>
      </Card>
    </motion.div>
  );
}