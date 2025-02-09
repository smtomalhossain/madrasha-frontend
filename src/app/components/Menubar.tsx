import { menuItem } from "@/lib/menuData";
import Link from "next/link";

const Menubar = () => {
  return (
    <nav className="w-full md:w-auto absolute md:static top-14 md:top-auto left-0 md:left-auto flex flex-col md:flex-row gap-3 bg-white p-3 md:p-0 justify-center items-center rounded-md md:rounded-none border md:border-0 shadow-md md:shadow-none hidden md:flex">
      {/* Home Link */}
      <Link
        className="text-sm p-1 px-3 w-full md:w-auto hover:bg-gray-100 rounded-md"
        href="/"
      >
        হোম
      </Link>

      {/* Loop Through Menu Items */}
      {menuItem.map((category, categoryIndex) => (
        <div key={categoryIndex} className="relative group flex gap-3">
          {category.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item.href}
              className="text-sm p-1 px-3 md:w-auto hover:bg-gray-100 rounded-md flex justify-between items-center gap-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default Menubar;
