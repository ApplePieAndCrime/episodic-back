import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './entities/dto/create-movie.dto';
import { UpdateMovieDto } from './entities/dto/update-movie.dto';
import { IExternalMovieOptionsFromMain } from 'src/lib/classes';
import { axiosMain } from '@lib/axios';

@Injectable()
export class MoviesService {
  async create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll(options: IExternalMovieOptionsFromMain) {
    const { page, limit, query } = options;
    const movies = await axiosMain({
      method: 'GET',
      url: 'movie/search',
      data: { page, limit, query },
    }).then((res) => res.data);

    return movies;
  }

  async findOne(id: number) {
    const movie = await axiosMain({
      method: 'GET',
      url: `movie/${id}`,
    }).then((res) => res.data);

    return movie;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
