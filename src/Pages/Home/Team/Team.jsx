import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";

const Team = () => {
  return (
    <div>
        <h1 className="text-center text-3xl text-orange-400 my-20">Meet Out Team</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="card shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md. Jobbar</h2>
            <p>Engineer Expert</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md. Jobbar</h2>
            <p>Engineer Expert</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md. Jobbar</h2>
            <p>Engineer Expert</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
 