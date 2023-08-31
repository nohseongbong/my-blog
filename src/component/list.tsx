type Props = {
  list: string[];
};

export default function List({ list }: Props) {
  console.log(list, ": list");
  return (
    <div>
      {/* {list.map((text, index) => {
        return <span key={index}>{text}</span>;
      })} */}
    </div>
  );
}
