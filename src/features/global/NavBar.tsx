import { BiSearch } from "react-icons/bi";
import { useLocation } from "react-router";
import { useRouteStore } from "../../store/RouteStore";

const NavBar = () => {
  const { setRoute } = useRouteStore();

  const location = useLocation();

  const path = location.pathname;

  console.log(path)

  return (
    <nav className="p-6 px-12 border-b border-b-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold">
            <p className="cursor-pointer text-gray-800 hover:text-gray-500" onClick={() => setRoute("/")}>Visit Japan</p>
          </div>
          <ul className="flex items-center space-x-6">
            <li>
              <p
                onClick={() => setRoute("/")}
                className={path === "/" ? "text-gray-800 font-semibold " : "cursor-pointer text-gray-600 hover:text-gray-500"}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => setRoute("/packages")}
                className={path === "/packages" ? "text-gray-800 font-semibold " : "cursor-pointer text-gray-600 hover:text-gray-500"}
              >
                Packages
              </p>
            </li>
            <li>
              <p
                onClick={() => setRoute("/about")}
                className={path === "/about" ? "text-gray-800 font-semibold " : "cursor-pointer text-gray-600 hover:text-gray-500"}
              >
                About
              </p>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center border border-gray-300 p-2 px-4">
            <input placeholder="Search" type="text" className="outline-none " />
            <BiSearch size={20} />
          </div>

          <div>
            <img
              className="size-12 object-cover items-center rounded-full"
              src="https://i.namu.wiki/i/R0AhIJhNi8fkU2Al72pglkrT8QenAaCJd1as-d_iY6MC8nub1iI5VzIqzJlLa-1uzZm--TkB-KHFiT-P-t7bEg.webp"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
