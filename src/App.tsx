import { useState } from "react";

import Header from "./components/Header";
import OperationMode from "./components/OperationMode";
import InputForm from "./components/InputForm";
import Visualization from "./components/Visualization";
import AIChatSection from "./components/AIChatSection";

export default function App() {
  const [operation, setOperation] = useState<string>("charge");

  return (
    <div className="max-w-[1920px] w-full mx-auto p-8">
      <Header />
      <main className="max-w-[1440px] mx-auto grid grid-cols-7 gap-4">
        <div className="flex flex-col col-span-4 gap-4">
          <OperationMode operation={operation} setOperation={setOperation} />
          <InputForm />
          <Visualization />
        </div>
        <AIChatSection />
      </main>
    </div>
  );
}
