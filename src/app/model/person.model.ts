export class Person {
    id?: number;
    name: string;
    lastName:string;
    descP:string;
    imgP:string;

    constructor(name:string, lastName:string,descP:string,imgP:string){
        this.name=name;
        this.lastName=lastName;
        this.descP=descP;
        this.imgP=imgP;
    }
}
