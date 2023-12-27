import {useLayoutEffect, useState} from "react";

export default function HomaPage() {
    const [imageNum, setImageNum] = useState<number>(0)

    useLayoutEffect(() => {
        const randomNum = Math.floor(Math.random() * 3)

        setImageNum(randomNum)
    }, []);

    const imageBackground = () => {
        switch (imageNum) {
            case 0 :
                return 'image1.jpg';
            case 1 :
                return 'image.jpg';
            default :
                return 'image-2.jpg'
        }
    }

    return <div className={"home-page"} style={{backgroundImage: `url("/image/${imageBackground()}")`}}/>

}
