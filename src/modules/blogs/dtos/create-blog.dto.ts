import { IsNotEmpty, IsOptional, IsArray, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty({ description: 'The title of the blog' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The content of the blog' })
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The tags associated with the blog', isArray: true, required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiProperty({ description: 'The image URLs associated with the blog', isArray: true, required: false })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  image_urls?: string[];
}
