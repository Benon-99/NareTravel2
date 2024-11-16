"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users2, Award, Clock, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users2,
    value: '5000+',
    label: 'Happy Travelers'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Customer Support'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Destinations'
  }
];

const teamMembers = [
  {
    name: 'Anna Harutyunyan',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e'
  },
  {
    name: 'David Sargsyan',
    role: 'Travel Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
  {
    name: 'Maria Gevorgyan',
    role: 'Visa Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
  }
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

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1589307357824-96e63ff87e33"
          alt="About Nare Travel"
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
          <h1 className="text-4xl font-bold mb-4">About Nare Travel</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in travel since 2014
          </p>
        </motion.div>
      </section>

      <section className="container py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2014, Nare Travel has grown from a small local agency to one of Armenia's leading travel companies. Our journey began with a simple mission: to provide exceptional travel experiences while showcasing the beauty of Armenia to the world.
            </p>
            <p className="text-muted-foreground">
              Today, we offer comprehensive travel services including international packages, visa assistance, and specialized B2B solutions. Our team of experienced professionals is dedicated to making every journey memorable.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1589307357824-96e63ff87e33"
              alt="Armenia Landscape"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-muted/50 py-12">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants}>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-2xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals behind Nare Travel
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card>
                <CardContent className="pt-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="max-w-2xl mx-auto">
              To provide exceptional travel experiences while promoting cultural understanding and creating lasting memories for our clients. We strive to maintain the highest standards of service and professionalism in everything we do.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}