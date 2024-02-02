// 'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
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
        {/* <div className="flex items-center">
          {menu.map((item, index) => (
            <Link href={item.url}>
              <div
                key={index}
                className="px-4 py-2 text-white uppercase hover:bg-[#2f2f2f] cursor-pointer rounded-sm transition-all duration-300"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div> */}

        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Button variant="link" dark>
                  {item.name}
                </Button>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuTrigger>Sketch</NavigationMenuTrigger>
              <NavigationMenuContent className="py-2">
                {/* <NavigationMenuLink></NavigationMenuLink>
                <NavigationMenuLink>WebGL</NavigationMenuLink>
                <NavigationMenuLink>Design</NavigationMenuLink> */}
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
