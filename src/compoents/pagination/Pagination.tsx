import {PaginationUtils} from "../../utils/pagination-utils";
import {FormEvent, useLayoutEffect, useState} from "react";
import "./pagination.css"
import PaginationContainer from "./PaginationContainer";

interface PaginationProps {
    total: number | undefined;
    pageSelected: number,
    onChangePagination: Function,
    valueSearch: string
}

export default function Pagination({total, pageSelected, onChangePagination, valueSearch}: PaginationProps) {
    const [pagiData, setPagiData] = useState<(string | number)[]>([]);
    const [pagiType, setPagiType] = useState("");
    const [pagiValInp, setPagiValInp] = useState(1)


    const totalToArr = Array.from({length: total as number}, (_, index) => ++index)

    useLayoutEffect(() => {

        const objPagi = new PaginationUtils(totalToArr, pageSelected);

        const {pagiData, pagiType} = objPagi.getDetailsPagi();

        setPagiType(pagiType)
        setPagiData(pagiData)

    }, [valueSearch, pageSelected]);


    const pagiSmallRendered = pagiData.map((itm) => (
        <span
            key={itm}
            className={`${itm === pageSelected && 'active-pagination'} pagi-item`}
            onClick={() => changeSelectedPagi(itm as number)}
        >
            {itm}
        </span>
    ))

    const pagiBigRendered = pagiData.map((itm) => (
        <span
            key={itm}
            className={`${itm === pageSelected && 'active-pagination'} ${itm === "..." && 'icon-more'} pagi-item`}
            onClick={itm === "..." ? () => {
            } : () => changeSelectedPagi(itm as number)}
        >
            {itm}
        </span>
    ))


    const changeSelectedPagi = (selected: number) => {
        onChangePagination(selected)
    }


    const handlePrev = () => {
        onChangePagination((prev: number) => prev - 1)
    }

    const handleNext = () => {
        onChangePagination((prev: number) => prev + 1)
    }

    const handlePrevDouble = () => {
        onChangePagination(1)
    }

    const handleNextDouble = () => {
        onChangePagination(totalToArr.length)
    }

    const handleChosePagi = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onChangePagination(pagiValInp);
    }


    return (
        <>
            {pagiType === 'small' && (
                <PaginationContainer
                    totalToArr={totalToArr}
                    pageSelected={pageSelected}
                    handleNext={handleNext}
                    handleNextDouble={handleNextDouble}
                    handlePrevDouble={handlePrevDouble}
                    handlePrev={handlePrev}
                    pagiRendered={pagiSmallRendered}
                />
            )}

            {pagiType === 'big' && (
                <PaginationContainer
                    totalToArr={totalToArr}
                    pageSelected={pageSelected}
                    handleNext={handleNext}
                    handleNextDouble={handleNextDouble}
                    handlePrevDouble={handlePrevDouble}
                    handlePrev={handlePrev}
                    pagiRendered={pagiBigRendered}
                />
            )}

            <form onSubmit={handleChosePagi}>

                <input
                    type={"number"}
                    value={pagiValInp}
                    onChange={(e)=> setPagiValInp(+e.target.value)}
                />

            </form>
        </>
    );
}
