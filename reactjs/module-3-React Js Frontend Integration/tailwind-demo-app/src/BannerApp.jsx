import { useEffect, useState } from "react";
import car1 from './images/1.jpg'
import car2 from './images/1.webp'
import car3 from './images/2.jpg'
import car4 from './images/3.jpg'
const slides = [
  {
    id: 1,
    title: "Beautiful Cars",
    description: "Explore our latest collection of cars.",
    image: car1,
  },
  {
    id: 2,
    title: "Luxury Cars",
    description: "Discover premium and luxury vehicles.",
    image: car2,
  },
  {
    id: 3,
    title: "Sports Cars",
    description: "Experience speed, power, and performance.",
    image: car3,
  },
  {
    id: 4,
    title: "SUV Collection",
    description: "Perfect vehicles for every adventure.",
    image: car4,
  },
];

export default function CarSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="relative h-[500px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-2xl px-6 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                  {slide.title}
                </h2>

                <p className="text-lg md:text-xl">
                  {slide.description}
                </p>

                <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-gray-800 shadow transition hover:bg-white"
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-gray-800 shadow transition hover:bg-white"
        aria-label="Next slide"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current
                ? "w-8 bg-white"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
