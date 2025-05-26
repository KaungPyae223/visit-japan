const Itinerary = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-6">Itinerary</h2>
      <div className="space-y-6 border-l-2 border-gray-200 pl-4 ms-6">
        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 ">✈️</div>
          <h3 className="font-medium">Arrival and Check-in</h3>
          <p className="text-sm text-gray-500">Day 1</p>
        </div>

        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 text-yellow-500">☀️</div>
          <h3 className="font-medium">Beach Relaxation and Snorkeling</h3>
          <p className="text-sm text-gray-500">Day 2</p>
        </div>

        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 text-green-600">🏕️</div>
          <h3 className="font-medium">Jungle Trek and Waterfall Visit</h3>
          <p className="text-sm text-gray-500">Day 3</p>
        </div>

        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 text-gray-600">🏛️</div>
          <h3 className="font-medium">Cultural Tour and Local Market</h3>
          <p className="text-sm text-gray-500">Day 4</p>
        </div>

        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 text-orange-400">⛴️</div>
          <h3 className="font-medium">Island Hopping and Sunset Cruise</h3>
          <p className="text-sm text-gray-500">Day 5</p>
        </div>

        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 text-pink-500">📍</div>
          <h3 className="font-medium">Free Day for Exploration</h3>
          <p className="text-sm text-gray-500">Day 6</p>
        </div>

        <div className="relative ms-3">
          <div className="absolute rounded-full bg-white p-2 border border-gray-200 -left-12 top-0 ">✈️</div>
          <h3 className="font-medium">Departure</h3>
          <p className="text-sm text-gray-500">Day 7</p>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
