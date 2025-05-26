export default function PurposeSection() {
  return (
    <div className="py-10 px-6 flex flex-col md:flex-row items-center gap-8">
      <img src="/tailor.jpg" alt="Tailor" className="w-full md:w-1/2 rounded shadow-md" />
      <div className="text-left md:w-1/2">
        <h2 className="text-xl font-bold mb-2">Now This Is Our True Purpose</h2>
        <p className="text-gray-700 mb-4">
          At DIWI, we believe your clothing should be more than just stitched fabric. We empower people to express personality through design. Our purpose is to empower trends and creativity.
        </p>
        <button className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800">Create Your Own</button>
      </div>
    </div>
  );
}
