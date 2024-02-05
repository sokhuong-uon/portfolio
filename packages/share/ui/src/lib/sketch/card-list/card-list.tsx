import { PropsWithChildren } from 'react';

export function SketchCardList(props: PropsWithChildren) {
  return <ul className="flex flex-col gap-2">{props.children}</ul>;
}
