
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const{img, price, title, _id} = service
//   console.log(service);


  const handleBooking = (id) =>{
    console.log(id)
  }
  return (
    <div>
      <div className="card  shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-start text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-400"> $ {price}</p>
          <div className="card-actions ">
            <Link to={`/booking/${_id}`}>
            <button className=" btn btn-square bg-orange-400 text-white btn-outline"> <FaArrowRight></FaArrowRight> </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
