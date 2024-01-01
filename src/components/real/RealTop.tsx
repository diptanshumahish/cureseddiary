import React from "react";
import Image from "next/image";

export default function RealTop() {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h2 className="text-3xl">Real Stories / Folklore</h2>
      <span className="opacity-40">
        Here is our entire exhaustive list of stories that you can read out. Use
        the filters and go page by page, maybe some amazing content awaits you
        some millions of pages away, hehe. Use the tags to filter out content as
        per as your needs. Our tags would help you in deciding what to read and{" "}
        <b>maybe what not?</b>
      </span>
      <figure className="pointer-events-none">
        <Image
          src="/back/folk.webp"
          height={1280}
          width={1920}
          alt="stories page background image"
          className="w-full h-[80vh] rounded-sm object-cover border border-white border-opacity-20"
        />
        <figcaption className="caption">The truth is horrifying.</figcaption>
      </figure>
    </div>
  );
}
