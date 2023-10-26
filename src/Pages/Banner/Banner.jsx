
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div>
             <div className="carousel h-[650px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full rounded-lg" />
    <div className="absolute flex items-center rounded-lg bg-gradient-to-r h-full from-[#1f1e1e] to[rgba(21, 21, 21, 0)] ">
            <div className='text-white space-y-5 pl-7 w-1/2'>
                <h2 className='text-5xl  font-semibold'>AFFORDABLE PRICE FOR CAR SERVICING</h2>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum corrupti re numquamaerat?</p>
                <div>
                <button className="btn btn-outline btn-secondary mr-4">Primary</button>
                <button className="btn btn-error">Error</button>
                </div>
            </div>
    </div>
    <div className="absolute flex justify-end gap-5  bottom-5 right-4 ">
      <a href="#slide4" className="btn btn-sm bg-rose-400 text-white btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-sm bg-rose-400 text-white btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={banner2} className="w-full rounded-lg" />
    <div className="absolute flex items-center rounded-lg bg-gradient-to-r h-full from-[#1f1e1e] to[rgba(21, 21, 21, 0)] ">
            <div className='text-white space-y-5 pl-7 w-1/2'>
                <h2 className='text-5xl  font-semibold'>AFFORDABLE PRICE FOR CAR SERVICING</h2>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum corrupti re numquamaerat?</p>
                <div>
                <button className="btn btn-outline btn-secondary mr-4">Primary</button>
                <button className="btn btn-error">Error</button>
                </div>
            </div>
    </div>
    <div className="absolute flex justify-end gap-5  bottom-5 right-4 ">
      <a href="#slide1" className="btn btn-sm bg-rose-400 text-white btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-sm bg-rose-400 text-white btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={banner3} className="w-full rounded-lg" />
    <div className="absolute flex items-center rounded-lg bg-gradient-to-r h-full from-[#1f1e1e] to[rgba(21, 21, 21, 0)] ">
            <div className='text-white space-y-5 pl-7 w-1/2'>
                <h2 className='text-5xl  font-semibold'>AFFORDABLE PRICE FOR CAR SERVICING</h2>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum corrupti re numquamaerat?</p>
                <div>
                <button className="btn btn-outline btn-secondary mr-4">Primary</button>
                <button className="btn btn-error">Error</button>
                </div>
            </div>
    </div>
    <div className="absolute flex justify-end gap-5  bottom-5 right-4 ">
      <a href="#slide2" className="btn btn-sm bg-rose-400 text-white btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-sm bg-rose-400 text-white btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={banner4} className="w-full rounded-lg" />
    <div className="absolute flex items-center rounded-lg bg-gradient-to-r h-full from-[#1f1e1e] to[rgba(21, 21, 21, 0)] ">
            <div className='text-white space-y-5 pl-7 w-1/2'>
                <h2 className='text-5xl  font-semibold'>AFFORDABLE PRICE FOR CAR SERVICING</h2>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ipsum corrupti re numquamaerat?</p>
                <div>
                <button className="btn btn-outline btn-secondary mr-4">Primary</button>
                <button className="btn btn-error">Error</button>
                </div>
            </div>
    </div>
    <div className="absolute flex justify-end gap-5  bottom-5 right-4 ">
      <a href="#slide3" className="btn btn-sm bg-rose-400 text-white btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-sm bg-rose-400 text-white btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;