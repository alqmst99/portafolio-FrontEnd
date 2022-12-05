export class Education {
    id?: number;
    nameE: string;
    dateI: string;
    dateF: string;
    descEd: string;
    
    constructor(nameE: string, dateI: string, dateF:string, descEd: string){
        this.nameE= nameE;
        this.dateI= dateI;
        this.dateF= dateF;
        this.descEd= descEd;
    }
}
