import { DashboardType } from '@/app/types';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';
import { IoFilterSharp } from 'react-icons/io5';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { RiGroupLine } from 'react-icons/ri';
import { SlOptions } from 'react-icons/sl';
import { TiThListOutline } from 'react-icons/ti';
import useResponsive from '../../hooks/useResponsive';
import './index.css';

type ToolBarProps = {
  dashboardInfo: DashboardType;
};

const ToolBar: React.FC<ToolBarProps> = ({ dashboardInfo }) => {
  const { isSmallScreen } = useResponsive();
  return (
    <div className='toolbar'>
      <div className='left-side'>
        <span className='dashboard-title'>{dashboardInfo.name}</span>
        <button className='favorite-button'>
          <FaRegStar color='white' />
        </button>
        <button className='toolbar-button'>
          {isSmallScreen ? (
            <RiGroupLine />
          ) : (
            <>
              <RiGroupLine /> Visible para el Espacio de trabajo
            </>
          )}
        </button>
        <button className='dash-button'>
          <span
            style={{
              marginRight: '5px',
              marginLeft: '5px',
            }}
          >
            <TiThListOutline />
          </span>
          Tablero
        </button>
        <button className='list-button'>
          <IoIosArrowDown />
        </button>
      </div>
      <div className='right-side'>
        <button className='toolbar-button'>
          {isSmallScreen ? (
            <HiOutlineRocketLaunch color='white' />
          ) : (
            <>
              <HiOutlineRocketLaunch color='white' />
              <span
                style={{
                  marginLeft: '5px',
                }}
              >
                Power-Ups
              </span>
            </>
          )}
        </button>
        <button className='toolbar-button'>
          {isSmallScreen ? (
            <BsFillLightningChargeFill />
          ) : (
            <>
              <BsFillLightningChargeFill />
              <span
                style={{
                  marginLeft: '5px',
                }}
              >
                Automatización
              </span>
            </>
          )}
        </button>
        <button className='toolbar-button'>
          <IoFilterSharp />
          <span
            style={{
              marginLeft: '5px',
            }}
          >
            Filtros
          </span>
        </button>
        <div
          style={{
            height: '30%',
            width: '0.5px',
            backgroundColor: '#366588',
          }}
        ></div>
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
        <button className='dash-button'>
          <MdPersonAddAlt1 />
          <span
            style={{
              marginLeft: '5px',
            }}
          >
            Compartir
          </span>
        </button>
        <button className='toolbar-button'>
          <SlOptions />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
