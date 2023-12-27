import ImageShow from "./ImageShow";
import "./list-image.css"

interface ListImagesProps{
    header : string,
    listData ?: listDataProps[],
    totalDataNumber ?: number
}

interface listDataProps {
    id : string,
    urls : {
        small : string,
        full : string,
        raw : string,
        regular : string,
        small_s3 : string,
        thumb : string,
    },
    slug : string
}

export default function ListImages({header,listData,totalDataNumber}:ListImagesProps){

    const listRendered = listData?.map(({id,slug,urls})=>(
        <ImageShow key={id} img_address={urls} altImg={slug}/>
    ))

    return(
        <>
            <h1>{header} <span>({header} {totalDataNumber} number pic)</span></h1>

            <div className={"list-image"}>
                {listRendered}
            </div>
        </>
    )
}
