import { ApiProperty } from "@nestjs/swagger";

export class GetUsersDto {
    @ApiProperty()
    age: number;
}
