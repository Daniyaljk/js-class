import SearchBox from "../compoents/search/SearchBox";
import {useState} from "react";
import {handleSearchUnsplash} from "../services/api";
import ListImages from "../compoents/list/ListImages";
import Pagination from "../compoents/pagination/Pagination";

export default function SearchPage() {
    const [valSearch, setValSearch] = useState<string>("");
    const [imagesData, setImagesData] = useState<any[] | undefined>([]);
    const [totalPage, setTotalPage] = useState<number | undefined>(0)
    const [totalImageNum, setTotalImageNum] = useState<number | undefined>(0)
    const [pageNum, setPageNum] = useState<number>(1)


    const getSearchVal = async (term:string)=>{
        const responsiveUnsplashData = await handleSearchUnsplash(term,pageNum);

        if (responsiveUnsplashData){
            const {total_page,images_data,total} = responsiveUnsplashData;

            setImagesData(images_data)
            setValSearch(term)
            setTotalPage(total_page)
            setTotalImageNum(total)
        }

    }

    const changePagination = async (num:number)=>{
        setPageNum(num)

        const responsiveUnsplashData = await handleSearchUnsplash(valSearch,num);

        if (responsiveUnsplashData){
            const {total_page,images_data,total} = responsiveUnsplashData;

            setImagesData(images_data)
            setValSearch(valSearch)
            setTotalPage(total_page)
            setTotalImageNum(total)
        }
    }



    return (
        <>
            <SearchBox onSubmit={getSearchVal}/>

            <Pagination valueSearch={valSearch} total={totalPage} pageSelected={pageNum} onChangePagination={changePagination}/>

            <ListImages header={valSearch} listData={imagesData} totalDataNumber={totalImageNum}/>

        </>
    )
}
