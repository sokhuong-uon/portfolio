'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from '../../components/navigation-menu';
import { Button } from '../button/button';
import { SubMenu } from '../sub-menu/sub-menu';

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
    // {
    //   name: 'Sketch',
    //   url: '/sketch',
    // },
  ];

  return (
    <div className="px-12 bg-black">
      <div className="flex items-center justify-end p-2">
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item) => (
              <NavigationMenuItem key={item.url}>
                <Button variant="link" dark className="text-base">
                  {item.name}
                </Button>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base text-white bg-transparent hover:bg-transparent">
                Sketch
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-3 bg-black ">
                <SubMenu></SubMenu>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

export default NavigationBar;
