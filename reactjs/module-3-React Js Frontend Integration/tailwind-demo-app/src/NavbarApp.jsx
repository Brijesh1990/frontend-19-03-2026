import React from 'react'
import { FaUser,FaGlobe, FaShoppingBag } from 'react-icons/fa'
export default function NavbarApp() {
return (

<>
<main className='w-full bg-black top-0 sticky z-10'>
<nav className='text-white p-2  grid grid-cols-2'>
<div className='w-1/3'>
<a href='' className='w-1/2'> 
<FaGlobe className='text-7xl' />
</a>
</div>

<div className='w-full'>
<ul className='gap-8 inline-flex p-5'>
<li><a href=''>Home</a></li>
<li><a href=''>feedback</a></li>
<li><a href=''>about</a></li>

<li className="relative group">
<a href="#" className="inline-flex items-center gap-1 py-0">
Gallery
<svg
className="h-4 w-4 transition-transform group-hover:rotate-180"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
strokeWidth={2}
d="m19 9-7 7-7-7"
/>
</svg>
</a>
<ul className="absolute left-0 top-full z-50 hidden min-w-40 rounded-md bg-white py-2 shadow-lg group-hover:block">
<li>
<a
href="/gallery/photos"
className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
Photos
</a>
</li>
<li>
<a
href="/gallery/videos"
className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
Videos
</a>
</li>
<li>
<a
href="/gallery/events"
className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
Events
</a>
</li>
</ul>
</li>

<li><a href=''>services</a></li>
<li><a href=''>Cart <FaShoppingBag className='inline-flex' /> <span className='bg-red-600 p-1 rounded-full w-1 h-1'>0</span> </a></li>
</ul>
</div> 
</nav>
</main>
</>

)
}
