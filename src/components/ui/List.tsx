import Image from "next/image";

const List = ({ list }: { list: string[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {list.map((item) => (
        <Image
          src={`/images/icons/${item}.svg`}
          width={100}
          height={100}
          alt={`${item} logo`}
          className="h-12 w-12 rounded-xl"
        />
      ))}
    </div>
  );
};

export default List;
