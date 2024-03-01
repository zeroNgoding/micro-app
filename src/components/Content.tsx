import { Link } from "react-router-dom";
import Image from "../assets/img/image.png";

export default function Content() {
  return (
    <section className="pt-16">
      <div className="container mx-auto mb-16">
        <div className="w-full px-4 grid grid-cols-3 gap-4">
          <div className="relative  col-span-3 lg:col-span-2 lg:h-[470px]">
            <img
              src={Image}
              className="lg:w-full lg:h-full object-cover"
              alt=""
            />
            <span className="font-semibold text-white text-sm lg:text-3xl bg-red-600 p-2 rounded-lg absolute bottom-14 left-4 lg:bottom-24">
              SENIN, 03 JAN 2023
            </span>
            <Link
              to={"/detail-page"}
              className=" font-bold lg:text-4xl text-white absolute bottom-7 lg:bottom-12 left-4"
            >
              <p>KPU TETAPKAN 3 MENTOR TERBAIK</p>
            </Link>
            <span className="absolute bottom-3 lg:bottom-6 lg:text-xl text-sm text-white left-4 text-lg text-slate-200 font-medium">
              Super Admin
            </span>
          </div>

          {/* display mobile */}
          <div className="lg:hidden col-span-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white text-black">
                <div>
                  <img src={Image} className="w-full" alt="" />
                </div>
                <div className="p-2 md:pt-5">
                  <p className="font-semibold text-white md:text-lg text-[8px] bg-red-600 p-1 rounded-lg inline">
                    SENIN, 03 JAN 2023
                  </p>
                  <p className="lg:text-4xl text-sm md:text-3xl md:my-2 font-bold ">
                    <Link to="/detail-page">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
                  </p>
                  <p className="text-[8px] md:text-lg font-medium">
                    Super Admin
                  </p>
                </div>
              </div>
              <div className="bg-white text-black">
                <div>
                  <img src={Image} className="w-full" alt="" />
                </div>
                <div className="p-2 md:pt-5">
                  <p className="font-semibold text-white md:text-lg text-[8px] bg-red-600 p-1 rounded-lg inline">
                    SENIN, 03 JAN 2023
                  </p>
                  <p className="lg:text-4xl text-sm md:text-3xl md:my-2 font-bold ">
                    <Link to="/detatil-page">
                      KPU TETAPKAN 3 MENTOR TERBAIK
                    </Link>
                  </p>
                  <p className="text-[8px] md:text-lg font-medium">
                    Super Admin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* display desktop */}
          <div className="bg-white hidden lg:block text-black col-span-3 lg:col-span-1 lg:h-[470px]">
            <div>
              <img src={Image} className="w-full" alt="" />
            </div>
            <div className="p-3  pt-5">
              <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
                SENIN, 03 JAN 2023
              </p>
              <p className="lg:text-4xl text-3xl font-bold my-3">
                <Link to="/detail-page">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
              </p>
              <p className="text-lg font-medium">Super Admin</p>
            </div>
          </div>
          <div className="bg-white hidden lg:block text-black col-span-3 lg:col-span-1 lg:h-[470px]">
            <div>
              <img src={Image} className="w-full" alt="" />
            </div>
            <div className="p-3  pt-5">
              <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
                SENIN, 03 JAN 2023
              </p>
              <p className="lg:text-4xl text-3xl font-bold my-3">
                <Link to="/detail-page">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
              </p>
              <p className="text-lg font-medium">Super Admin</p>
            </div>
          </div>
          <div className="bg-white hidden lg:block text-black col-span-3 lg:col-span-1 lg:h-[470px]">
            <div>
              <img src={Image} className="w-full" alt="" />
            </div>
            <div className="p-3  pt-5">
              <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
                SENIN, 03 JAN 2023
              </p>
              <p className="lg:text-4xl text-3xl font-bold my-3">
                <Link to="/detail-page">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
              </p>
              <p className="text-lg font-medium">Super Admin</p>
            </div>
          </div>
          <div className="bg-white hidden lg:block text-black col-span-3 lg:col-span-1 lg:h-[470px]">
            <div>
              <img src={Image} className="w-full" alt="" />
            </div>
            <div className="p-3  pt-5">
              <p className="font-semibold text-white text-lg bg-red-600 p-2 rounded-lg inline">
                SENIN, 03 JAN 2023
              </p>
              <p className="lg:text-4xl text-3xl font-bold my-3">
                <Link to="/detail-page">KPU TETAPKAN 3 MENTOR TERBAIK</Link>
              </p>
              <p className="text-lg font-medium">Super Admin</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto">
          <p className="text-center md:text-3xl lg:text-5xl p-4 md:p-10 lg:p-16 font-bold ">
            PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN
            MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT
          </p>
        </div>
      </div>
    </section>
  );
}
