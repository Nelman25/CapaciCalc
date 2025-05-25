import logo from "../assets/capacitorLogo.svg";

export default function Header() {
  return (
    <header className="w-full mx-auto max-w-[1920px] flex items-center text-3xl font-semibold space-x-3 mb-8">
      <img src={logo} alt="CapaciCalc Logo" className="size-12" />
      <div>
        <span className="text-[#5A6B7B]">Capaci</span>
        <span className="text-[#3582C4]">Calc</span>
      </div>
    </header>
  );
}
