import { Header } from "./components/layout/Header";

function App() {
  return (
    // Nền đen bao phủ toàn bộ
    <main className="min-h-screen w-full bg-black flex flex-col items-center pt-[3px] overflow-x-hidden">
      {/* Header (Frame 40072) nằm ở đây */}
      <Header />

      {/* Phần nội dung bên dưới (Body) 
          Cũng rộng 1434px, nền trắng, nối tiếp ngay sau Header 
      */}
      <div className="w-[1434px] bg-white flex-1 min-h-[500px]">
        {/* Nội dung demo */}
        <div className="p-10">Banner và các phần khác sẽ code ở đây...</div>
      </div>
    </main>
  );
}

export default App;
