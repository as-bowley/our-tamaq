"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

import collageimg1 from "../../assets/images//collage/pic1.jpeg";
import collageimg2 from "../../assets/images//collage/pic2.jpeg";
import collageimg3 from "../../assets/images//collage/pic3.jpeg";
import collageimg4 from "../../assets/images//collage/pic4.jpeg";
import collageimg5 from "../../assets/images//collage/pic5.jpeg";
import collageimg6 from "../../assets/images//collage/pic6.jpeg";
import collageimg7 from "../../assets/images//collage/pic7.jpeg";
import collageimg8 from "../../assets/images//collage/art1.jpeg";

export default function LandingPage() {
  return (
    <>
      <Parallax pages={2} className="absolute left-0 bg-black">
        <ParallaxLayer></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={0.5}
          className="absolute left-0 z-20 bg-transparant "
        >
          <h1 className="text-4xl text-white">Testing heading 1</h1>
        </ParallaxLayer>
        <ParallaxLayer
          speed={2}
          offset={0.5}
          className="grid grid-cols-1 justify-center align-middle flex-wrap bg-black lg:grid-cols-3 md:grid-cols-2 "
          factor={2}
        >
          <Image
            src={collageimg1}
            alt=""
            className="p-5 h-min rounded-xl -left-5"
          ></Image>
          <Image
            src={collageimg2}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
          <Image
            src={collageimg3}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
          <Image
            src={collageimg4}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
          <Image
            src={collageimg5}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
          <Image
            src={collageimg6}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
          <Image
            src={collageimg7}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
          <Image
            src={collageimg8}
            alt=""
            className="p-5 h-min rounded-xl"
          ></Image>
        </ParallaxLayer>
        <ParallaxLayer factor={2}></ParallaxLayer>
      </Parallax>
    </>
  );
}
