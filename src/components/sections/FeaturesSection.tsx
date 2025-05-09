import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <Card className="bg-[#1A1F2C] border-[#2A2F3C] shadow-xl">
      <CardContent className="p-6">
        <div className="bg-[#9b87f5]/10 p-3 rounded-lg w-fit mb-4">
          <Icon name={icon} className="w-6 h-6 text-[#9b87f5]" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: "Monitor",
      title: "Мощные компьютеры",
      description:
        "RTX 4080, процессоры Intel Core i9, 32GB RAM, 240Hz мониторы для максимальной производительности.",
    },
    {
      icon: "Wifi",
      title: "Быстрый интернет",
      description:
        "Стабильное подключение 1 Гбит/с для игр без задержек и лагов.",
    },
    {
      icon: "Trophy",
      title: "Турниры",
      description:
        "Регулярные соревнования по популярным дисциплинам с призовыми фондами.",
    },
  ];

  return (
    <section id="features" className="py-16 px-4 md:px-8 bg-[#15191f]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Наши преимущества
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          CyberArena предлагает лучшие условия для игр и киберспорта
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
