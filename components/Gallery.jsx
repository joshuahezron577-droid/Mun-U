"use client";

export default function Gallery() {
  // Array ya picha 4
  const galleryItems = [1, 2, 3, 4];

  return (
    <section className="container mx-auto max-w-6xl px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">
          Our Gallery
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Mikusanyiko ya matukio na bidhaa zetu muhimu.
        </p>
      </div>

      {/* Grid ya picha 4 kubwa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItems.map((item) => (
          <div key={item} className="relative card bg-base-100 shadow-lg rounded-2xl overflow-hidden group">
            <figure className="h-72 w-full relative">
              <img
                src={`/gallery-${item}.jpg`} // Badilisha jina la picha zako hapa
                alt={`Gallery ${item}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-xl">View Image</span>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}