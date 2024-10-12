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
    "Hello, I'm a *DevOps Developer* with *1 years* of experience. I'm currently working with *python3, docker, terraforma and others*. Outside of work I improve my knowledge.",
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
      link: "https://github.com/EndersonpereiraBarcelos",
    },
  ],
};

export default presentation;
