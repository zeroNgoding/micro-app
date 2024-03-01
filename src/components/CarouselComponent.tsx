import Onyet from "../assets/img/onyet.png";

import { Carousel } from "flowbite-react";

export default function CarouselComponent() {
  return (
    <div className="h-[600px] lg:h-[500px] rounded-2lg my-40">
      <Carousel className="rounded-2lg">
        <div className="flex bg-white lg:w-[900px] w-[250px] flex-col items-center p-5 lg:p-12 rounded-2xl gap-5  shadow-lg lg:flex-row lg:justify-between">
          <img src={Onyet} className=" lg:w-80" alt="" />
          <div className="text-sm lg:text-xl flex flex-col gap-2 lg:gap-10">
            <div>
              <p className="font-bold lg:text-2xl">Nomer Urut : 1</p>
              <h1 className="text-orange-900 text-base font-bold lg:text-3xl">
                CINTARA SURYA PALOH
              </h1>
            </div>
            <div>
              <p>Visi & Misi :</p>
              <ul className="list-disc ms-5">
                <li>Memindahkan Indonesia ke Isekai</li>
                <li>Nonton anime 3x sehari.</li>
                <li>Melakukan peresapan pada budaya jepang</li>
              </ul>
            </div>
            <div>
              <p>Koalisi :</p>
              <ul className="list-disc ms-5">
                <li>Partai persatuan Wibo.</li>
                <li>Partai Redbull.</li>
                <li>Partai Black Magic.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex bg-white lg:w-[900px] w-[250px] flex-col items-center p-5 lg:p-12 rounded-2xl gap-5  shadow-lg lg:flex-row lg:justify-between">
          <img src={Onyet} className=" lg:w-80" alt="" />
          <div className="text-sm lg:text-xl flex flex-col gap-2 lg:gap-10">
            <div>
              <p className="font-bold lg:text-2xl">Nomer Urut : 2</p>
              <h1 className="text-orange-900 text-base font-bold lg:text-3xl">
                SURYA SURYA
              </h1>
            </div>
            <div>
              <p>Visi & Misi :</p>
              <ul className="list-disc ms-5">
                <li>Memindahkan Indonesia ke Isekai</li>
                <li>Nonton anime 3x sehari.</li>
                <li>Melakukan peresapan pada budaya jepang</li>
              </ul>
            </div>
            <div>
              <p>Koalisi :</p>
              <ul className="list-disc ms-5">
                <li>Partai persatuan Wibo.</li>
                <li>Partai Redbull.</li>
                <li>Partai Black Magic.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex bg-white lg:w-[900px] w-[250px] flex-col items-center p-5 lg:p-12 rounded-2xl gap-5  shadow-lg lg:flex-row lg:justify-between">
          <img src={Onyet} className=" lg:w-80" alt="" />
          <div className="text-sm lg:text-xl flex flex-col gap-2 lg:gap-10">
            <div>
              <p className="font-bold lg:text-2xl">Nomer Urut : 2</p>
              <h1 className="text-orange-900 text-base font-bold lg:text-3xl">
                CINTARA
              </h1>
            </div>
            <div>
              <p>Visi & Misi :</p>
              <ul className="list-disc ms-5">
                <li>Memindahkan Indonesia ke Isekai</li>
                <li>Nonton anime 3x sehari.</li>
                <li>Melakukan peresapan pada budaya jepang</li>
              </ul>
            </div>
            <div>
              <p>Koalisi :</p>
              <ul className="list-disc ms-5">
                <li>Partai persatuan Wibo.</li>
                <li>Partai Redbull.</li>
                <li>Partai Black Magic.</li>
              </ul>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
