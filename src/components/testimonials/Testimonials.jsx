import './Testimonials.scss';
import enterArrow from '../../assets/enterArrow.png';
import testimonials from './refreesData';

function Testimonials() {
  return (
    <section className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <article className='container'>
        {testimonials.map((testimonial) => (
          <div
            className={testimonial.featured ? 'card featured' : 'card'}
            key={testimonial.id}
          >
            <div className='top'>
              <img src={enterArrow} alt='' className='left' />
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className='user'
              />
              <a href='https://www.linkedin.com/in/ernest-anyewe-adonu'>
                <img src={testimonial.icon} alt='' className='right' />
              </a>
            </div>
            <div className='center'>{testimonial.desc}</div>
            <div className='bottom'>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.title}</h4>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Testimonials;
