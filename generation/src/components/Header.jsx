import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = (props) => {
  const [dropdown, setDropdown] = useState(false);
  console.log(props.userInfo);
  return (
    <>
      <div className='w-full relative h-16 bg-gray-200 border-b border-red-200 px-5 flex justify-between items-center'>
        <div className='flex justify-start gap-20 items-center'>
          <h1 className='text-3xl text-white-400  '>GoodWall</h1>
        </div>
        <div className='hidden md:flex justify-center items-center'>
          <ul className='flex gap-8  text-2xl'>
            
            <li>
              <Link to='/' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Aboutus</Link>
            </li>
            <li>
              <Link to='/news' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">News</Link>
            </li>
            <li>
              <Link to='/partner' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg">Partner</Link>
            </li>
            <li>
              <Link to='/login' className="bg-green-400 hover:text-red-200 px-4 py-2 rounded-lg">Login</Link>
            </li>
            <li>
              <Link to='/join' className="bg-gray-600 hover:text-red-500 text-white  px-4 py-2 rounded-lg">Join</Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden flex items-center'>
          {dropdown ? (
            <IoMdClose
              className='text-white text-3xl cursor-pointer'
              onClick={() => setDropdown(false)}
            />
          ) : (
            <FaBars
              className='text-white text-3xl cursor-pointer'
              onClick={() => setDropdown(true)}
            />
          )}
        </div>
      </div>
      {dropdown && (
        <div className='w-full bg-red-400 flex flex-col items-center md:hidden'>
          <ul className='flex flex-col gap-4 text-white text-2xl'>
          
            <li>
              <Link to='/aboutus' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Aboutus</Link>
            </li>
            <li>
              <Link to='/news' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>News</Link>
            </li>
            <li>
              <Link to='/partner' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Partner</Link>
            </li>
            <li>
              <Link to='/login' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Login</Link>
            </li>
            <li>
              <Link to='/join' className="hover:text-red-500 hover:bg-gray-200 px-4 py-2 rounded-lg" onClick={() => setDropdown(false)}>Join</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
