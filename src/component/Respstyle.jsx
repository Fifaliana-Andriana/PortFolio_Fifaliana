import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Respstyle() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openMenu, setOpenMenu] = useState(false);

  const menus = [
    { nom: "Home", href: "/Home" },
    { nom: "About", href: "/About" },
    { nom: "Project", href: "/Project" },
    { nom: "Contact", href: "/Contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w100prc displayF alignIC">
      {isMobile ? (
        <>
          <div className="displayF justifyCE w100prc posRel">
            <button
              className="bgNone borderN posFixb displayF alignIC"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <FaXmark size={32} /> : <FaBars size={32} />}
            </button>
          </div>
          
          {openMenu && (
            <ul className="mobileMenu">
              {menus.map((menu, index) => (
                <li key={index} className="listStyleN">
                  <a
                    href={menu.href}
                    className="textDecoN"
                    onClick={() => setOpenMenu(false)}
                  >
                    {menu.nom}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <ul className="displayF justifyCSE alignIC w100prc ">
          {menus.map((menu, index) => (
            <li key={index} className="listStyleN border w4cm">
              <a href={menu.href} className="textDecoN">
                {menu.nom}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Respstyle;
