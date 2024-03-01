import Onyet2 from "../assets/img/onyet2.png";
import Navbar from "../components/Navbar";

export default function AdminPage(props: any) {
  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section>
        <div className="container py-20 pt-32 bg-white mx-auto ">
          <h1 className="text-center font-bold text-2xl mb-10 lg:text-5xl">
            DASHBOARD
          </h1>
          <div className="justify-center items-center mx-4 lg:mx-20  grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 lg:w-16 lg:h-16 lg:text-4xl lg:leading-normal bg-amber-300 rounded-full text-center border-4 leading-8 font-bold text-sm border-black">
                1
              </div>
              <div className="bg-amber-300 p-5 text-center flex flex-col gap-4 rounded-lg shadow-md">
                <img src={Onyet2} alt="" />
                <div>
                  <p className="text-4xl font-black text-stroke">SURYA SURYA</p>
                  <p>Akumulasi: 45%</p>
                  <p>Jumlah vote: 117 Votes</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 lg:w-16 lg:h-16 lg:text-4xl lg:leading-normal bg-cyan-300 rounded-full text-center border-4 leading-8 font-bold text-sm border-black">
                2
              </div>
              <div className="bg-cyan-300 p-5 text-center flex flex-col gap-4 rounded-lg shadow-md">
                <img src={Onyet2} alt="" />
                <div>
                  <p className="text-4xl font-black text-stroke">SURYA SURYA</p>
                  <p>Akumulasi: 45%</p>
                  <p>Jumlah vote: 117 Votes</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-10 h-10 lg:w-16 lg:h-16 lg:text-4xl lg:leading-normal bg-red-500 rounded-full text-center border-4 leading-8 font-bold text-sm border-black">
                3
              </div>
              <div className="bg-red-500  p-5 text-center flex flex-col gap-4 rounded-lg shadow-md">
                <img src={Onyet2} alt="" />
                <div>
                  <p className="text-4xl font-black text-stroke">SURYA SURYA</p>
                  <p>Akumulasi: 45%</p>
                  <p>Jumlah vote: 117 Votes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-52 mx-auto px-4 text-center lg:text-start text-xs lg:text-xl">
          <h1 className="text-center text-5xl font-bold mb-14">LIST VOTER</h1>
          <div className="">
            <table className="mx-auto">
              <caption className="text-start caption-bottom pt-10 font-bold">
                TOTAL SUARA TERKUMPUL: 100 VOTERS
              </caption>
              <thead className=" bg-slate-200">
                <tr>
                  <th className="border border-black p-2 lg:w-20  ...">No</th>
                  <th className="border border-black p-2 lg:w-52 ...">Nama</th>
                  <th className="border border-black p-2 lg:w-52 ...">
                    Alamat
                  </th>
                  <th className="border border-black p-2 lg:w-52 ...">
                    Jenis Kelamin
                  </th>
                  <th className="border border-black p-2 lg:w-52 ...">
                    Paslon
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border border-black p-2  ...">1</td>
                  <td className="border border-black p-2 ...">
                    Sugeng No Pants
                  </td>
                  <td className="border border-black p-2 ...">Cileungsi</td>
                  <td className="border border-black p-2 ...">Laki Laki</td>
                  <td className="border border-black p-2 ...">Paloh</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 ...">1</td>
                  <td className="border border-black p-2 ...">
                    Sugeng No Pants
                  </td>
                  <td className="border border-black p-2 ...">Cileungsi</td>
                  <td className="border border-black p-2 ...">Laki Laki</td>
                  <td className="border border-black p-2 ...">Paloh</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 ...">1</td>
                  <td className="border border-black p-2 ...">
                    Sugeng No Pants
                  </td>
                  <td className="border border-black p-2 ...">Cileungsi</td>
                  <td className="border border-black p-2 ...">Laki Laki</td>
                  <td className="border border-black p-2 ...">Paloh</td>
                </tr>
                <tr>
                  <td className="border border-black p-2 ...">1</td>
                  <td className="border border-black p-2 ...">
                    Sugeng No Pants
                  </td>
                  <td className="border border-black p-2 ...">Cileungsi</td>
                  <td className="border border-black p-2 ...">Laki Laki</td>
                  <td className="border border-black p-2 ...">Paloh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
