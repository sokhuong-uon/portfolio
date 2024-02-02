export function SubMenuCard(props: { title: string }) {
  return (
    <div className="p-2 text-white bg-black w-fit">
      <div>{props.title}</div>
      <div className="w-32 h-24 bg-gray-600"></div>
    </div>
  );
}
