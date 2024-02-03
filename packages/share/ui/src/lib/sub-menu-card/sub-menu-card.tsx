export function SubMenuCard(props: { title: string }) {
  return (
    <div className="p-2 text-white rounded bg-[#2F2F2F] w-fit">
      <div>{props.title}</div>
      <div className="w-32 h-20 bg-gray-600"></div>
    </div>
  );
}
