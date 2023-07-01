import classes from './JobItem.module.css';
import JobDetails from './JobsDetails/JobDetails';
import JobCriteria from './JobsDetails/JobCriteria';
import JobLogo from './JobsDetails/JobLogo';

const JobItem = (props) => {
  return (
    <li
      className={`${classes['job-item']} ${
        props.jobitem.featured ? classes.featured : ''
      }`}
    >
      <div className={classes['job-description']}>
        <JobLogo logo={props.jobitem.logo} />
        <JobDetails
          company={props.jobitem.company}
          position={props.jobitem.position}
          postedAt={props.jobitem.postedAt}
          contract={props.jobitem.contract}
          location={props.jobitem.location}
          new={props.jobitem.new}
          featured={props.jobitem.featured}
        />
      </div>
      <JobCriteria
        onClick={props.onClick}
        languages={props.jobitem.languages}
        level={props.jobitem.level}
        role={props.jobitem.role}
        tools={props.jobitem.tools}
      />
    </li>
  );
};

export default JobItem;
