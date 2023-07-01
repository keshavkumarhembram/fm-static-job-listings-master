import classes from './JobCriteria.module.css';

const JobCriteria = (props) => {
  return (
    <div onClick={props.onClick} className={classes.criteria}>
      <button>{props.role}</button>
      <button>{props.level}</button>
      {props.languages.map((language, idx) => (
        <button key={`language` + idx}>{language}</button>
      ))}
      {props.tools.map((tool, idx) => (
        <button key={'tool' + idx}>{tool}</button>
      ))}
    </div>
  );
};

export default JobCriteria;
