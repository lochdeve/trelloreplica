import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';
import { TbBellRinging2 } from 'react-icons/tb';
import './navBar.css';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='leftmenu'>
        <GiHamburgerMenu height={60} width={60} color='#9fadbc' />
        <Image
          src={'trelloreplica/trello.png'}
          width={100}
          height={30}
          alt='Trollo'
        />
        <div className='nav-links'>
          <div className='link'>
            <span>Espacios de trabajo </span>
            <AiOutlineDown color='#9fadbc' className='link-icon' />
          </div>
          <div className='link'>
            <span>Reciente </span>
            <AiOutlineDown color='#9fadbc' className='link-icon' />
          </div>
        </div>
      </div>
      <div className='rightmenu'>
        <div className='input'>
          <IoSearch color='#9fadbc' className='input-icon' />
          <input type='text' placeholder='Buscar' className='search' />
        </div>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            backgroundColor: '#579CFE',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
          }}
        >
          <TbBellRinging2 color='black' height={30} />
        </div>
        <FaRegQuestionCircle color='#9fadbc' />
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: '50%',
            backgroundColor: '#01A3BE',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'black',
            fontSize: 10,
            marginRight: 10,
          }}
        >
          E
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
