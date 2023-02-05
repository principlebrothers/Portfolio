import './Intro.scss'
import Ernest_profile2 from '../../assets/Ernest_profile2.png';
import down from '../../assets/down.png';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Resume.pdf';

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
          <h2>
            Hello! I'm Ernest,{' '}
            <span>
              <Typewriter
                options={{
                  strings: [
                    'Full-stack Developer',
                    'Content Writer',
                    'Freelance Typist',
                  ],
                  autoStart: true,
                  delay: 75,
                  loop: true,
                }}
              />
            </span>
          </h2>
          <p>
            Motivated software engineer with more than 1300 hours of teamwork
            experience. Skilled at producing top-notch web apps with a heavy
            empahsis on effectiveness and user experiences. Process automation
            is a topic I enjoy. You can download my{' '}
            <a
              href={Resume}
              download='Ernest Anyewe Adonu Resume'
              target='_blank'
            >
              résumé
            </a>
            to learn more about my experiences.
          </p>
        </div>
        <a href='#projects'>
          <img src={down} alt='down' />
        </a>
      </div>
    </article>
  );
}

export default Intro