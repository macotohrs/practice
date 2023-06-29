import { IForm } from "./page";

export const TodoList = (props: {
  text: IForm[];
}) => {
  const { text } = props;
  return (
    <div className="mt-6">
      {text.map((tx, index) => (
        <div key={index}>
          {Object.keys(tx).map((key) => (
            <div key={key}>
              {tx[key] instanceof Date ? (
                <span className="text-gray-300">
                  {new Date(tx[key]).toLocaleTimeString()}
                </span>
              ) : (
                <>
                  <span className="font-bold">{key}: </span>
                  <span>{tx[key].toString()}</span>
                </>
              )}
            </div>
          ))}
          {index !== text.length - 1 && <hr className="m-2" />}
        </div>
      ))}
    </div>
  );
};
