interface PagiDetails {
    pagiData: (string | number)[];
    pagiType: "big" | "small";
}

export class PaginationUtils {

    public pageArr: number[];
    public pageSelected: number;
    public originalArrayCopy: number[];
    public checkPercent: boolean;

    constructor(pageArr: number[], pageSelected: number) {
        this.pageArr = pageArr;
        this.pageSelected = pageSelected;
        this.originalArrayCopy = this.pageArr.slice();
        this.checkPercent = this.pageSelected / this.pageArr.length > 0.5;
    }

    getDetailsPagi(): PagiDetails {


        if (this.pageArr.length > 5) {
            if (this.checkPercent) {
                const startPagi = this.pageArr.splice(0, 2);

                const targetItemIndex = this.originalArrayCopy.indexOf(this.pageSelected)

                //  end pagi  //
                const beforeItem = this.originalArrayCopy.slice(targetItemIndex + 1 === this.originalArrayCopy.length ? targetItemIndex - 2 : targetItemIndex - 1, targetItemIndex);
                const afterItem = this.originalArrayCopy.slice(targetItemIndex + 1, targetItemIndex + 2);

                const resultArray = [...beforeItem, this.pageSelected, ...afterItem];
                //  end pagi  //

                return {
                    pagiData: [...startPagi, "...", ...resultArray],
                    pagiType: "big"
                }
            } else {
                const startPagi = this.pageArr.splice(this.pageSelected === 1 ? this.pageSelected - 1 : this.pageSelected - 2, 3);
                const endPagi = this.originalArrayCopy.splice(-2);

                return {
                    pagiData: [...startPagi, "...", ...endPagi],
                    pagiType: "big"
                }
            }
        } else {
            return {
                pagiData: this.pageArr,
                pagiType: "small"
            }
        }

    }
}
