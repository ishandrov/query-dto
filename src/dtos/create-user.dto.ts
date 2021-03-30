import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    secondName: string;

    @ApiProperty()
    nickname: string;

    @ApiProperty()
    age: number;
}