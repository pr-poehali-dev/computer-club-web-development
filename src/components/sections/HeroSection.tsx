
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Киберспорт. Игры. Сообщество.
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          CyberArena — лучший компьютерный клуб с современным оборудованием, 
          турнирами и атмосферой настоящего киберспорта.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8a76e4] text-white">
            Забронировать место
          </Button>
          <Button size="lg" variant="outline" className="border-[#9b87f5] text-[#9b87f5]">
            О клубе
          </Button>
        </div>
      </div>
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Gaming Setup" 
          className="rounded-xl w-full max-w-xl object-cover h-[400px]"
        />
        <div className="absolute -bottom-4 -right-4 bg-[#9b87f5] p-3 rounded-lg">
          <div className="text-xl font-bold">24/7</div>
          <div className="text-sm">Работаем круглосуточно</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
