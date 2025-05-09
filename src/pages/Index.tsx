
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Navbar */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-8 bg-[#15191f]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            CyberArena предлагает лучшие условия для игр и киберспорта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#1A1F2C] border-[#2A2F3C] shadow-xl">
            <CardContent className="p-6">
              <div className="bg-[#9b87f5]/10 p-3 rounded-lg w-fit mb-4">
                <Icon name="Monitor" className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Мощные компьютеры</h3>
              <p className="text-gray-400">
                RTX 4080, процессоры Intel Core i9, 32GB RAM, 240Hz мониторы для максимальной производительности.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C] shadow-xl">
            <CardContent className="p-6">
              <div className="bg-[#9b87f5]/10 p-3 rounded-lg w-fit mb-4">
                <Icon name="Wifi" className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрый интернет</h3>
              <p className="text-gray-400">
                Стабильное подключение 1 Гбит/с для игр без задержек и лагов.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1F2C] border-[#2A2F3C] shadow-xl">
            <CardContent className="p-6">
              <div className="bg-[#9b87f5]/10 p-3 rounded-lg w-fit mb-4">
                <Icon name="Trophy" className="w-6 h-6 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Турниры</h3>
              <p className="text-gray-400">
                Регулярные соревнования по популярным дисциплинам с призовыми фондами.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
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
            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-[#9b87f5]">Будни день</h3>
                <div className="text-3xl font-bold mb-2">120₽<span className="text-lg text-gray-400">/час</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>с 10:00 до 18:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Все игры включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Базовые места</span>
                  </li>
                </ul>
                <Button className="w-full">Забронировать</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2C] border-[#2A2F3C] relative">
              <div className="absolute top-0 right-0 bg-[#9b87f5] text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Популярно
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-[#9b87f5]">Будни вечер</h3>
                <div className="text-3xl font-bold mb-2">160₽<span className="text-lg text-gray-400">/час</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>с 18:00 до 10:00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Все игры включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Базовые места</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">Забронировать</Button>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 text-[#9b87f5]">Выходные</h3>
                <div className="text-3xl font-bold mb-2">180₽<span className="text-lg text-gray-400">/час</span></div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Круглосуточно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Все игры включены</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-5 h-5 text-green-500" />
                    <span>Базовые места</span>
                  </li>
                </ul>
                <Button className="w-full">Забронировать</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="vip">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-[#9b87f5]">VIP Зона</h3>
                  <div className="text-3xl font-bold mb-2">250₽<span className="text-lg text-gray-400">/час</span></div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span>Повышенная комфортность</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span>Премиум оборудование</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span>Напитки в комплекте</span>
                    </li>
                  </ul>
                  <Button className="w-full">Забронировать</Button>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1F2C] border-[#2A2F3C]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-[#9b87f5]">Буткемп</h3>
                  <div className="text-3xl font-bold mb-2">1500₽<span className="text-lg text-gray-400">/час</span></div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span>5 компьютеров</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span>Изолированная комната</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span>Идеально для команд</span>
                    </li>
                  </ul>
                  <Button className="w-full">Забронировать</Button>
                </CardContent>
              </Card>
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

      {/* Equipment Section */}
      <section id="equipment" className="py-16 px-4 md:px-8 bg-[#15191f]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше оборудование</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Только лучшее для комфортной игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#9b87f5]">Компьютеры</h3>
            <div className="space-y-6">
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Процессор</span>
                <span className="font-medium">Intel Core i9-13900K</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Видеокарта</span>
                <span className="font-medium">NVIDIA RTX 4080 16GB</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Оперативная память</span>
                <span className="font-medium">32GB DDR5 5200MHz</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Накопитель</span>
                <span className="font-medium">2TB NVMe SSD</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Охлаждение</span>
                <span className="font-medium">Жидкостное</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#9b87f5]">Периферия</h3>
            <div className="space-y-6">
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Мониторы</span>
                <span className="font-medium">240Hz ASUS ROG Swift</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Клавиатуры</span>
                <span className="font-medium">Logitech G Pro X</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Мыши</span>
                <span className="font-medium">Razer Viper V2 Pro</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Гарнитуры</span>
                <span className="font-medium">HyperX Cloud Alpha</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-700">
                <span>Кресла</span>
                <span className="font-medium">DXRacer Formula</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Галерея клуба</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Взгляните на атмосферу нашего клуба
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Gaming Setup" 
            className="rounded-lg h-64 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1598550473359-070ea7c30d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Gaming Area" 
            className="rounded-lg h-64 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Gaming Tournament" 
            className="rounded-lg h-64 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="VIP Area" 
            className="rounded-lg h-64 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Gaming Room" 
            className="rounded-lg h-64 w-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Gaming Atmosphere" 
            className="rounded-lg h-64 w-full object-cover"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-[#15191f]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования или вопросов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6">Информация</h3>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Icon name="MapPin" className="text-[#9b87f5] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-gray-400">ул. Киберспортивная, 42, г. Москва</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="Phone" className="text-[#9b87f5] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="Mail" className="text-[#9b87f5] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400">info@cyberarena.ru</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Icon name="Clock" className="text-[#9b87f5] w-6 h-6 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Режим работы</h4>
                  <p className="text-gray-400">Круглосуточно, 7 дней в неделю</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Написать нам</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-2 rounded bg-[#1A1F2C] border border-[#2A2F3C] focus:outline-none focus:border-[#9b87f5]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 rounded bg-[#1A1F2C] border border-[#2A2F3C] focus:outline-none focus:border-[#9b87f5]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Сообщение</label>
                <textarea 
                  rows={4}
                  className="w-full p-2 rounded bg-[#1A1F2C] border border-[#2A2F3C] focus:outline-none focus:border-[#9b87f5]"
                ></textarea>
              </div>
              <Button className="w-full bg-[#9b87f5] hover:bg-[#8a76e4]">
                Отправить сообщение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-[#2A2F3C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#9b87f5] font-bold text-xl">CyberArena</span>
              </div>
              <p className="text-gray-400 text-sm">
                Лучший компьютерный клуб в городе с новейшим оборудованием и комфортной атмосферой.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-[#9b87f5]">Преимущества</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-[#9b87f5]">Тарифы</a></li>
                <li><a href="#equipment" className="text-gray-400 hover:text-[#9b87f5]">Оборудование</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-[#9b87f5]">Галерея</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Игровые зоны</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">VIP-комнаты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Организация турниров</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">День рождения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <Icon name="Youtube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#2A2F3C] mt-8 pt-8 text-center text-sm text-gray-500">
            © 2025 CyberArena. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
