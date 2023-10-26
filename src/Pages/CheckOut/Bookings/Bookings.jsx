import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {

    // using axios 
    axios.get(url, {withCredentials: true})
    .then(data => {
        setBookings(data.data)
    })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);

  console.log(bookings);


  const handleDelete = (id) =>{
    console.log(id)
    const proceed = confirm('are you sure')
    if(proceed){

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.deletedCount > 0){
                alert('booking delete')
                const remaining = bookings.filter(booking => booking._id !== id)
                setBookings(remaining)
            }
        })
    }
  }

const handleConfirm = (id) =>{
// console.log(id)
fetch(`http://localhost:5000/bookings/${id}`,{
        method:"PATCH",
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0) {

          alert('confirm')
          const remaining = bookings.filter(booking => booking._id !== id)
          const update = bookings.find(booking => booking._id === id)
          update.status = 'confirm'
          const newBooking = [update, ...remaining]
          setBookings(newBooking)
        }
    })
}


  return (
    <div>
      <h1> Total Booking : {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th> Date</th>
              <th> email</th>
              <th>Price</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
          
            {
                bookings.map(booking => <BookingRow
                     key={booking._id} 
                     booking={booking}
                     handleDelete = {handleDelete}
                     handleConfirm = {handleConfirm}
                     ></BookingRow>)
            }
          </tbody>
        
        </table>
      </div>
    </div>
  );
};

export default Bookings;
