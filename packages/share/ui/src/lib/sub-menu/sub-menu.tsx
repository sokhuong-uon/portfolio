import { SubMenuCard } from '../sub-menu-card/sub-menu-card';

export function SubMenu() {
  return (
    <ul className="flex gap-4 text-white bg-black w-fit">
      <li>
        <SubMenuCard></SubMenuCard>
      </li>
      <li>
        <SubMenuCard></SubMenuCard>
      </li>
    </ul>
  );
}
