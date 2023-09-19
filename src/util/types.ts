export interface Patient {
    patient_id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    age: number;
    avatar: string;
}
export type PatientContextProviderProps = {
    children: React.ReactNode
}

export type AgeRangeType = '18_30' | '31_45' | '45' | 'all';
export type GenderType = 'Male' | 'Female' | 'all';

export interface ISearchQuery {
    patientList: Patient[];
    searchInput: string;
    gender: string
    sorting: string | null;
    ageRange: AgeRangeType;
    deletedPatient: number | undefined 
}

export interface PatientContextProps {
    ageRange: AgeRangeType,
    sortingOrder: string,
    patientGender: string,
    searchInput: string,
    deletedPatient: number | undefined,
    handleAgeRangeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleGenderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleSearchWithString: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSorting: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    handleDeletedPatient: (id: number) => void
}