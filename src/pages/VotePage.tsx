import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import ChartPieComponents from "./ChartsPieComponents";
import { Button, Modal, Card } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Onyet from "../assets/img/onyet.png";

export default function VotePage(props: any) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section>
        <div className="container mx-auto mt-40 bg-white">
          <h1 className="text-center text-2xl lg:text-5xl font-bold py-16">
            INFO PEMILU TERUPDATE
          </h1>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:gap-32">
            {/* <div className="bg-red-400 w-72 h-72 lg:w-96 lg:h-96 rounded-full"></div> */}
            <ChartPieComponents />

            <div className="flex flex-col gap-2 mb-16">
              <div className="bg-blue-400 shadow-md rounded-xl flex justify-between gap-4 p-4 lg:px-8 items-center">
                <div className=" bg-black text-white  flex flex-col justify-center items-center p-1 py-2 lg:px-3 lg:py-4 leading-4 text-xs lg:text-xl lg:leading-6 border rounded-lg">
                  <span className="">No.</span>
                  <span className="">Paslon</span>
                  <span className="lg:text-2xl text-base font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl text-stroke lg:text-5xl  font-black">
                    CINTARA SURYA PALOH
                  </p>
                  <p className="text-stroke font-bold lg:text-4xl">58%</p>
                </div>
              </div>
              <div className="bg-green-400 shadow-md rounded-xl flex justify-start gap-4 p-4 lg:px-8 items-center">
                <div className="  text-white bg-black flex flex-col justify-center items-center p-1 py-2 lg:px-3 lg:py-4 leading-4 text-xs lg:text-xl lg:leading-6 border rounded-lg">
                  <span className="">No.</span>
                  <span className="">Paslon</span>
                  <span className="lg:text-2xl text-base font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl text-stroke lg:text-5xl   font-black">
                    SURYA SURYA
                  </p>
                  <p className="text-stroke  font-bold lg:text-4xl">25%</p>
                </div>
              </div>
              <div className="bg-yellow-400 shadow-md rounded-xl flex justify-start gap-4 p-4 lg:px-8 items-center">
                <div className=" bg-black text-white  flex flex-col justify-center items-center p-1 py-2 lg:px-3 lg:py-4 leading-4 text-xs lg:text-xl lg:leading-6 border rounded-lg">
                  <span className="">No.</span>
                  <span className="">Paslon</span>
                  <span className="lg:text-2xl text-base font-bold">3</span>
                </div>
                <div>
                  <p className="text-xl text-stroke lg:text-5xl font-black">
                    CINTARA
                  </p>
                  <p className="text-stroke font-bold lg:text-4xl">17%</p>
                </div>
              </div>

              <p></p>
              <Button
                className="text-white bg-red-400 shadow-md text-center py-1 rounded-lg mt-10 lg:text-5xl lg:font-bold lg:py-4"
                onClick={() => setOpenModal(true)}
              >
                MASUKIN SUARAMU
              </Button>
              <Modal
                show={openModal}
                size="5xl"
                onClose={() => setOpenModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <h1 className="text-center text-4xl font-black mb-10">
                    MASUKAN PILIHANMU
                  </h1>
                  <div className="grid grid-cols-3 gap-4 text-white">
                    <div className=" bg-blue-400 flex flex-col p-4 gap-3 rounded-lg">
                      <img className="h-52 object-cover" src={Onyet} alt="" />
                      <div className="text-center leading-3">
                        <p className="font-bold text-xl">CINTARA SURYA PALOH</p>
                        <p>Memindahkan Indonesia ke Isekai</p>
                      </div>
                      <div>
                        <p className="font-bold">Partai Pengusung</p>
                        <ul className="list-disc ps-5">
                          <li>Partai Persatuan Monyet</li>
                          <li>Partai Sapi Perah Indonesia</li>
                          <li>Partai pisang masak</li>
                        </ul>
                      </div>
                    </div>
                    <div className=" bg-green-400 flex flex-col p-4 gap-3 rounded-lg">
                      <img className="h-52 object-cover" src={Onyet} alt="" />
                      <div className="text-center leading-3">
                        <p className="font-bold text-xl">CINTARA SURYA PALOH</p>
                        <p>Memindahkan Indonesia ke Isekai</p>
                      </div>
                      <div>
                        <p className="font-bold">Partai Pengusung</p>
                        <ul className="list-disc ps-5">
                          <li>Partai Persatuan Monyet</li>
                          <li>Partai Sapi Perah Indonesia</li>
                          <li>Partai pisang masak</li>
                        </ul>
                      </div>
                    </div>
                    <div className=" bg-yellow-400 flex flex-col p-4 gap-3 rounded-lg">
                      <img className="h-52 object-cover" src={Onyet} alt="" />
                      <div className="text-center leading-3">
                        <p className="font-bold text-xl">CINTARA SURYA PALOH</p>
                        <p>Memindahkan Indonesia ke Isekai</p>
                      </div>
                      <div>
                        <p className="font-bold">Partai Pengusung</p>
                        <ul className="list-disc ps-5">
                          <li>Partai Persatuan Monyet</li>
                          <li>Partai Sapi Perah Indonesia</li>
                          <li>Partai pisang masak</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Modal.Footer className="flex">
                    <Button
                      className="w-6/12 bg-white text-black border-4 border-green-900"
                      onClick={() => setOpenModal(false)}
                    >
                      RESET
                    </Button>
                    <Button
                      className="w-6/12 bg-green-900 border-4 text-white border-green-900"
                      color="gray"
                      onClick={() => setOpenModal(false)}
                    >
                      SUBMIT
                    </Button>
                  </Modal.Footer>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <CarouselComponent />
        </div>
        <div className="bg-white">
          <div className="container mx-auto">
            <p className="text-center text-red-600 md:text-3xl lg:text-5xl p-4 md:p-10 lg:p-16 font-bold ">
              PILIH BERDASARKAN GACHA TIDAK USAH SERIUS YANG PENTING TIDAK
              MELEGALKAN SLOT
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
