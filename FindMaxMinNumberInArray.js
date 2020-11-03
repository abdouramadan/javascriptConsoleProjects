
console.clear()

class FindMaxMin
{
    constructor(arr)
    {
        this.arr = arr
        this.len = this.arr.length
        this.sum = 0
    }

    // Find Min And Max Number
    findMinMaxNum()
    {
        let min = this.arr[0] < this.arr[1] ? this.arr[0] : this.arr[1]
        let max = this.arr[0] > this.arr[1] ? this.arr[0] : this.arr[1]
        this.filterArr(min)
    }

    // Filter The Array And Update It
    filterArr(min)
    {
        let newArr = this.arr.filter(val => {
            return val !== min
        })
        this.arr = newArr
    }

    // Loop Throuth Array Element And Filter It
    loopThoruthArr()
    {
        while(this.sum <= Infinity)
        {
            this.findMinMaxNum()
            if(this.arr.length === 1) break
            this.sum++
        }
        console.log(this.arr[0])
    }
}

const arr       = [1039,34048383,1038478,3394836,2304,403]
const arr1      = [1039,34048383,1038478,3394836,2304,403,39373635255749022]
const minMAx1    = new FindMaxMin(arr1)
minMAx1.loopThoruthArr()
const minMAx    = new FindMaxMin(arr)
minMAx.loopThoruthArr()
