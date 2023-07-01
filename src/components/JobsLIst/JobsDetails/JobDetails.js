import classes from './JobDetails.module.css';

const JobDetails = (props) => {
  return (
    <div className={classes['job-details']}>
      <div>
        <span className={classes.company}>{props.company}</span>
        {props.new && <span className={classes['new-badge']}>NEW!</span>}
        {props.featured && (
          <span className={classes['featured-badge']}>FEATURED</span>
        )}
      </div>
      <div>
        <span className={classes.position}>{props.position}</span>
      </div>
      <div className={classes.description}>
        <span>{props.postedAt}</span>.
        <span>{props.contract}</span>.
        <span>{props.location}</span>
      </div>
    </div>
  );
};

export default JobDetails;
