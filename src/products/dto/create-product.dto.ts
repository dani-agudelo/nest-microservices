import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsString, Length } from "class-validator";

export class CreateProductDto {
    
    @IsString()
    @Length(3, 255)
    name: string;

    @IsPositive()
    @IsNumber()
    @Type(() => Number)
    price: number;

    @IsString()
    @Length(3, 255)
    description: string;
}
