type Props = {
  id: string;
  name: string;
};

const UserItem = ({ id, name }: Props) => {
  return (
    <li>
      {id}:{name}
    </li>
  );
};

export default UserItem;
