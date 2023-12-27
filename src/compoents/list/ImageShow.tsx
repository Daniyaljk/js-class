

interface ImageShowProps {
    altImg : string,
    img_address :{
        small : string,
        full : string,
        raw : string,
        regular : string,
        small_s3 : string,
        thumb : string,
    }
}

export default function ImageShow({altImg,img_address}:ImageShowProps){


    return(
        <img
            src={img_address.small}
            alt={altImg}
            className={"image-show"}
            title={altImg}
        />
    )
}
