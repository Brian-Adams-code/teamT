import React from "react";
import Image from "next/image";
import bg1 from "../public/bg1.jpg";
import Link from "next/link";

export default function Card({ img, title, description, link }) {
  return (
    <>
    {/* add an Image src img and alt={title} to the Image tag but handle when image is missing too */}
      
      {img &&(
      <Image alt="image here" className="w-50" src={img} width={500} height={400}  />
      )}
      <div className="p-2 text-center">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4"> {description}</p>
      <Link href={link} className="text-blue-600">Click me </Link>
      </div>
      
    </>
  );
}
