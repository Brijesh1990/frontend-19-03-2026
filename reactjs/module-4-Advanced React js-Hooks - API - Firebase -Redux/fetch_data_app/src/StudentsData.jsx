import React,{useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Data from './Data';
export default function StudentsData() {
useEffect(() => {
AOS.init({
duration: 1000,
easing: "ease-in-out",
once: true,
offset: 100
});
}, []);
return (
<div className="container py-5">

<h1 className="text-center mb-5 fs-1" data-aos="fade-down"  style={{fontSize:"100px",fontWeight:"bolder"}}>
Student Gallery
</h1>

<div className="row g-4">
{Data && Data.map((row)=>{
return(
<>
<div className="col-md-3" data-aos="fade-up">
<div className="card p-0 text-center">
<h3><img src={row.image}  className='img-fluid w-100'/></h3>
<p><b>Name : </b>Aarav Patel</p>
</div>
</div>

</>
) 
})}


</div>

</div>
)
}
