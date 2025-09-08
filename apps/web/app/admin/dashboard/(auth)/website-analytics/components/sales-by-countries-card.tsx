import * as React from 'react';

import { ChevronRight } from 'lucide-react';

import { Button } from '../../../../../../components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../../../../components/ui/card';

// Simple country flag component using emoji
const CountryFlag = ({ code }: { code: string }) => {
  const flagEmoji =
    {
      US: '🇺🇸',
      BR: '🇧🇷',
      IN: '🇮🇳',
      AU: '🇦🇺',
      FR: '🇫🇷',
      GR: '🇬🇷',
    }[code] || '🏳️';

  return (
    <div className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-2xl">
      {flagEmoji}
    </div>
  );
};

export function SalesByCountriesCard() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Sales by Countries</CardTitle>
        <CardDescription>Last 28 days</CardDescription>
        <CardAction className="relative">
          <div className="absolute end-0 top-0">
            <Button variant="outline" size="sm">
              View All <ChevronRight className="size-4" />
            </Button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div className="flex items-center">
            <CountryFlag code="US" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">United states</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+27.4%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$1,999.00</div>
          </div>
          <div className="flex items-center">
            <CountryFlag code="BR" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">Brazil</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+20.1%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center">
            <CountryFlag code="IN" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">India</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-red-600">-5%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$299.00</div>
          </div>
          <div className="flex items-center">
            <CountryFlag code="AU" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">Australia</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+10.9%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$99.00</div>
          </div>
          <div className="flex items-center">
            <CountryFlag code="FR" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">France</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">+2.1%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$39.00</div>
          </div>
          <div className="flex items-center">
            <CountryFlag code="GR" />
            <div className="ml-4 space-y-1">
              <p className="text-sm leading-none font-medium">Greece</p>
              <p className="text-muted-foreground text-sm">
                <span className="text-green-600">-0.1%</span> from last month
              </p>
            </div>
            <div className="ms-auto font-medium">+$30.00</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
