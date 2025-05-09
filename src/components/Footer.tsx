
import Icon from "@/components/ui/icon";

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-[#9b87f5]">{text}</a>
  </li>
);

const SocialIcon = ({ name }: { name: string }) => (
  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
    <Icon name={name} className="w-6 h-6" />
  </a>
);

const Footer = () => {
  const navLinks = [
    { href: "#features", text: "Преимущества" },
    { href: "#pricing", text: "Тарифы" },
    { href: "#equipment", text: "Оборудование" },
    { href: "#gallery", text: "Галерея" }
  ];

  const serviceLinks = [
    { href: "#", text: "Игровые зоны" },
    { href: "#", text: "VIP-комнаты" },
    { href: "#", text: "Организация турниров" },
    { href: "#", text: "День рождения" }
  ];

  const socialIcons = ["Instagram", "Facebook", "Twitter", "Youtube"];

  return (
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
              {navLinks.map((link, index) => (
                <FooterLink key={index} href={link.href} text={link.text} />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <FooterLink key={index} href={link.href} text={link.text} />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Соцсети</h4>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} name={icon} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#2A2F3C] mt-8 pt-8 text-center text-sm text-gray-500">
          © 2025 CyberArena. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
