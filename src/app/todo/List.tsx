import { IData } from "./page";

export const List = (props: {
  list: IData[];
  onClickList?: (li: IData) => void;
}) => {
  const { list, onClickList } = props;
  return (
    <div>
      <ul className="list bg-pink-100 p-3 h-52 overflow-y-auto w-40">
        {list.map((li) => (
          <li
            key={li.id}
            className={`flex space-x-2 text-gray-400 hover:bg-pink-200 ${
              li.isClicked && onClickList &&  " text-red-500 "
            }`}
            onClick={() => onClickList && onClickList(li)}
          >
            <span>{li.id}</span>
            <span>{li.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
