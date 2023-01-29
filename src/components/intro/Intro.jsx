import './Intro.scss'
import Ernest_profile2 from '../../assets/Ernest_profile2.png';
import down from '../../assets/down.png';
import Typewriter from 'typewriter-effect';

function Intro() {

  return (
    <article className='intro' id='intro'>
      <div className='left'>
        <div className='img__container'>
          <img src={Ernest_profile2} alt='profile picture' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hello, my name is</h2>
          <h1>Ernest A. Adonu</h1>
          <h3>
            Full-stack Developer,{' '}
            <span>
              <Typewriter
                options={{
                  strings: ['a Writer', 'and a Typist'],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src={down} alt='down' />
        </a>
      </div>
    </article>
  );
}

export default Intro