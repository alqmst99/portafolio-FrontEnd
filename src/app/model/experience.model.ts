export class Experience {
    id?:number;
    nameE:string;
    dateI:string;
    dateF:string;
    descE:string;
    constructor(nameE:string, dateI:string, dateF:string,descE:string){
        this.nameE=nameE;
        this.dateI=dateI;
        this.dateF=dateF;
        this.descE=descE;

    }
}
