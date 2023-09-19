import { createContext } from "react";
import { PatientContextProps } from "../util/types";

export const PatientListContext = createContext<PatientContextProps>({
    ageRange: 'all',
    sortingOrder: '',
    patientGender: 'all',
    searchInput: '',
    deletedPatient: 0,
    handleAgeRangeChange: (e: React.ChangeEvent<HTMLSelectElement>) => { },
    handleGenderChange: (e: React.ChangeEvent<HTMLSelectElement>) => { },
    handleSearchWithString: (e: React.ChangeEvent<HTMLInputElement>) => { },
    handleSorting: (e: React.ChangeEvent<HTMLSelectElement>) => { },
    handleDeletedPatient: (id: number) => { },
})