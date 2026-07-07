export default function AboutUs() {
  return (
    <section className="container mx-auto max-w-6xl px-4">
      
      {/* SEHEMU YA JUU: Heading na Paragraph */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Karibu katika SHOP-TZ, mahali ambapo tunajali ubora na mahitaji ya mteja wetu kwa ukaribu. 
          Tumejipanga kukupa huduma bora zaidi kwa kutumia teknolojia ya kisasa ili kurahisisha maisha yako. 
          Dhamira yetu ni kuhakikisha kila bidhaa unayopata inakidhi viwango vya juu vya kuridhika.
        </p>
      </div>

      {/* SEHEMU YA CHINI: Gridi (Kushoto Maelezo, Kulia Picha) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Upande wa Kushoto: Maelezo na Button */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Kwa nini uchague sisi?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tunajivunia utaalamu wetu katika kutoa bidhaa bora zenye ubora wa kimataifa. 
            Timu yetu imejitolea kuhakikisha huduma zetu zinapatikana kwa haraka, kwa bei nafuu, 
            na kwa usalama wa hali ya juu ili mteja wetu ajisikie thamani yake.
          </p>
          <button className="btn btn-primary btn-sm px-8">
            Learn More
          </button>
        </div>

        {/* Upande wa Kulia: Card ya Picha */}
        <div className="card bg-base-100 shadow-xl rounded-3xl overflow-hidden border border-gray-100">
          <figure className="h-72">
            <img 
              src="/Images/Mun-Pitch.jpg" 
              alt="About Us Image" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </figure>
        </div>

      </div>
    </section>
  );
}