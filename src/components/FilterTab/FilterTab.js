import classes from './FilterTab.module.css';

const FilterTab = (props) => {
  return (
    <div className={classes['filter-tab']}>
      <ul className={classes['added-filter']}>
        {props.addedFilter.map((filter) => (
          <li key={filter}>
            {filter}
            <button value={filter} onClick={props.onRemove}>
              X
            </button>
          </li>
        ))}
      </ul>
      <button onClick={props.onClear} className={classes['clear-button']}>Clear</button>
    </div>
  );
};

export default FilterTab;
