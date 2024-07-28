import NavHeader from "./_components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black min-h-screen">
      <NavHeader />
      {children}
    </div>
  );
}
