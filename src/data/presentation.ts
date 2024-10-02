type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "endersonpb0@gmail.com",
  title: "Hi, I’m Enderson👋",
  // profile: "/profile.webp",
  description:
    "Bonjour, i'm a *french frontend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/enderson-pereira-barcelos-15949518b/",
    },
    {
      label: "Github",
      link: "https://github.com/EnderosnpereiraBarcelos",
    },
  ],
};

export default presentation;
