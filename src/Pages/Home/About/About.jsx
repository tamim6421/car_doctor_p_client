import person from "../../../assets/images/about_us/person.jpg";
import pars from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col gap-6 lg:flex-row">
         <div className="lg:w-1/2 relative">
         <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={pars} className="w-1/2 absolute right-0 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
         </div>
          <div className="lg:w-1/2 space-y-5 p-3">
            <h1 className="text-2xl font-semibold text-orange-500">About Us</h1>
            <h1 className="text-5xl font-bold">We are Qualified <br /> and experience <br /> in this field</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.  quasi. In deleniti eaque aut repudiandae In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-warning">get more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
