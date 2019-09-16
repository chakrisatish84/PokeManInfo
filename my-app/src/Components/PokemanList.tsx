import React from "react";

interface IPokemanListProps {
  pokemanList: string[];
}

const PokemanList: React.FC<IPokemanListProps> = (props: IPokemanListProps) => {
  const { pokemanList } = props;
  return (
    <div>
      {pokemanList.map((p, index) => (
        <div key={index}>{p}</div>
      ))}
    </div>
  );
};

export default PokemanList;
