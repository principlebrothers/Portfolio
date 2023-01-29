import Menulinks from '../menulinks/Menulinks';
import './Menu.scss'

function Menu({expandMenu, setExpandMenu}) {
  return (
    <div className={'menu ' + (expandMenu && 'active')}>
      <ul>
        <Menulinks expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
      </ul>
    </div>
  );
}

export default Menu