'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../../components/navigation-menu';
import { Button } from '../button/button';

export function NavigationBar() {
  const menu = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Work',
      url: '/work',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Sketch',
      url: '/sketch',
    },
  ];

  return (
    <div className="px-12 bg-black">
      <div className="flex items-center justify-end p-2">
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item) => (
              <NavigationMenuItem key={item.url}>
                <Button variant="link" dark className="text-base" asChild>
                  <Link href={item.url}>{item.name}</Link>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default NavigationBar;
