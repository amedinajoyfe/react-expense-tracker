import { IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class CreateMovementDto{
    @IsString()
    @IsNotEmpty()
    readonly userid: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly expense: boolean;

    @IsString()
    @IsNotEmpty()
    readonly category: string;

    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;
}