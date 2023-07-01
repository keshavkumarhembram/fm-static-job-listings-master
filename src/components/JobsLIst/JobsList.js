
import classes from './JobsList.module.css';
import JobItem from "./JobItem";

const JobsList = (props) => {
    const jobItems = props.joblist.map(jobitem => <JobItem onClick={props.onClick} key={jobitem.id}  jobitem={jobitem} />)
    return (
        <ul className={classes.joblist}>
            {jobItems}
        </ul>
    );
}

export default JobsList;