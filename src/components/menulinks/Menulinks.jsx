function Menulinks({ expandMenu, setExpandMenu }) {
  return (
    <>
      {['#intro', '#portfolio', '#works', '#testimonials', '#contact'].map(
        (link) => (
          <li key={link} onClick={() => setExpandMenu(!expandMenu)}>
            <a href={link}>
              {link.slice(1).charAt(0).toUpperCase() + link.slice(1).slice(1)}
            </a>
          </li>
        )
      )}
    </>
  );
}


export default Menulinks;
