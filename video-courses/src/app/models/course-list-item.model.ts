import { AuthorModel } from './author.model';

export interface CourseListItem {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: AuthorModel;
  isTopRated: boolean;
}
