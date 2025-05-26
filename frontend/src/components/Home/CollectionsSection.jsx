const shirts = [
  { img: "/shirt1.jpg", name: "Slim Navy Shirt" },
  { img: "/shirt2.jpg", name: "Casual Black" },
  { img: "/shirt3.jpg", name: "White Formal" },
  { img: "/shirt4.jpg", name: "Checked Navy" }
];

export default function CollectionsSection() {
  return (
    <div className="py-10 px-4 text-center">
      <h2 className="text-xl font-bold mb-6">Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {shirts.map((shirt, i) => (
          <div key={i} className="shadow-md p-2 rounded">
            <img src={shirt.img} alt={shirt.name} className="w-full h-48 object-cover mb-2" />
            <p className="font-medium">{shirt.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
