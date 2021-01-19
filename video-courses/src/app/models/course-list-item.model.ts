import { AuthorModel } from './author.model';

export interface CourseListItem {
<<<<<<< master
  id: number;
  name: string;
  date: string;
  length: number;
=======
  id: Number;
  title: string;
  creationDate: string;
  duration: number;
>>>>>>> Add routing for course list pages and complete relevant methods
  description: string;
  authors: AuthorModel;
  isTopRated: boolean;
}
