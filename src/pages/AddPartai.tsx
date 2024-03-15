import { useEffect, useState } from "react";
import Onyet from "../assets/img/onyet.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { API } from "../config/api";
import { useNavigate } from "react-router-dom";

export default function AddPartai(props: any) {
  const [paslon, setPaslon] = useState<any>();
  const navigate = useNavigate();
  const [preview, setPreview] = useState<any>(null);

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

  const [partai, setPartai] = useState({
    name: "",
    chairman: "",
    vm: "",
    address: "",
    logo: "",
    paslon: 0,
  });

  const handleOnSubmit = async (e: any) => {
    try {
      e.preventDefault();
      await API.post("/partai", partai);
      alert("Add Partai succses!");
      navigate("/list-partai");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e: any) => {
    if (e.target.type === "file") {
      setPartai({
        ...partai,
        [e.target.name]: e.target.files[0],
      });
    }
    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
    setPartai({
      ...partai,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section className=" bg-white h-screen pt-52">
        <div className="container mx-auto">
          <h1 className="text-center font-bold text-2xl lg:mb-10 lg:text-5xl">
            Add Partai
          </h1>

          <form
            onSubmit={handleOnSubmit}
            className="grid grid-cols-3 px-4 gap-5 lg:w-[1000px] mx-auto"
          >
            <div className="flex flex-col gap-2 items-center lg:items-start">
              <div className="h-full w-full mt-2">
                <img
                  src={preview ? preview : Onyet}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* )} */}
              <label
                htmlFor="logo"
                className="block text-lg font-medium text-gray-700 w-full mb-2 cursor-pointer"
              >
                <span className="bg-black text-white p-1 w-full text-center lg:py-3 text-xs lg:text-base rounded inline-block">
                  Upload Image
                </span>
                <input
                  name="logo"
                  type="file"
                  id="logo"
                  // accept="image/*"
                  className="hidden"
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <label
                  className="font-semibold text-sm lg:text-xl"
                  htmlFor="name"
                >
                  Nama
                </label>
                <input
                  onChange={handleOnChange}
                  className=" lg:h-12 border-2 w-full rounded-lg border-lime-700"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm lg:text-xl"
                  htmlFor="chairman"
                >
                  Ketua Umum
                </label>
                <input
                  onChange={handleOnChange}
                  className="lg:h-12 border-2 w-full rounded-lg border-lime-700"
                  type="text"
                  id="chairman"
                  name="chairman"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm lg:text-xl"
                  htmlFor="vm"
                >
                  Visi & Misi
                </label>
                <textarea
                  onChange={handleOnChange}
                  className="border-2  lg:h-24 lg:resize-none w-full rounded-lg  border-lime-700"
                  name="vm"
                  id="vm"
                ></textarea>
              </div>
              <div>
                <label
                  className="font-semibold text-sm lg:text-xl"
                  htmlFor="address"
                >
                  Alamat
                </label>
                <textarea
                  onChange={handleOnChange}
                  className="border-2  lg:h-24 lg:resize-none w-full rounded-lg  border-lime-700"
                  name="address"
                  id="address"
                  value={partai.address}
                ></textarea>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="font-semibold text-sm lg:text-xl"
                  htmlFor="paslon"
                >
                  Paslon
                </label>
                <select
                  onChange={handleOnChange}
                  className="border p-1 border-black rounded"
                  name="paslon"
                  id="paslon"
                >
                  <option value=""></option>
                  {paslon?.map((p: any, i: any): any => {
                    return (
                      <option key={i} value={p.id}>
                        No. Urut: {p.no_urut}. {p.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <button
              className="col-span-3 text-white py-2 rounded-lg"
              style={{ background: "rgba(94, 90, 0, 1)" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
