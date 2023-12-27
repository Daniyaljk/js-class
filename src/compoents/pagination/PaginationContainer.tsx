import ChevronDoubleLeft from "../icons/ChevronDoubleLeft";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import ChevronDoubleRight from "../icons/ChevronDoubleRight";

interface PaginationContainerProps{
    pageSelected : number,
    pagiRendered : any,
    totalToArr : (number | string)[],
    handlePrevDouble : ()=>void
    handlePrev : ()=>void
    handleNext : ()=>void
    handleNextDouble : ()=>void
}

export default function PaginationContainer({pageSelected,pagiRendered,totalToArr,handlePrevDouble,handlePrev,handleNextDouble,handleNext}:PaginationContainerProps){



    return (
        <div className={"pagination-container"}>

            <button className={"pagi-item"} disabled={pageSelected === 1} onClick={handlePrevDouble}>
                <ChevronDoubleLeft iconClass={"icon-pagination"}/>
            </button>

            <button className={"pagi-item"} disabled={pageSelected === 1} onClick={handlePrev}>
                <ChevronLeft iconClass={"icon-pagination"}/>
            </button>

            {pagiRendered}

            <button className={"pagi-item"} disabled={pageSelected === totalToArr.length}
                    onClick={handleNext}>
                <ChevronRight iconClass={"icon-pagination"}/>
            </button>

            <button className={"pagi-item"} disabled={pageSelected === totalToArr.length} onClick={handleNextDouble}>
                <ChevronDoubleRight iconClass={"icon-pagination"}/>
            </button>
        </div>
    )
}
