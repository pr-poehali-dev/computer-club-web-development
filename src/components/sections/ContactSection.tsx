
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = ({ icon, title, content }: { icon: string; title: string; content: string }) => {
  return (
    <div className="flex gap-3">
      <Icon name={icon} className="text-[#9b87f5] w-6 h-6 flex-shrink-0" />
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const contactDetails = [
    { icon: "MapPin", title: "Адрес", content: "ул. Киберспортивная, 42, г. Москва" },
    { icon: "Phone", title: "Телефон", content: "+7 (999) 123-45-67" },
    { icon: "Mail", title: "Email", content: "info@cyberarena.ru" },
    { icon: "Clock", title: "Режим работы", content: "Круглосуточно, 7 дней в неделю" }
  ];

  return (
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
            {contactDetails.map((item, index) => (
              <ContactInfo 
                key={index}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
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
  );
};

export default ContactSection;
