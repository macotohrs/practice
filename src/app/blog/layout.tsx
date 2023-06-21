export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-4 font-bold">
      {children}
    </div>
  );
}
