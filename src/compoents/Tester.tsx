

export default function Tester(){

    class Car {

        public name ;

        constructor(name:string) {
            this.name = name;


        }

        // static sendName(){
        //     return this.name
        // }

        sendName(){
            return this.name
        }

    }

    class Model extends Car{
        private readonly year:number ;

        constructor(brandName:string,year:number) {
            super(brandName);
            this.year = year
        }

        complete(){
            return `${this.sendName()},${this.year}`
        }

        get cnam() {
            return this.name ;
        }
        set cnam(x) {
            this.name =  x;
        }


    }

    const peugeotCar = new Model("207",2023);


    console.log(peugeotCar.cnam)

    peugeotCar.cnam = "benz"

    console.log(peugeotCar.cnam)

    // console.log(peugeotCar.complete())

    return(
        <>
            <p>tester page </p>
        </>
    )
}
