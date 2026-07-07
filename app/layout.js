import "./globals.css";
  import Link from 'next/link';
  import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="min-h-screen">
  {/* Header/nav */} 
        {children}
        
{/* Footer */}
<footer className="w-full bg-blue-950 text-white py-6 mt-10">
      <div className="container mx-auto px-5 flex justify-between items-center text-sm">
       
        {/* Kulia: About GS CodeStar */}
        <div className="text-right">
          <p className="font-light text-xs opacity-70">Powered by</p>
          <span className="font-black text-yellow-400">Limdog wake mbeumo</span>
        </div>
         
        {/* Kushoto: Back to Home */}
        <Link href="/" className="font-bold hover:text-yellow-400 transition-colors">
          ← Back to Home
        </Link>

      </div>
    </footer>
{/* Third party scripts */}

      </body>
    </html>
  );
}