import PropTypes from 'prop-types'

const Statistics = ({ title, stats }) => {
    
    return (
        
      <section className="statistics">
  { title && <h2>{title}</h2>}

<ul className="stat-list">
    <li className="item">
      <span className="label">.docx</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item">
      <span className="label">.mp3</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">.pdf</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">.mp4</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
</section>
    )
}

Statistics.propTypes = {
    // id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

export default Statistics
