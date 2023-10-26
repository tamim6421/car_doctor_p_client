import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const CheckOut = () => {
    const {user} = useContext(AuthContext)
  const services = useLoaderData();
  const { title, _id, price, img } = services;


  const handleBookingService = event =>{
    event.preventDefault()
    const form = event.target 
    const name = form.name.value 
    const date = form.date.value
    const email = user?.email
    const booking = {
        customerName : name,
        email,
        date,
        img,
        service: title,
        service_id:_id,
        price: price
    }
    console.log(booking)

    fetch(`http://localhost:5000/bookings`,{
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.insertedId){
            alert('booking added')
        }
    })


  }


  return (
    <div>
    <div>
      <h1 className="text-3xl text-center">Book Service : {title} </h1>

  
            <form onSubmit={handleBookingService}  className="card-body">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Dew Amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  name="amount"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                
                </label>
              </div>
            </div>
              <div className="form-control mt-6">
               <input className="btn btn-block bg-orange-400" type="submit" value="Order Confirm" name="" id="" />
              </div>
            </form>
          </div>
          </div>
    
  );
};

export default CheckOut;
