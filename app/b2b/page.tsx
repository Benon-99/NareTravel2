import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users2, CalendarRange, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function B2BPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">B2B Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional travel solutions for businesses and agencies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Building2 className="h-8 w-8 mb-2" />
            <CardTitle>DMC Services</CardTitle>
            <CardDescription>
              Comprehensive Destination Management Company services in Armenia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Local expertise and knowledge</li>
              <li>Ground handling services</li>
              <li>Hotel and venue selection</li>
              <li>Transportation management</li>
              <li>Local activity coordination</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users2 className="h-8 w-8 mb-2" />
            <CardTitle>MICE Solutions</CardTitle>
            <CardDescription>
              Complete MICE event planning and management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Meeting and conference organization</li>
              <li>Incentive travel programs</li>
              <li>Corporate event management</li>
              <li>Exhibition support services</li>
              <li>Team building activities</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted rounded-lg p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <Globe2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Global Network</h3>
            <p className="text-sm text-muted-foreground">
              Connected with partners worldwide
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Dedicated Team</h3>
            <p className="text-sm text-muted-foreground">
              Professional support 24/7
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Building2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Local Expertise</h3>
            <p className="text-sm text-muted-foreground">
              Deep knowledge of Armenia
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CalendarRange className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-semibold mb-2">Quick Response</h3>
            <p className="text-sm text-muted-foreground">
              Fast turnaround on requests
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
        <p className="mb-6 text-muted-foreground">
          Let's discuss how we can support your business needs
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Our B2B Team</Link>
        </Button>
      </div>
    </div>
  );
}