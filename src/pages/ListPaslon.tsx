import { useEffect, useState } from "react";
import Onyet from "../assets/img/onyet.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";

export default function ListPaslon(props: any) {
  const dataString: any = localStorage.getItem("UserSignIn");
  const userLogin = JSON.parse(dataString);
  const [paslon, setPaslon] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/paslons");
        setPaslon(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(paslon);

  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section className=" bg-white h-screen">
        <div className="container mx-auto px-4 lg:text-start text-xs lg:text-base py-52">
          <h1 className="text-center text-5xl font-bold mb-14">LIST PASLON</h1>
          <div className="w-1/2 mx-auto">
            <table className="mx-auto	">
              <thead className=" bg-slate-200">
                <tr>
                  <th className="border border-black lg:w-20  ...">No. Urut</th>
                  <th className="border border-black lg:p-2 lg:w-52 ...">
                    Image
                  </th>
                  <th className="border border-black lg:p-2 lg:w-52 ...">
                    Name
                  </th>
                  <th className="border border-black lg:p-2 p-1 ...">
                    Visi & Misi
                  </th>
                  <th className="border border-black lg:p-2  ...">Koalisi</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {paslon?.map((p: any, i: any) => {
                  return (
                    <tr>
                      <td className="border border-black lg:p-2 text-center font-bold  ...">
                        {p.no_urut}
                      </td>
                      <td className="border border-black lg:p-2 ...">
                        <img src={Onyet} className="w-20 mx-auto" alt="" />
                      </td>
                      <td className="border border-black lg:p-2 ...">
                        {p.name}
                      </td>
                      <td className="border border-black lg:p-2 ...">
                        <ul className="list-disc ms-5">
                          <li>{p.vm}</li>
                        </ul>
                      </td>
                      <td className="border border-black lg:p-2 p-2 ...">
                        <ul className="list-disc ms-5">
                          {p.partai?.map((p: any, i: any) => {
                            return <li>{p.name}</li>;
                          })}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {userLogin?.listas === "admin" && (
              <button
                onClick={() => navigate("/add-paslon")}
                className="ms-10 mt-10 bg-black text-white px-2 py-1 rounded-lg"
              >
                Add Paslon
              </button>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
