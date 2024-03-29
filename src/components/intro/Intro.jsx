import './Intro.scss'
// import Ernest_profile2 from '../../assets/Ernest_profile2.webp';
import down from '../../assets/down.png';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/Resume.pdf';
import Details from '../details/Details';

function Intro() {

  return (
    <article className='intro' id='intro'>
      {/* <div className='left'>
        <div className='img__container'>
          <img src={Ernest_profile2} alt='profile picture' />
        </div>
      </div> */}
      <div className='right'>
        <div className='wrapper'>
          <h1>
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
          </h1>
          <p>
            Motivated software engineer with more than 15000 hours of teamwork
            experience. Skilled at producing top-notch web apps with a heavy
            emphasis on effectiveness and user experiences. Process automation
            is a topic I enjoy. You can download my{' '}
            <a
              href={Resume}
              download='Ernest Anyewe Adonu Resume'
              target='_blank'
              className='resume'
            >
              résumé
            </a>
            to learn more about my experiences. Also, if you need someone to
            help you with your project, feel free to{' '}
            <a href='#contact' className='contact__me'>
              contact me.
            </a>
          </p>
        </div>
        <Details Resume={Resume} />
        <a href='#projects' className='arrow_down'>
          <img src={down} alt='down' />
        </a>
      </div>
    </article>
  );
}

export default Intro