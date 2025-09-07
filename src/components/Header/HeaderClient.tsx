"use client";
import { Icons } from "@/icons";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { useMobile } from "@/utils/hooks/useMobile";

const mockNavigation = [
  { label: "Home", href: "/", icon: <Icons.Home /> },
  { label: "Dashboards", href: "/dashboards", icon: <Icons.Dashboard /> },
  { label: "Currencies", href: "/currencies", icon: <Icons.Currency /> },
  { label: "Profile", href: "/profile", icon: <Icons.User /> },
];

export default function Header({ isAdmin }: { isAdmin: boolean }) {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll state
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 64) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-[var(--color-primary)] flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10 font-rubik w-full text-white transform transition-transform duration-250 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-4">
        <Button
          href="/"
          variant="tertiary"
          underline={false}
          className="text-white"
        >
          <p className="text-xl font-bold">dotETHer</p>
        </Button>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="hidden lg:flex items-center gap-8">
          {mockNavigation.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              variant="tertiary"
              inverted
              underline
              icon={item.icon}
            >
              {item.label}
            </Button>
          ))}
          {isAdmin && (
            <Button
              key={"Admin dashboard"}
              href={"/admin"}
              variant="tertiary"
              underline
              inverted
              icon={<></>}
            >
              Admin Dashboard
            </Button>
          )}
        </nav>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <>
          <Button
            inverted
            icon={<Icons.Burger size="large" />}
            aria-label={"Open Menu"}
            className="flex-0"
            variant="tertiary"
            onClick={toggleMenu}
            underline={false}
            href=""
          />
          <div
            className={`fixed inset-0 bg-black bg-opacity-75 z-20 transition-opacity duration-300 ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleMenu}
          >
            <div
              className={`flex flex-col gap-5 bg-[var(--color-primary)] h-full p-4 transform transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Button
                  variant="tertiary"
                  href={"/"}
                  aria-label={"Homepage"}
                  className="self-start text-xl !font-bold text-white"
                >
                  dotETHer
                </Button>
                <Button
                  aria-label="Close Menu"
                  icon={<Icons.Close size="large" />}
                  underline={false}
                  variant="tertiary"
                  className="text-white w-fit self-end"
                  onClick={toggleMenu}
                  href={""}
                />
              </div>
              <nav className="flex flex-col gap-4 items-end">
                {mockNavigation.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    variant="tertiary"
                    className="text-2xl"
                    icon={item.icon}
                    underline
                    inverted
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Button>
                ))}
                {isAdmin && (
                  <Button
                    key={"Admin dashboard"}
                    href={"/admin"}
                    variant="tertiary"
                    className="text-2xl"
                    underline
                    inverted
                    icon={<></>}
                  >
                    Admin Dashboard
                  </Button>
                )}
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
