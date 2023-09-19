import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { PatientCard } from "./PatientCard";
import { Patient } from "../util/types";

export const VirtualPatientList = ({ searchResult }: { searchResult: Patient[] }) => {
    const parentRef = useRef<null>(null);

    const rowVirtualizer = useVirtualizer({
        count: searchResult.length,
        estimateSize: () => 120,
        getScrollElement: () => parentRef.current,
    })

    return (
        <div
            style={{
                height: '520px',
                overflow: 'auto',
            }}
            ref={parentRef}>
            <div
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}>
                {
                    rowVirtualizer.getVirtualItems().map((virtualItem) => {
                        const patient = searchResult[virtualItem.index];

                        return (
                            <div key={virtualItem.key} style={{
                                height: virtualItem.size, top: 0,
                                position: 'absolute',
                                left: 0,
                                width: '100%',
                                transform: `translateY(${virtualItem.start}px)`
                            }}>
                                <PatientCard
                                    patient={patient}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}