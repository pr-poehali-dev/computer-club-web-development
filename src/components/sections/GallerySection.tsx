const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gaming Setup",
    },
    {
      src: "https://images.unsplash.com/photo-1598550473359-070ea7c30d43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gaming Area",
    },
    {
      src: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gaming Tournament",
    },
    {
      src: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "VIP Area",
    },
    {
      src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gaming Room",
    },
    {
      src: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Gaming Atmosphere",
    },
  ];

  return (
    <section id="gallery" className="py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Галерея клуба
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Взгляните на атмосферу нашего клуба
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="rounded-lg h-64 w-full object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
