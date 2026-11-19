import React,{useState} from 'react'
import womens_loader from './womens_loader.gif'
export default function LoaderApp() {
const[loader,setLoader]=useState(false);
const handleClick =()=>{
    setLoader(true);
    setTimeout(()=>{
        setLoader(false);
    },8000);
}

return(
<>

<div className='app'>
<button type='button' onClick={handleClick}>Load Data</button>
<br /> <br />
{loader  ? <h2>Loader Loading........</h2> : <h2>Error Loading.........</h2> }

</div>
</>
)
}
