import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders';
import { FaSignInAlt } from 'react-icons/fa'; // Импортируйте нужную иконку



const Navbar = () => {
    const session = {};
  return (
    <nav className="flex justify-between items-center px-4 h-20 shadow-sm">
      <div className="flex-1 flexStart gap-10">
        <Link href='/'>
            <Image src="/logo medevent 53.svg"
            width={115}
            height={43}
            alt="MedEventPlanic"
            />
        </Link> 
        <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map((link) => (
                <Link href={link.href} key={link.key}>
                  
                {link.text}
                </Link>
            ))}
        </ul>
        
      </div>
      
<button className="enter px-4 py-2 text-white rounded flex items-center">
    <FaSignInAlt className="mr-2" /> {/* Иконка справа от текста */}
    Войти
</button>
  
    </nav>
  )

}
export default Navbar
