import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
      <nav className='flex justify-between w-7xl mx-auto p-5'>
        <ul className='flex justify-between  gap-4 '>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/destinations'>Destinations</Link></li>
          <li><Link href='/my_bookings'>My Bookings</Link></li>
          <li><Link href='/admin'>Admin</Link></li>
        </ul>
        <div>
          <Image 
          src={'/assets/Wanderlast.png'}
          height={200}
          width={200}
          alt='logo'
          />
        </div>
<ul className='flex justify-between gap-4'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/destinations'>Destinations</Link></li>
          <li><Link href='/my_bookings'>My Bookings</Link></li>
          <li><Link href='/admin'>Admin</Link></li>
        </ul>

      </nav>
    
  );
};

export default Navbar;