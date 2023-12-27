

export const cLog = (showData:any,nameDta:string="",isClear:boolean=false)=>{

    if (isClear){

        console.clear();
        console.log(nameDta,showData)

        if (nameDta === ""){
            console.log(nameDta,String(showData))
        }else {
            console.log(nameDta,showData)
        }

    }else {
        console.log(nameDta,showData)
    }
}
