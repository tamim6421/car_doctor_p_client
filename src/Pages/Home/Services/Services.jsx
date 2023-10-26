import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [services, setServices] = useState([])
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    } ,[])
    return (
        <div>
           <div className="my-20">
           <h3 className="text-4xl text-orange-500  text-center font-semibold">Our Services</h3>
            <p className="w-2/3 mx-auto mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque atque, natus voluptatibus veritatis assumenda deleniti soluta eveniet quam obcaecati eius neque. Mollitia, quo aliquid. Est blanditiis quod distinctio debitis.</p>
           </div>

           <div>
            <p>Total Services: {services.length}</p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {
                services?.map((service, i) => <ServicesCard key={i} service = {service}></ServicesCard> )
            }
          </div>
           </div>
        </div>
    );
};

export default Services;