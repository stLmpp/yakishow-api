import { ApiProperty } from '@nestjs/swagger';

export class ViaCEP {
  @ApiProperty() cep: string;
  @ApiProperty() logradouro: string;
  @ApiProperty() complemento: string;
  @ApiProperty() bairro: string;
  @ApiProperty() localidade: string;
  @ApiProperty() uf: string;
  @ApiProperty() unidade: string;
  @ApiProperty() ibge: string;
  @ApiProperty() gia: string;
}
