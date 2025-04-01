interface technologyInterface {
  description: string;
  frontend: string[];
  backend: string[];
}

interface resultsInterface {
  description: string;
  images: string[];
}
export interface projectInterface {
  title: string;
  img_main: string;
  description: string;
  url_name: string;
  roles: string;
  technologies: technologyInterface;
  results: resultsInterface;
  contribution: string;
  experience: string;
}
