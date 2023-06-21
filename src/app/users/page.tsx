import UserList from "./UserList";
import OtherUserList from "./OtherUserList";
import { Suspense } from "react";
import Image from "next/image";

const Page = async () => {
  // Suspenseを使用する場合は、Suspenseで囲った内容がloadingされる(以下の場合<h1>は表示される)
  return (
    <div className="m-4">
      <h1 className="text-lg font-bold">User List</h1>
      <>
        <Suspense fallback={<p>Loading OtherUserList...</p>}>
          <OtherUserList />
        </Suspense>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen font-bold">
              {/* <Image
              src="/mark_arrow_reload.png"
              alt="loading"
              width={180}
              height={180}
              className="rotating-image"
            /> */}
              <div className="ml-2">Loading...</div>
            </div>
          }
        >
          <UserList />
        </Suspense>
      </>
    </div>
  );
};

export default Page;
