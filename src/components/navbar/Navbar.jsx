import { Mail, Person } from '@material-ui/icons';
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
            <Person className='icon' />
            <span>+233542831189</span>
          </div>
          <div className='personalDetails'>
            <Mail className='icon' />
            <span>adonuernest@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={()=> setExpandMenu(!expandMenu)}>
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
