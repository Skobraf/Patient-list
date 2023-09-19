import { useContext } from 'react';
import patients from '../mocked_data.json';
import { useDebounce } from '../hooks/useDebounce';
import { useSearchPatientResult } from '../hooks/useSearchResult';
import { Container, Input, Stack } from '@mui/material';

import { VirtualPatientList } from '../components/VIrtualPatientList';
import { PatientListContext } from '../context/PatientListContext';

export const PatientList = () => {

    const { deletedPatient, searchInput, patientGender, sortingOrder, ageRange, handleAgeRangeChange, handleGenderChange, handleSearchWithString, handleSorting } = useContext(PatientListContext)
    const debouncedSearchPatient = useDebounce(searchInput);
    const searchResult = useSearchPatientResult({
        searchInput: debouncedSearchPatient,
        patientList: patients,
        gender: patientGender,
        sorting: sortingOrder,
        ageRange,
        deletedPatient
    })

    return (
        <Container maxWidth='md'>
            <Stack sx={{ marginBottom: 5 }}>
                <fieldset>
                    <label htmlFor="Search">Search Patient </label>
                    <Input value={searchInput} onChange={handleSearchWithString} />
                </fieldset>
                <fieldset>
                    <select value={patientGender} onChange={handleGenderChange}>
                        <option value='all'>Select Gender (all)</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </fieldset>
                <fieldset>
                    <select value={sortingOrder} onChange={handleSorting}>
                        <option value=''>Sort</option>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </select>
                </fieldset>
                <fieldset>
                    <select value={ageRange} onChange={handleAgeRangeChange}>
                        <option value='all'>Select age range (all)</option>
                        <option value="18_30">18 - 30</option>
                        <option value="31_45">31 - 45</option>
                        <option value="45"> {'>'} 45</option>
                    </select>
                </fieldset>
            </Stack>
            <VirtualPatientList searchResult={searchResult} />
            {
                searchResult.length === 0 && <p>No results were found</p>
            }
        </Container>

    )
}
