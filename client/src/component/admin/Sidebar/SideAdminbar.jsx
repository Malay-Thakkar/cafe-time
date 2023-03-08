import { NavLink } from "react-router-dom";
import { FaBars,FaHandHoldingHeart,FaUserCircle} from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import {BiBookReader,BiLogOut } from "react-icons/bi";
import {RiFolderAddFill,RiDeleteBin2Fill} from "react-icons/ri";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './Adminnav.css'

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <BiBookReader />,
  },
  {
    path: "/addproduct",
    name: "Add Product",
    icon: <RiFolderAddFill/>,
  },
  {
    path: "/updateproduct",
    name: "Update Product",
    icon: <GiArchiveRegister />,
  },
  {
    path: "/deleteproduct",
    name: "Delete Product",
    icon: <RiDeleteBin2Fill />,
  },
  {
    path: "/salse",
    name: "Sales",
    icon: <FaHandHoldingHeart />,
  },
  {
    path: "/me",
    name: "Pofile",
    icon: <FaUserCircle />,
  },
  {
    path: "/logout",
    name: "Logout",
    icon: <BiLogOut />,
  },
];

const SideAdminbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>

        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Adimin Dashboard
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      
    </>
  );
};

export default SideAdminbar;
