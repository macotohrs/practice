const Page = ({
  params,
}: {
  params: { id: string; userId: string; categoryId: string };
}) => {
  console.log(params);
  return (
    <div>
      <h1 className="text-3xl mb-5">BLOG</h1>
      <div> BLOG ID: {params.id} </div>
      <div> USER ID: {params.userId} </div>
      <div> CATEGORY ID: {params.categoryId} </div>
    </div>
  );
};

export default Page;
