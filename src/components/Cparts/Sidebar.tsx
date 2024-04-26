import React, { useState, useEffect, ReactNode } from "react";
import "./Sidebar.css";
import Homes from "../../assets/home.gif";
import orders from "../../assets/orders.gif";
import customers from "../../assets/customers.gif";
import trolley from "../../assets/trolley.gif";
import ProfilePhoto from "../../assets/passnew.jpg";
import chat from "../../assets/chat.gif";
import chatBot from "../../assets/chatBot.png";
import Logout from "../../assets/logout.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface sideProps {
}

const Sidebar: React.FC<sideProps> = ({  }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setExpanded(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  const SidebarData = [
    {
      path: "/auth/dashboard",
      icon: <img src={Homes} alt="Dashboard" />,
      heading: "Dashboard",
    },
    {
      path: "/auth/orders",
      icon: <img src={orders} alt="orders" />,
      heading: "Orders",
    },
    {
      path: "/auth/customers",
      icon: <img src={customers} alt="orders" />,
      heading: "Customers",
    },
    {
      path: "/auth/products",
      icon: <img src={trolley} alt="orders" />,
      heading: "Products",
    },
    {
      path: "/auth/chat",
      icon: <img src={chat} alt="orders" />,
      heading: "Chat Online",
    },
    {
      path: "/auth/chatbot",
      icon: <img src={chatBot} alt="orders" style={{ filter: "invert(100%)" }} />,
      heading: "ChatBot",
    },
    {
      path: "/logout",
      icon: <img src={Logout} style={{ filter: "invert(100%)" }} alt="orders" />,
      heading: "Logout",
    },
  ];
  return (
    <div className="sidebar-container">
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      ></div>
      <div style={{ position: "relative" }}>
        <motion.div
          className="sidebar"
          variants={sidebarVariants}
          animate={expanded ? "true" : "false"}
        >
          {/* logo */}
          <div className="flex flex-row items-center justify-content-between">
            <div style={{ marginRight: "1rem" }}>
              <img
                src={ProfilePhoto}
                alt="logo"
                style={{ height: "40px", width: "40px", borderRadius: "50%" }}
              />
            </div>
            <div>
              <h1>samarthsahu@gmail.com</h1>
            </div>
          </div>
          <div className="menu">
            {SidebarData.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" >
                <div
                  id="images"
                  className={selected === index ? "menuItem active" : "menuItem"}
                  onClick={() => setSelected(index)}
                >
                  {item.icon}
                  <span className="fs-md">{item.heading}</span>
                </div>

              </NavLink>
            ))}
            {/* signoutIcon */}
            <div className="menuItem"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sidebar;
