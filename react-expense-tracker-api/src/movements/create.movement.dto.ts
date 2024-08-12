import { IsString, IsEmail, IsNotEmpty, isNumber, isNotEmpty, IsBoolean, IsDecimal } from 'class-validator';

export class CreateMovementDto{
    @IsString()
    @IsNotEmpty()
    readonly userid:string;

    
    @IsBoolean()
    @IsNotEmpty()
    readonly expense:boolean;
    
    @IsString()
    @IsNotEmpty()
    readonly category:string;
    
    @IsDecimal()
    @IsNotEmpty()
    readonly amount:number;
}