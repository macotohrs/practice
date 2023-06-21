import Image from "next/image";

export default function Loading() {
  // loading.tsxを使用する場合は、ページ全体に対してloading.tsxの内容が表示される
  return (
    <div className="flex justify-center items-center h-screen font-bold">
      <Image
        src="/mark_arrow_reload.png"
        alt="loading"
        width={180}
        height={180}
        className="rotating-image"
      />
      <div className="ml-2">Loading...</div>
    </div>
  );
}
