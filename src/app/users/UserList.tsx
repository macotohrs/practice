type User = {
  id: string;
  name: string;
  email: string;
};

const UserList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch('http://localhost:3000/api'); // Route handlerを経由してデータの取得
  // const response = await fetch("https://jsonplaceholder.typicode.com/users"); // jsonplaceholderから直にfetch
  // const response = await fetch('https://jsonplaceholder.typicode.com/userXXXX'); // エラーメッセージを出現させるためのダミー
  if (!response.ok) throw new Error('Failed to fetch data');
  const users: User[] = await response.json();
  console.log("💚", users)
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
