import { IsString } from 'class-validator';

export class VerificationDto {
  @IsString()
  code: string;
}
