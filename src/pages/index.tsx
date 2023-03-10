import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Heading } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RCT-201</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ fontSize: "60px", textAlign: "center" }}>
        Welcome to the C4 evaluation for
      </h1>
      <h1
        style={{
          fontSize: "60px",
          textAlign: "center",
          color: "rgb(131,188,255)",
        }}
      >
        RCT-201
      </h1>
      <p style={{ textAlign: "center" }}>
        You need to create an application similar to the one that you are
        looking right now. There 2 pages that needs to be created apart from the
        current homepage.
      </p>
      <p style={{ textAlign: "center" }}>
        One path is /people and another a dynamic route /people/[id]
      </p>

      {/* accordion */}
      <div style={{ marginLeft: "30%" }}>
        <Accordion allowToggle>
          <AccordionItem width={"600px"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  /people
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>
                  The people can go to this page, by clicking the `People` tab
                  in the Navbar
                </li>
                <li>
                  The data should be fetched from
                  https://jsonplaceholder.typicode.com/users (Users API call)
                  using Static Site Generation (SSG) for this page.
                </li>
                <li>
                  Hence the people page will be rendered from the server, with
                  all the data present in the HTML file itself
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem width={"600px"}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  /people/[id]
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                <li>
                  The people can go to this page, by clicking the `Get Todos`
                  button in the User Cards
                </li>
                <li>
                  All the static HTML files, based on the static paths of the
                  user id, should be created using SSG
                </li>
                <li>
                  The HTML files should have the UserID:[id] data present in
                  their HTML pages (Check screenshots for examples)
                </li>
                <li>
                  The TodoData should be fetched from
                  https://jsonplaceholder.typicode.com/users/$id/todos using
                  Client Side Rendering, and shown in the UI after the page
                  loads
                </li>
                <li>
                  Visting any other dynamic route based on the user id which is
                  not in the API should show the 404 page. For example, from the
                  Users API call, none of the user has the 97 user id, hence,
                  visiting http://localhost:3000/people/97 should return 404
                  page
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <p style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "600", fontSize: "20px" }}>
          Making Criteria:
        </span>{" "}
        #TYPESCRIPT #REACT #NEXTJS #CHAKRAUI
      </p>
    </>
  );
}
