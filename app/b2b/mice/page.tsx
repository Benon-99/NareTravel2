"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users2, Building2, Calendar, Globe2, Presentation, Coffee, MapPin, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    title: 'Meetings',
    description: 'Professional meeting spaces and coordination',
    icon: Users2,
  },
  {
    title: 'Incentives',
    description: 'Rewarding travel programs for teams',
    icon: Trophy,
  },
  {
    title: 'Conferences',
    description: 'Full-scale conference management',
    icon: Presentation,
  },
  {
    title: 'Events',
    description: 'Corporate event planning and execution',
    icon: Calendar,
  },
];

const features = [
  {
    title: 'Venue Selection',
    description: 'Access to premium venues across Armenia',
    icon: Building2,
  },
  {
    title: 'Local Activities',
    description: 'Team building and cultural experiences',
    icon: MapPin,
  },
  {
    title: 'Catering Services',
    description: 'High-quality food and beverage options',
    icon: Coffee,
  },
  {
    title: 'Global Standards',
    description: 'International level service delivery',
    icon: Globe2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function MICEServices() {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Request Received",
      description: "Our MICE team will contact you shortly.",
    });
  };

  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="MICE Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative container text-center text-white"
        >
          <h1 className="text-4xl font-bold mb-4">MICE Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional Meetings, Incentives, Conferences, and Events solutions
          </p>
        </motion.div>
      </section>

      <section className="container py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="text-center h-full">
                <CardHeader>
                  <service.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for successful corporate events
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="text-center h-full">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-muted rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            Let our experienced team help you create an unforgettable corporate event in Armenia. Contact us for a customized proposal.
          </p>
          <Button size="lg" onClick={handleContact}>
            Contact MICE Team
          </Button>
        </motion.div>
      </section>
    </div>
  );
}