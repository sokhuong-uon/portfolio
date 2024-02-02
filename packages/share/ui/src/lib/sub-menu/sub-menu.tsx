import { SubMenuCard } from '../sub-menu-card/sub-menu-card';

export function SubMenu() {
  const items = [
    {
      title: 'HTML',
    },
    {
      title: 'WebGL',
    },
    {
      title: 'Design',
    },
  ];

  return (
    <ul className="flex gap-2 text-white bg-black w-fit">
      {items.map((item, index) => (
        <li key={index}>
          <SubMenuCard title={item.title}></SubMenuCard>
        </li>
      ))}
    </ul>
  );
}
