import classes from './JobLogo.module.css';
const JobLogo = (props) => {
  return (
    <img
      className={classes.logo}
      src={'./assets/' + props.logo}
      alt="company logo"
    />
  );
};

export default JobLogo;
