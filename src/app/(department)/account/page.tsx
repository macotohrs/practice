const Page = () => {
  return (
    <div >
      <h1 className="text-3xl text-yellow-400">Account</h1>
      <h2>Route Group</h2>
      <h2>(marketing)の直下には複数のディレクトリを配置することができる</h2>
      <p className="font-thin mt-2">
        ()で囲んだディレクトリはルーティングのパスに影響を与えないので <br/>
        (marketing)
        を省いて/accountにアクセスできる
      </p>
      <p>()を使用したディレクトリ内に、pageディレクトリを作成することを Route Groupという</p>
    </div>
  );
};

export default Page;
