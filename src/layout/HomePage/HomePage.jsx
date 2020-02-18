import React, { useState } from 'react';
import './HomePage.scss';
import { DebounceInput } from 'react-debounce-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  useCategories,
  useTags,
  useDepartments,
  useDatasets,
  useColumns,
  useStateLoaded,
  useSortDatsetsBy,
} from '../../hooks/datasets';
import useCollection from '../../hooks/collections';
import Dataset from '../../components/Dataset/Dataset';
import SortMenu from '../../components/SortMenu/SortMenu';
import DatasetLoading from '../../components/Loading/DatasetLoading/DatasetLoading';
import usePagination from '../../hooks/pagination';
import MultiSelector from '../../components/MultiSelector/MultiSelector';

export default function HomePage() {
  const categories = useCategories();
  const tags = useTags();
  const departments = useDepartments();
  const columns = useColumns();
  const loaded = useStateLoaded();
  const [selectedTags, setSelectedTags] = useState([]);
  const [colpaseFilters, setCollapseFilters] = useState(true);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Name');
  const [sortDirection, setSortDirection] = useState('asc');

  const [
    collection,
    { addToCollection, removeFromCollection },
  ] = useCollection();

  const { datasets } = useDatasets({
    tags: selectedTags,
    categories: selectedCategories,
    columns: selectedColumns,
    term: searchTerm,
    departments: selectedDepartments,
  });

  const sortedDatasets = useSortDatsetsBy(
    datasets,
    sortBy,
    sortDirection === 'asc',
  );

  const [pagedDatasets, { pageButtons }] = usePagination(sortedDatasets, 5);

  return (
    <div className="home-page">
      <div className={`filters ${colpaseFilters ? 'collapsed' : ''}`}>
        {!colpaseFilters ? (
          <>
            <h2 className="filter-header">
              <button
                onKeyDown={() => setCollapseFilters(true)}
                onClick={() => setCollapseFilters(true)}
                className="header-button"
                type="button"
              >
                Filters <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </h2>
            <div className="categories">
              <MultiSelector
                items={categories}
                onChange={setSelectedCategories}
                selected={selectedCategories}
                title="Categories"
              />
            </div>
            <div className="departments">
              <MultiSelector
                items={departments}
                selected={selectedDepartments}
                onChange={setSelectedDepartments}
                title="Departments"
              />
            </div>
            <div className="columns">
              <MultiSelector
                items={columns}
                selected={selectedColumns}
                onChange={setSelectedColumns}
                title="Columns"
              />
            </div>
            <div className="tags">
              <MultiSelector
                items={tags}
                selected={selectedTags}
                onChange={setSelectedTags}
                title="Tags"
              />
            </div>
          </>
        ) : (
          <>
            <h2>
              <button
                onKeyDown={() => setCollapseFilters(false)}
                onClick={() => setCollapseFilters(false)}
                className="header-button"
                type="button"
              >
                Filters
              </button>
            </h2>
          </>
        )}
      </div>
      <div className="datasets">
        <div className="search">
          <FontAwesomeIcon size="lg" icon={faSearch} />
          <DebounceInput
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            debounceTimeout={300}
            placeholder="Search for dataset"
          />
        </div>
        <div className="count-and-sort">
          <p>
            <span className="bold">{datasets.length}</span> datasets
          </p>

          <SortMenu
            options={['Name', 'Created At', 'Updated At', 'Downloads', 'Views']}
            onDirection={(direction) => setSortDirection(direction)}
            selected={sortBy}
            direction={sortDirection}
            onSelected={(selected) => setSortBy(selected)}
          />
        </div>

        <ul className="dataset-list">
          {loaded ? (
            pagedDatasets.map((dataset) => (
              <Dataset
                key={dataset?.resource?.id}
                dataset={dataset}
                inCollection={collection.datasets.includes(dataset.resource.id)}
                onAddToCollection={addToCollection}
                onRemoveFromCollection={removeFromCollection}
                query={searchTerm}
              />
            ))
          ) : (
            <DatasetLoading />
          )}
        </ul>
        <div>{pageButtons}</div>
      </div>
    </div>
  );
}