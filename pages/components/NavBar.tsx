import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "About", href: "/about", current: false },
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Videos", href: "/videos", current: false },
  { name: "@zomdar", href: "https://twitter.com/zomdar", current: false },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <Popover className="relative bg-transparent" style={{ zIndex: 99 }}>
      {({ open }) => (
        <>
          <div className="container py-6 mx-auto px-4 lg:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href={navigation[0].href}>
                  <span className="sr-only">wooj choi</span>
                  <h1 className="font-bold font-montserrat text-base md:text-lg">
                    Wooj Choi.
                  </h1>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                </Popover.Button>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      style={
                        router.pathname.includes(item.href)
                          ? {
                              color: "#7c3aed",
                              textDecoration: "underline",
                              textDecorationColor: "#748ee0",
                              textDecorationThickness: "5px",
                            }
                          : {}
                      }
                    >
                      <Link href={item.href} key={item.name}>
                        <a className="hover:text-purple-900 focused:text-purple-900">
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-base md:text-lg">
                        Wooj Choi.
                      </h1>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map((item) => (
                        <div
                          key={item.name}
                          className={
                            router.pathname.includes(item.href) ? "active" : ""
                          }
                        >
                          <Link href={item.href} key={item.name}>
                            <a className="hover:text-purple-900 focused:text-purple-900">
                              {item.name}
                            </a>
                          </Link>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default NavBar;
