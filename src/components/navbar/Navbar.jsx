import { BsFillFilePersonFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import './Navbar.scss';

function Navbar({expandMenu, setExpandMenu}) {
  return (
    <article className={'navbar ' + (expandMenu && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            Ernest A. A.
          </a>
          <div className='personalDetails'>
            <BsFillFilePersonFill className='icon' />
            <span>+233542831189</span>
          </div>
          <div className='personalDetails'>
            <SiGmail className='icon' />
            <span>adonuernest@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setExpandMenu(!expandMenu)}>
            <span className='row1'></span>
            <span className='row2'></span>
            <span className='row3'></span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Navbar;
