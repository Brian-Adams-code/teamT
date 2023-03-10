import Head from "next/head";
import image1 from "../public/bg.jpg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image1.jpg";
import image5 from "../public/image3.jpg";
import image6 from "../public/image4.jpg";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Card from "./card";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    {
      id: 1,
      image:  image2 ,
      title: "Work Life",
      description: "Real-life advice, inspiration, and stories from the working world today.",
      links: "Read our blog",
    },
    {
      id: 2,
      image: image2 ,
      title: "Atlassian Team Playbook",
      description: "Solve common team challenges with these group exercises.",
      links: "Check team health",
    },
    {
      id: 3,
      image:image3,
      title: "The Agile Coach",
      description: "Atlassian's no-nonsense guide to agile development.",
      links: "Visit our resources",
    },
    {
      id: 4,
      // image:  image3 ,
      title: "EVENTS",
      description: "Hear from today’s fearless builders and innovators",
      links: "Learn more",
    },
    {
      id: 5,
      image: image5 ,
      title: "Title 1",
      description: "description 1",
      links: "/",
    },
    {
      id: 6,
      image:  image6 ,
      title: "Title 1",
      description: "description 1",
      links: "/",
    },
  ];
  return (
    <>
      <Head>
        <title>Truecode</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-2">
        <div className=" min-h-screen bg-white flex flex-col items-center justify-center w-full max-w-7xl m-auto ">
          <div className="w-full  gap-4  grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 flex flex-col ">
              <h6 className="text-teal-500 font-bold mt-10">TEAM ESSENTIALS</h6>
              <p className=" text-5xl text-zinc-500 text-bold mt-10">
                Explore The resources to unleash the potential of your team
              </p>
              <div></div>
            </div>
            <div className="col-span-12 md:col-span-8 flex flex-col  bg-red-100 hover:shadow-lg hover:shadow-red-900 duration-1000 ease-in-out">
              <Image alt="image here" className="w-full h-80" src={image1} />
              <div className="text-center w-full mt-10">
                <h3>Atlassian Community</h3>
                <p>
                  Connect Globally and meet locally to get more of our products
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
            {data.map((item) => (
              <div
                className="col-span-1 flex flex-col mb-8 flex-wrap w-full justify-between hover:shadow-lg
                hover:shadow-blue-900 duration-1000 ease-in-out
                "
                key={item.id}
              >
                <Card
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.links}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <h1 className="text-1xl mb-10 font-bold">CAREERS</h1>
            <h1 className="text-4xl font-bold mb-7 ">We can’t do it alone</h1>
            <p className="text-zinc-500">
              We have an ambitious road ahead, and we’re looking for people to
              join <br /> our global team to help shape the future of Atlassian.
            </p>
            <button className="bg-color-600 p-2 text-blue-100 bg-blue-600 rounded-lg m-5">
              Join the Team
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
