import { FileText } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Header() {
  const isLogedIn = false;
  return (
    <>
      <nav className="container flex justify-between items-center py-4 px-2 lg:py-8 mx-auto">
        <div className="flex lg:flex-1">
          <NavLinks
            href="/"
            className="flex items-center gap-1 lg:gap-2 shrink-0"
          >
            <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out " />
            <span className="text-gray-900 font-extrabold lg:text-xl">
              Sommaire
            </span>
          </NavLinks>
        </div>
        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
          <NavLinks href={"/#pricing"}>Pricing</NavLinks>
          {isLogedIn && <NavLinks href={"/dashboard"}>Dashboard</NavLinks>}
        </div>
        <div className="flex lg:justify-end lg:flex-1">
          {isLogedIn ? (
            <div className="flex gap-2 items-center">
              <NavLinks href="/upload">Upload a pdf</NavLinks>
              <div>PRO</div>
              <div>user</div>
            </div>
          ) : (
            <div className="">
              <NavLinks href={"/sign-in"}>Sign In</NavLinks>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
