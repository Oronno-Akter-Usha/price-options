import { useState } from "react";
import Link from "../Link/Link";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'NotFound', path: '*' }
  ];

  return (
    <nav className="text-black p-6 bg-[#0000ff22]   shadow-lg"> 
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
          open == true ?
          <IoMdClose></IoMdClose> 
           : <MdMenu></MdMenu>
        }
        
      </div>
      <ul className={`md:flex absolute  md:static p-6 duration-1000
        ${open ? 'top-16' :  '-top-60'}
       bg-[#0000ff22] px-6`}>
        {
          routes.map(routes => <Link key={routes.id} routes={routes}></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;