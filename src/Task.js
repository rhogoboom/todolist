import {format} from 'date-fns'

export default class Task {
    constructor(name, dueDate = format(new Date(), 'MM/dd/yyyy')) {
        this.name = name;
    };

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    
}