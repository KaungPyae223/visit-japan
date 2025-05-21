
export default function Footer() {
  return (
    <footer className=" text-gray-800 mt-10 border-t border-t-gray-300">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Visit Japan</h2>
          <p className="text-sm mt-1 text-gray-400">© {new Date().getFullYear()} Visit Japan. All rights reserved.</p>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800  text-sm">Privacy</a></li>
          <li><a href="#" className="text-gray-800  text-sm">Terms</a></li>
          <li><a href="#" className="text-gray-800  text-sm">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
}
