import { UsersTypes } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

type UserProps = {
  data: UsersTypes;
};

const Users = ({ data }: UserProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/todos");
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "350px 350px 350px 350px",
        gap: "30px",
        width: "fit content",
        margin: "auto",
      }}
    >
      {data.map((item: UsersTypes) => {
        return (
          <div
            style={{
              backgroundColor: "#edf2f7",
              borderRadius: "10px",
              padding: "20px",
              // width: "fit-content",
            }}
            key={item.id}
          >
            <h2 style={{ textAlign: "center" }}>{item.name}</h2>
            <h4 style={{ textAlign: "center" }}> {item.username}</h4>
            <p style={{ textAlign: "center" }}>{item.address.street}</p>
            <button
              style={{
                padding: "10px",
                borderRadius: "7px",
                background: "#83bcff",
                color: "white",
                border: "none",
                width: "310px",
                margin: "auto",
              }}
              onClick={handleClick}
            >
              Get Todos
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
  return { props: { data } };
}
