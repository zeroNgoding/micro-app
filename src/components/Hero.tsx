import DW from "../assets/img/DW.png";
import Kotak from "../assets/img/kotak.png";

export default function Hero() {
  return (
    <section className="mt-24">
      <div
        className="container mx-auto text-white leading-none lg:rounded-[15px] md:rounded-[15px] "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(117, 6, 6, 0.75) ,rgba(92, 30, 3, 1)",
        }}
      >
        <div className="flex flex-wrap">
          <div className="w-full self-center relative">
            <img
              src={DW}
              className="w-52 opacity-25 p-0 m-0 lg:w-96 md:w-60"
              alt=""
            />
            <img
              src={Kotak}
              className="w-28 md:w-36 lg:w-72 absolute top-0 end-5"
              alt=""
            />
            <div className="p-4 pt-10 lg:pt-20 lg:pb-14 lg:ps-10 md:ps-8">
              <p className="text-2xl md:text-5xl md:leading-10  lg:text-7xl font-bold leading-5 lg:leading-none">
                SELAMAT DATANG
              </p>
              <p className="font-bold text-sm md:text-base leading-5 lg:text-3xl lg:leading-6">
                PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR
              </p>
              <p className="font-bold leading-3 md:text-base md:leading-3 text-sm lg:text-3xl lg:leading-9">
                DIPILIH MELALUI SEBUAH ARTI NAMA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
