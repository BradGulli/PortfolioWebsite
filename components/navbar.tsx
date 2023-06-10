import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pb-4 top-0 justify-center items-center flex">
      <ul className="flex text-gray-900 font-mono space-x-3 text-s md:text-3xl font-semibold">
        <li className="font-noto transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-orange-300 duration-300">
          <Link href="/">Home</Link>
        </li>
        <div> | </div>
        <li  className="font-noto transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-orange-300 duration-300">
          <Link href="/resume">Resume</Link>
        </li>
        <div> | </div>
        <li  className="font-noto transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-orange-300 duration-300">
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;