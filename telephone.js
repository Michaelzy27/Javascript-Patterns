
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

    notify(context) {
        for (let observer of this.observers) {
            observer.update(context)
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
            console.log("Dialling phone number " + number)
        } else {
            console.log("You need to add the number first")
        }
    }


}

const get = new Telephone
get.AddPhoneNumber(666876)
get.RemovePhoneNumber(666876)

console.log(numbers)

class Observer{
    constructor() {}

    update() {

    }


}

const obsv = new Observer
get.add(obsv)