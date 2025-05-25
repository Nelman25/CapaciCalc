import Header from "./components/Header";
import OperationMode from "./components/OperationMode";
import InputForm from "./components/InputForm";
import Visualization from "./components/Visualization";
import AIChatSection from "./components/AIChatSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-[1920px] w-full mx-auto p-8">
      <Header />
      <main className="grid max-w-[1440px] grid-cols-5 gap-4 mx-auto">
        <div className="flex flex-col col-span-3 gap-4">
          <Visualization />
          <OperationMode />
          <InputForm />
        </div>
        <AIChatSection />
      </main>
      <Footer />
    </div>
  );
}
