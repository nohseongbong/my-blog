"use client";

type Props = {
  list: string[];
};

export default function List({ list }: Props) {
  return (
    <div>
      {list?.map((text, index) => {
        return <span key={index}>{text}</span>;
      })}
    </div>
  );
}
