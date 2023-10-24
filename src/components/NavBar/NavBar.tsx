import React from "react";
import Container from "../Container/Container";

export default function NavBar() {
  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-[#ebd7ef] items-center justify-center">
        <Container>
          <div className="relative flex flex-row items-center justify-center max-w-7xl w-full mx-auto py-4">
            <a className="cursor-pointer" href="https://giki.earth/">
              <img
                src={require("../../assets/Giki-Logo.webp")}
                alt="logo"
                width={120}
              />
            </a>
          </div>
        </Container>
      </nav>
    </header>
  );
}
