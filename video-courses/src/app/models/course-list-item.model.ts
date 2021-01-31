import { AuthorModel } from './author.model';

export interface CourseListItem {
<<<<<<< master
<<<<<<< master
  id: number;
  name: string;
  date: string;
  length: number;
=======
  id: Number;
<<<<<<< master
  title: string;
  creationDate: string;
  duration: number;
>>>>>>> Add routing for course list pages and complete relevant methods
=======
  name: string;
  date: string;
  length: Number;
>>>>>>> Add http request with course GET api
=======
  id: number;
  name: string;
  date: string;
  length: number;
>>>>>>> Implement load more function
  description: string;
  authors: AuthorModel;
  isTopRated: boolean;
}
