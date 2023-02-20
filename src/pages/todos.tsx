import { UsersTypes } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { TodoTypes } from "../utils/types";

type TodoProps = {
  data: TodoTypes;
};

const Users = ({ data }: TodoProps) => {
  return (
    <div>
      {data.map((item: TodoTypes) => {
        return (
          <div
            style={{
              padding: "7px",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              width: "50%",
              margin: "auto",
              marginBottom: "20px",
            }}
            key={item.id}
          >
            <h4>✅ {item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const data = await axios
    .get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
  return { props: { data } };
}
