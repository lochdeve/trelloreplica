import Link from 'next/link';
import { useState } from 'react';
import { CiViewTable } from 'react-icons/ci';
import { IoIosSettings } from 'react-icons/io';
import { MdCalendarMonth, MdOutlinePersonOutline } from 'react-icons/md';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TiThListOutline } from 'react-icons/ti';
import './index.css';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div
      style={{
        height: '100%',
      }}
    >
      <button
        className={`sidebar-toogle ${
          isSidebarOpen ? 'sidebar-toogle-open' : ''
        }`}
        onClick={() => {
          console.log('click', isSidebarOpen);
          setIsSidebarOpen((prev) => !prev);
        }}
      >
        <RiArrowRightSLine size={18} color='#6F7B88' />
      </button>
      <nav
        className={`sidebar ${
          isSidebarOpen ? 'sidebar-open' : 'sidebar-close'
        }`}
      >
        <div className='sidebar-header'>
          <div className='sidebar-header-icon'>E</div>
          <span className='sidebar-header-title'>
            Espacio de trabajo de Trello
          </span>
        </div>
        <ul
          style={{
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px',
            listStyle: 'none',
          }}
        >
          <li>
            <Link
              href={'/'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <TiThListOutline color={'#6E7C8B'} />
              <span
                style={{
                  color: '#94a3b1',
                  fontSize: '14px',
                }}
              >
                Tableros
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <MdOutlinePersonOutline color={'#6E7C8B'} />
              <span
                style={{
                  color: '#94a3b1',
                  fontSize: '14px',
                }}
              >
                Miembros
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <IoIosSettings color={'#6E7C8B'} />
              <span
                style={{
                  color: '#94a3b1',
                  fontSize: '14px',
                }}
              >
                Ajustes del Espacio de trabajo
              </span>
            </Link>
          </li>
        </ul>
        <span
          style={{
            color: '#94a3b1',
            fontSize: '14px',
            margin: '15px',
          }}
        >
          Vistas del Espacio de trabajo
        </span>

        <ul
          style={{
            gap: '15px',
            display: 'flex',
            flexDirection: 'column',
            margin: '10px',
            listStyle: 'none',
          }}
        >
          <li>
            <Link
              href={'/'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <CiViewTable color={'#6E7C8B'} />
              <span
                style={{
                  color: '#94a3b1',
                  fontSize: '14px',
                  fontStyle: 'italic',
                }}
              >
                Tabla
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <MdCalendarMonth color={'#6E7C8B'} />
              <span
                style={{
                  color: '#94a3b1',
                  fontSize: '14px',
                  fontStyle: 'italic',
                }}
              >
                Calendario
              </span>
            </Link>
          </li>
        </ul>
        <span
          style={{
            color: '#94a3b1',
            fontSize: '14px',
            margin: '15px',
          }}
        >
          {' '}
          Sus tableros{' '}
        </span>
      </nav>
    </div>
  );
};

export default SideBar;
