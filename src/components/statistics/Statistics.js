import PropTypes from 'prop-types'
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    
    return (
        
      <section className={s.statistics}>

  { title && <h2 className={s.title}>{title}</h2> }

        
        <ul className={s.list}>
          {stats.map(({ id, label, percentage })=>(
          <li className={s.item}
           key={id}>
      <span className={label}>{label}</span>
      <span className={s.percentage }>{ percentage +'%'}</span>
    </li>
          ))}
  </ul>
      

</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  label: PropTypes.string,
  percentage:PropTypes.number
  
};

export default Statistics
