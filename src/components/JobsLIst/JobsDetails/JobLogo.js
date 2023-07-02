import classes from './JobLogo.module.css';
const JobLogo = (props) => {
  return (
    <img
      className={classes.logo}
      src={'./assets/' + props.logo.replace('./', '')}
      alt="company logo"
    />
  );
};

export default JobLogo;
