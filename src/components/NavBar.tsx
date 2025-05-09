
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <nav className="px-4 py-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[#9b87f5] font-bold text-2xl">CyberArena</span>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <a href="#features" className="hover:text-[#9b87f5] transition-colors">Преимущества</a>
        <a href="#pricing" className="hover:text-[#9b87f5] transition-colors">Тарифы</a>
        <a href="#equipment" className="hover:text-[#9b87f5] transition-colors">Оборудование</a>
        <a href="#gallery" className="hover:text-[#9b87f5] transition-colors">Галерея</a>
        <a href="#contact" className="hover:text-[#9b87f5] transition-colors">Контакты</a>
      </div>
      <Button className="bg-[#9b87f5] hover:bg-[#8a76e4] text-white">
        Забронировать
      </Button>
    </nav>
  );
};

export default NavBar;
