import Image from "../assets/img/image.png";
import Arrow from "../assets/img/arrow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function DetailPage(props: any) {
  return (
    <>
      <Navbar
        userSignIn={props.userSignIn}
        setUserSignIn={props.setUserSignIn}
      />
      <section>
        <div className="container bg-white mt-14 mx-auto justify-center">
          <div className=" relative justify-center items-center">
            <h1 className="pt-5 pb-10 text-center">BERITA HARI INI</h1>
            <Link
              to="/"
              className="absolute top-6 left-4  fixed-child flex items-center gap-1 md:gap-2 md:left-8 md:top-4"
            >
              <img className="w-2 h-2 md:w-3 md:h-3" src={Arrow} alt="" />
              <p className="text-xs md:text-sm lg:text-base">beranda</p>
            </Link>
          </div>
          <div className="w-full items-center flex flex-col justify-center px-4 lg:px-12 md:px-8">
            <h1 className="font-bold text-sm md:text-2xl lg:text-4xl text-center">
              KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK
            </h1>

            <p className="text-xs md:text-sm lg:text-base">SUPER ADMIN</p>
            <p className="text-xs md:text-sm lg:text-base">
              Senin, 03 Januari 2023
            </p>
            <img className="py-5 w-full" src={Image} alt="" />
            <p className=" text-justify text-xs md:text-sm lg:text-base pb-14">
              Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut
              efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus
              tellus. Proin fermentum purus id lectus imperdiet, vel feugiat
              enim interdum. Sed non diam vel mi tristique interdum. Integer
              bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu
              dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet
              congue massa. Suspendisse potenti. Sed interdum, lacus ac ultrices
              facilisis, ligula enim pellentesque elit, vel varius nisi odio at
              purus. Sed suscipit purus quis tortor posuere, in varius est
              euismod. Mauris aliquam urna non elit faucibus, eu fermentum
              turpis mattis. Quisque vel nisl vitae sapien congue dapibus.
              Vivamus auctor, velit ut condimentum bibendum, purus lacus
              scelerisque ligula, nec gravida arcu velit id libero. In hac
              habitasse platea dictumst. <br /> <br />
              Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi
              ut turpis malesuada aliquam a eu orci. Maecenas ut purus eu sapien
              vestibulum vulputate. Fusce tincidunt fringilla arcu, non
              efficitur sapien scelerisque et. Maecenas facilisis eros id enim
              tincidunt, ac vestibulum quam fringilla. Nullam vel malesuada mi,
              vitae convallis libero. In hac habitasse platea dictumst. Duis
              cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer
              vitae ex ac libero fermentum volutpat ut vitae sapien. Aliquam id
              luctus nisl. Curabitur et augue ut justo tincidunt varius vel sit
              amet nunc. Integer tincidunt risus sit amet odio euismod, a
              finibus ligula blandit. Integer euismod, purus ut malesuada
              varius, lectus orci feugiat massa, ut egestas enim massa vel urna.{" "}
              <br /> <br /> Vivamus id dictum augue. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel
              tincidunt justo feugiat. Nam dapibus, ligula id dapibus fermentum,
              odio libero luctus nunc, et scelerisque sapien libero vel ante.
              Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam
              fermentum, felis ac bibendum malesuada, lectus felis fermentum
              dolor, a fermentum sapien mauris vel dui. Fusce vel turpis eu
              purus fermentum tincidunt a vel elit. Phasellus efficitur sapien
              vel efficitur rhoncus. Integer vel risus ut neque elementum
              gravida. Morbi rhoncus, ligula nec posuere tristique, ligula lacus
              dapibus urna, a lacinia sem metus id libero. Suspendisse luctus
              ligula eu mauris auctor, non semper elit feugiat. <br />
              <br />
              Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut
              efficitur dapibus. Sed a lacinia elit. Curabitur eu dapibus
              tellus. Proin fermentum purus id lectus imperdiet, vel feugiat
              enim interdum. Sed non diam vel mi tristique interdum. Integer
              bibendum, nulla ac euismod commodo, quam mi vehicula justo, eu
              dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet
              congue massa. Suspendisse potenti.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
