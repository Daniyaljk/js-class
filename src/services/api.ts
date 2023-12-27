import axios from "axios";
import {unspalsh_token} from "./token";
import {cLog} from "../utils/cLog";

interface UnsplashSearchResult {
    images_data?: any[]; // باید تایپ واقعی تصاویر را در اینجا قرار دهید
    total_page: number;
    total: number;
}

export const handleSearchUnsplash = async (term:string,pageNum:number):Promise<UnsplashSearchResult | undefined>=>{

    try {
        const {data} = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: unspalsh_token,
            },
            params: {
                query: term,
                page: pageNum,
                per_page: 15
            }
        })


        return {
            images_data : data.results,
            total_page : data.total_pages,
            total : data.total,
        }

    }catch (err:any){
        cLog(err.message,"handleSearchUnsplash error :")
    }

}
