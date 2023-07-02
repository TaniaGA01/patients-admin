export interface AlertI{
    type:string;
    message:string;
}

export interface AnimalTypeI{
    id:number;
    text:string;
    value:number|null;
}

export interface DataI{
    id:string|null,
    animalName:string;
    animalType:string;
    ownerName:string;
    email:string;
    dateArrive:string;
    symptoms:string;
}