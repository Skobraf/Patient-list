import { ISearchQuery } from "../util/types"
import { ageFilter_18_30, ageFilter_31_45, ageFilter_45, searchInputFilter, genderFilter, assendingSorting, dessendingSorting } from "../util/helpers";

const ageFilter = {
    '18_30': ageFilter_18_30,
    '31_45': ageFilter_31_45,
    '45': ageFilter_45,
    'all': () => true
}

export const useSearchPatientResult = (query: ISearchQuery) => {

    const patients = query.patientList.filter((patient) => {
        return (
            searchInputFilter(query.searchInput)(patient) &&
            genderFilter(query.gender)(patient) &&
            ageFilter[query.ageRange](patient) &&
            // eslint-disable-next-line eqeqeq
            patient.patient_id != query.deletedPatient
        );
    });
    if (query.sorting === 'asc') {
        const assendingPatients = assendingSorting(patients)
        return assendingPatients
    }
    if (query.sorting === 'desc') {
        return dessendingSorting(patients)
    }
    return patients
}

