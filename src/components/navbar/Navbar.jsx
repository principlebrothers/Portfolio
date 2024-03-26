import { FaAngellist } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ImLinkedin } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';
import './Navbar.scss';

function Navbar({expandMenu, setExpandMenu}) {
  return (
    <article className={'navbar ' + (expandMenu && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            {'<Ernest A. />'}
          </a>
          <div className='socialMedia'>
            <FaAngellist className='icon' />
            <span>
              <a href='https://angel.co/u/ernest-anyewe-adonu'>Wellfound</a>
            </span>
          </div>
          <div className='socialMedia'>
            <SiGmail className='icon' />
            <span>
              <a href='mailto:adonuernest@gmail.com'>Gmail</a>
            </span>
          </div>
          <div className='socialMedia'>
            <ImLinkedin className='icon' />
            <span>
              <a href='https://www.linkedin.com/in/ernest-anyewe-adonu'>
                LinkendIn
              </a>
            </span>
          </div>
          <div className='socialMedia'>
            <FaTwitterSquare className='icon' />
            <span>
              <a href='https://twitter.com/adonu_ernest'>Twitter</a>
            </span>
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
