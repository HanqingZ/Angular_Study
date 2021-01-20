import { AuthorModel } from './author.model';

export interface CourseListItem {
  id: Number;
  name: string;
  date: string;
  length: Number;
  description: string;
  authors: AuthorModel;
  isTopRated: boolean;
}
