import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-evenly items-center">
      <Link to="/">
        <img
          className="h-20"
          src="https://www.topfiyt.com/template/assets/images/logo.png"
        />
      </Link>
      <div className="flex flex-col gap-4 max-sm:gap-2">
        <h5 className="text-slate-800 text-base font-bold  max-sm:text-sm">
          Get in Touch
        </h5>
        <div className="flex flex-col items-start">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Your Email"
              className="p-3 border rounded-l-md text-neutral-500 bg-stone-50 "
            />
            <button className="py-3 px-6 border border-neutral-200 bg-[#23A6F0] text-white rounded-r-md">
              Subscribe
            </button>
          </div>
          <p className="text-neutral-500 text-xs ">Lore imp sum dolor Amit</p>
        </div>
      </div>
    </footer>
  );
}
