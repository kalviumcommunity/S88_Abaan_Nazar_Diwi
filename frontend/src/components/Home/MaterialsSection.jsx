import bluelined from "./img/bluelined.png";
import linen from "./img/linen.png";
import black from "./img/blacklined.png";
import white from "./img/white.png";


const materials = [
  {
    name: "Business Shirts",
    img: `${bluelined}`,
    desc: "Formal shirts designed for office or corporate settings. Usually come in solid colors or subtle patterns, offering a clean, professional look.",
  },
  { name: "Non-Iron shirts", 
    img: `${white}`, 
    desc: "Specially treated to resist wrinkles, non-iron shirts stay smooth all day—great for busy professionals." },

  { name: "Linen Shirts",  
    img: `${linen}`, 
    desc: "Crafted from breathable linen fabric, these shirts are light, airy, and ideal for hot weather or beachy vibes." },

  { name: "Oxford Shirts", 
    img: `${black}`, 
    desc: "Made from Oxford cloth, these shirts are durable with a slightly textured finish. Perfect for both casual and semi-formal wear." },
];

export default function MaterialsSection() {
  return (
    <section className="py-12 px-12 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Materials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {materials.map((mat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-9"
          >
            <img
              src={mat.img}
              alt={`${mat.name} fabric sample`}
              className="w-full object-cover mb-3"
            />
            <h3 className="font-semibold text-lg pt-4">{mat.name}</h3>
            <p className="text-base text-gray-600 font-medium  line-clamp-3 pt-3 pb-5">{mat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
