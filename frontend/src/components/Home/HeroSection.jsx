import "./HeroSection.css"; // Assuming you have a CSS file for styles
//add background image ./img/hone main.png
export default function HeroSection() {
  return (
    <div className="bg">
      <div className="textbutton">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to Our Website !
        </h1>
        <button className="bg-blue-950 text-white px-6 py-3 rounded-full shadow-lg hover:bg-white duration-300">
          Create Your Own
        </button>
      </div>
    </div>
  );
}
