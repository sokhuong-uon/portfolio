import Image from 'next/image';
import Link from 'next/link';

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
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/svg/HomeLogo.svg"
            alt="Logo"
            width={70}
            height={50}
            className="pt-4"
          />
        </Link>

        <div className="flex items-center">
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
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
