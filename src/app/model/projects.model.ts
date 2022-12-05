export class Projects {
    id?: number;
    name: string;
    descP: string;
    imgP: string;
    constructor(name: string, descP: string, imgP: string) {
        this.name = name;
        this.descP = descP;
        this.imgP = imgP;
    }
}
