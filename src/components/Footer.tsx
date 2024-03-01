import LogoBig from "../assets/img/LogoBig.png";

export default function Footer() {
  return (
    <footer>
      
      <div className="bg-black text-white pt-4">
        <div className="container   mx-auto p-4">
          <div className="flex lg:w-4/12	 gap-7 items-center mb-4">
            <img src={LogoBig} alt="" />
            <div>
              <p className="font-bold">DUMBWAYS.ID</p>
              <p>
                Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
                Banten 15413
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="container text-center mx-auto text-xs lg:text-base p-3">
          Komisi Pemilihan Umum DumbWays.ID | abdullatiff 2024
        </p>
      </div>
    </footer>
  );
}
