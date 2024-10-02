export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "DevOps",
    techs: ["Terraform", "Yml"],
    link: "https://github.com/EndersonpereiraBarcelos/DevOps",
  },
  {
    title: "Docker Ci/CD",
    techs: ["Docker", "Html5", "GO"],
    link: "https://github.com/EndersonpereiraBarcelos/docker_cicd",
  },
  {
    title: "MlOps",
    techs: ["Python3", "Jupyter Notebook"],
    link: "https://github.com/EndersonpereiraBarcelos/MLOps",
  },
  {
    title: "Data Science",
    techs: ["Python3", "Jupyter Notebook", "CSV"],
    link: "https://github.com/EndersonpereiraBarcelos/datascience",
    // isComingSoon: true,
  },
];

export default projects;
