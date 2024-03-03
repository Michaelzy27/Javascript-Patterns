
const numbers = []

class Telephone {
    constructor() {
        this.observers = new Set()
    }

    add(observer) {
        this.observers.add(observer)
    }

    remove(observer) {
        this.observers.delete(observer)
    }

    notify(number) {
        for (let observer of this.observers) {
            observer.update(number)
        }
    }

    AddPhoneNumber(number) {
        numbers.push(number)
    }

    RemovePhoneNumber(number) {
        if(numbers.includes(number)) {
            numbers.splice(numbers.indexOf(number), 1)
        } else {
            console.log("The number does not exist")
        }
    }

    DialPhoneNumber(number) {
        if(numbers.includes(number)) {
            console.log("Dialling.....")
            this.notify(number)
        } else {
            console.log("You need to add the number first")
        }
    }


}


class NumberObserver{
    constructor() {}

    update(number) {
        console.log("The number is " + number)
    }


}

class NowDiallingObserver {

    update() {
        console.log("Now Dialling 2347023232")
    }
}

const get = new Telephone
get.AddPhoneNumber(2348033096778)            //adding sample numbers
get.AddPhoneNumber(2348152771687)
get.AddPhoneNumber(2347086645218)
get.AddPhoneNumber(2349099826361)
get.RemovePhoneNumber(2347086645218)         //removing one of sample numbers

const obsv = new NumberObserver
const obsv2 = new NowDiallingObserver
get.add(obsv)
get.add(obsv2)
get.DialPhoneNumber(2348152771687)
//console.log(numbers)                      //to view all numbers