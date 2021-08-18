import React, { useEffect, useState } from "react";
import { HeaderTag } from "./styles";
import Logo from "../../assets/images/logo.svg";

export default function Header() {
  const [isSpanVisible, setIsSpanVisible] = useState(() => {
    if (window.innerWidth < 500) {
      return false;
    } else {
      return true;
    }
  });

  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsSpanVisible(false);
    } else {
      setIsSpanVisible(true);
    }
  };

  useEffect(() => window.addEventListener("resize", handleResize));

  return (
    <HeaderTag>
      <div className="made-by">
        <span>
          {isSpanVisible ? (
            <>
              Made by <a href="https://doulovera.vercel.app/">Douglas Lovera</a>
            </>
          ) : (
            <>
              <a href="https://doulovera.vercel.app/">🌐</a>
            </>
          )}
        </span>
      </div>
      <div className="logo">
        <img src={Logo} alt="Lorem picsum logo" />
      </div>
      <div className="social-media">
        <span>
          <a
            href="https://twitter.com/doulovera/"
            target="_blank"
            rel="noreferrer"
          >
            🐦
          </a>
        </span>
      </div>
    </HeaderTag>
  );
}
