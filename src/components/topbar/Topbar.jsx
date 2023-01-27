import './Topbar.scss';

function Topbar() {
  return (
    <article className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            logo
          </a>
        </div>
        <div className='right'>
          <div className='hamburger'></div>
        </div>
      </div>
    </article>
  );
}

export default Topbar;
