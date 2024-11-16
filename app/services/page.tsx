"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Passport, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const services = [
  {
    title: 'Tour Packages',
    description: 'International travel packages to Dubai, Sharm El Sheikh, Maldives, and more',
    icon: Plane,
    href: '/services/outgoing-packages',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05'
  },
  {
    title: 'Flight Tickets',
    description: 'Book your flights with our professional assistance',
    icon: Plane,
    href: '/services/air-tickets',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05'
  },
  {
    title: 'Visa Services',
    description: 'USA and Schengen tourist visa assistance',
    icon: Passport,
    href: '/services/visa-assistance',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c'
  }
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Our Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative container mx-auto px-4 text-center text-white"
        >
          <h1 className="text-4xl font-bold mb-4">{t('services.title')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <service.icon className="h-5 w-5" />
                      {t(`services.${service.title.toLowerCase()}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t(`services.${service.title.toLowerCase()}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}