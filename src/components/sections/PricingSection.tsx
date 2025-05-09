
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, period, features, popular = false }: PricingCardProps) => {
  return (
    <Card className={`bg-[#1A1F2C] border-[#2A2F3C] ${popular ? 'relative' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-[#9b87f5] text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Популярно
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4 text-[#9b87f5]">{title}</h3>
        <div className="text-3xl font-bold mb-2">{price}<span className="text-lg text-gray-400">{period}</span></div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Icon name="Check" className="w-5 h-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className={`w-full ${popular ? 'bg-[#9b87f5] hover:bg-[#8a76e4]' : ''}`}>Забронировать</Button>
      </CardContent>
    </Card>
  );
};

const PricingSection = () => {
  const standardPlans = [
    {
      title: "Будни день",
      price: "120₽",
      period: "/час",
      features: ["с 10:00 до 18:00", "Все игры включены", "Базовые места"],
      popular: false
    },
    {
      title: "Будни вечер",
      price: "160₽",
      period: "/час",
      features: ["с 18:00 до 10:00", "Все игры включены", "Базовые места"],
      popular: true
    },
    {
      title: "Выходные",
      price: "180₽",
      period: "/час",
      features: ["Круглосуточно", "Все игры включены", "Базовые места"],
      popular: false
    }
  ];

  const vipPlans = [
    {
      title: "VIP Зона",
      price: "250₽",
      period: "/час",
      features: ["Повышенная комфортность", "Премиум оборудование", "Напитки в комплекте"],
      popular: false
    },
    {
      title: "Буткемп",
      price: "1500₽",
      period: "/час",
      features: ["5 компьютеров", "Изолированная комната", "Идеально для команд"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Тарифы</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Выберите подходящий формат игры в нашем клубе
        </p>
      </div>

      <Tabs defaultValue="standard" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="standard">Стандарт</TabsTrigger>
          <TabsTrigger value="vip">VIP</TabsTrigger>
          <TabsTrigger value="tournament">Турниры</TabsTrigger>
        </TabsList>
        
        <TabsContent value="standard" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standardPlans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              popular={plan.popular}
            />
          ))}
        </TabsContent>
        
        <TabsContent value="vip">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vipPlans.map((plan, index) => (
              <PricingCard 
                key={index}
                title={plan.title}
                price={plan.price}
                period={plan.period}
                features={plan.features}
                popular={plan.popular}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tournament">
          <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-[#9b87f5] text-center">Организация турниров</h3>
              <p className="text-gray-400 text-center mb-6">
                Мы организуем турниры для любых команд и дисциплин. 
                Индивидуальные условия и призовые фонды.
              </p>
              <div className="flex justify-center">
                <Button className="bg-[#9b87f5] hover:bg-[#8a76e4]">
                  Связаться с организатором
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PricingSection;
