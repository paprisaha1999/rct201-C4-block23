import Link from "next/link";
import React from "react";

const styles = {
  color: "black",
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "18px",
  marginLeft: "40px",
};

const Navbar = () => {
  return (
    <div
      style={{
        height: "50px",
        background: "#83bcff",
        display: "flex",
        justifyContent: "flex-start",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <Link style={styles} href={"/"}>
        ☑️
      </Link>
      <Link style={styles} href={"/users"}>
        People
      </Link>
      <Link href={"/todos"}> </Link>
    </div>
  );
};

export default Navbar;
