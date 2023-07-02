import { useState, useEffect } from 'react';

import './App.css';
import JobsList from './components/JobsLIst/JobsList';
import FilterTab from './components/FilterTab/FilterTab';
import bgHeader from './assets/images/bg-header-desktop.svg';
import bgHeaderMobile from './assets/images/bg-header-mobile.svg';

const JOB_DATA = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: './images/account.svg',
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['Ruby', 'Sass'],
  },
  {
    id: 6,
    company: 'FaceIt',
    logo: './images/faceit.svg',
    new: false,
    featured: false,
    position: 'Junior Backend Developer',
    role: 'Backend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'UK Only',
    languages: ['Ruby'],
    tools: ['RoR'],
  },
  {
    id: 7,
    company: 'Shortly',
    logo: './images/shortly.svg',
    new: false,
    featured: false,
    position: 'Junior Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },
  {
    id: 8,
    company: 'Insure',
    logo: './images/insure.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },
  {
    id: 9,
    company: 'Eyecam Co.',
    logo: './images/eyecam-co.svg',
    new: false,
    featured: false,
    position: 'Full Stack Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },
  {
    id: 10,
    company: 'The Air Filter Company',
    logo: './images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];

function App() {
  const modifiedJobs = JOB_DATA.map((job) => {
    job.criteria = [...job.languages, ...job.tools, job.role, job.level];
    return job;
  });

  const [jobList, setJobList] = useState(modifiedJobs);
  const [addedFilter, setAddedFilter] = useState([]);

  useEffect(() => {
    if (!addedFilter) return;
    const filteredJobs = modifiedJobs.filter((job) =>
      addedFilter.every((filter) => job.criteria.includes(filter))
    );
    setJobList(filteredJobs);
    //eslint-disable-next-line
  }, [addedFilter]);

  const onClickHandler = (event) => {
    if (addedFilter.includes(event.target.textContent)) return;
    setAddedFilter((prevState) => [...prevState, event.target.textContent]);
  };

  const onRemoveHandler = (event) => {
    const removeFilter = event.target.value;
    const filterList = addedFilter.filter((filter) => filter !== removeFilter);
    setAddedFilter(filterList);
  };

  const onClearHandler = () => {
    setAddedFilter([]);
    setJobList(modifiedJobs);
  };

  return (
    <main>
      <h1>Job Listing</h1>
      <img
        className="header-background-image-mobile"
        src={bgHeaderMobile}
        alt="header background"
      />
      <img
        className="header-background-image"
        src={bgHeader}
        alt="header background"
      />
      {addedFilter.length > 0 && <FilterTab
        onClear={onClearHandler}
        onRemove={onRemoveHandler}
        addedFilter={addedFilter}
      />}
      <JobsList onClick={onClickHandler} joblist={jobList} />
    </main>
  );
}

export default App;
