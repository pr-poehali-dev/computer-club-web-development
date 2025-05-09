const EquipmentSection = () => {
  const computers = [
    { name: "Процессор", spec: "Intel Core i9-13900K" },
    { name: "Видеокарта", spec: "NVIDIA RTX 4080 16GB" },
    { name: "Оперативная память", spec: "32GB DDR5 5200MHz" },
    { name: "Накопитель", spec: "2TB NVMe SSD" },
    { name: "Охлаждение", spec: "Жидкостное" },
  ];

  const peripherals = [
    { name: "Мониторы", spec: "240Hz ASUS ROG Swift" },
    { name: "Клавиатуры", spec: "Logitech G Pro X" },
    { name: "Мыши", spec: "Razer Viper V2 Pro" },
    { name: "Гарнитуры", spec: "HyperX Cloud Alpha" },
    { name: "Кресла", spec: "DXRacer Formula" },
  ];

  return (
    <section id="equipment" className="py-16 px-4 md:px-8 bg-[#15191f]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Наше оборудование
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Только лучшее для комфортной игры
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#9b87f5]">Компьютеры</h3>
          <div className="space-y-6">
            {computers.map((item, index) => (
              <div
                key={index}
                className="flex justify-between pb-2 border-b border-gray-700"
              >
                <span className="text-white">{item.name}</span>
                <span className="font-medium text-white">{item.spec}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-[#9b87f5]">Периферия</h3>
          <div className="space-y-6">
            {peripherals.map((item, index) => (
              <div
                key={index}
                className="flex justify-between pb-2 border-b border-gray-700"
              >
                <span className="text-white">{item.name}</span>
                <span className="font-medium text-white">{item.spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
