import React from "react";
import Image from "next/image";
import bg1 from "../public/bg1.jpg";
import Link from "next/link";

export default function Card({ image, title, description, link }) {
  return (
    <>
      <Image alt="image here" className="w-50" src={bg1} width={500} height={400}  />
      <div className="p-2 text-center">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4"> {description}</p>
      <Link href={link} className="text-blue-600">Click me </Link>
      </div>
      
    </>
  );
}
