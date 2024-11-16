"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Globe2, MapPin, Users2, Clock, Shield, Briefcase, Plane } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const services = [
  {
    title: 'Ground Handling',
    description: 'Complete ground transportation and logistics management',
    icon: Plane,
  },
  {
    title: 'Hotel Partnerships',
    description: 'Access to premium accommodations across Armenia and Georgia',
    icon: Building2,
  },
  {
    title: 'Local Expertise',
    description: 'In-depth knowledge of destinations and attractions',
    icon: MapPin,
  },
  {
    title: 'Corporate Solutions',
    description: 'Specialized services for business travelers',
    icon: Briefcase,
  },
];

const features = [
  {
    title: '24/7 Support',
    description: 'Round-the-clock assistance for your clients',
    icon: Clock,
  },
  {
    title: 'Global Network',
    description: 'International partnerships and connections',
    icon: Globe2,
  },
  {
    title: 'Professional Team',
    description: 'Experienced multilingual staff',
    icon: Users2,
  },
  {
    title: 'Secure Operations',
    description: 'Licensed and insured services',
    icon: Shield,
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

export default function DMCServices() {
  const { toast } = useToast();

  const handleContact = () => {
    toast({
      title: "Request Received",
      description: "Our DMC team will contact you shortly.",
    });
  };

  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1589307357824-96e63ff87e33"
          alt="DMC Services"
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
          <h1 className="text-4xl font-bold mb-4">DMC Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted Destination Management Company in Armenia and Georgia
          </p>
        </motion.div>
      </section>

      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Core Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive destination management solutions for travel agencies and tour operators
          </p>
        </motion.div>

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
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience excellence in destination management
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
          <h2 className="text-2xl font-bold mb-4">Partner With Us</h2>
          <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
            Join our network of travel partners and provide your clients with exceptional experiences in Armenia and Georgia.
          </p>
          <Button size="lg" onClick={handleContact}>
            Contact DMC Team
          </Button>
        </motion.div>
      </section>
    </div>
  );
}