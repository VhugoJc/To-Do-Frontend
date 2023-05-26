import React, { createContext, useState } from 'react'

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [filterData, setFilterData] = useState({
        name: '',
        status: 'all',
        priority: 'all'

    });

    const [sortData, setSortData] = useState({
        sortByDate: null,
        sortByPriority: null
    });

    const [pagination, setpagination] = useState({
        totalPages: 1,
        currentPage: 1
    })

    return (
        <FilterContext.Provider
            value={{
                filterData, setFilterData,
                sortData, setSortData,
                pagination, setpagination
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext;