import type { INode } from "../types/node";

export const fileStructure: INode = {
  id: 1,
  name: "personal-portfolio",
  type: "folder",
  iconType: "folder",

  children: [
    {
      id: 2,
      name: "src",
      type: "folder",
      iconType: "src",
      children: [
        {
          id: 3,
          name: "components",
          type: "folder",
          iconType: "components",
          children: [
            {
              id: 4,
              name: "AboutMe.tsx",
              type: "tsx",
              iconType: "tsx",
              fileKey: "about",
            },
            {
              id: 5,
              name: "Journey.tsx",
              type: "tsx",
              iconType: "tsx",
              fileKey: "journey",
            },
            {
              id: 6,
              name: "Technologies.tsx",
              type: "tsx",
              iconType: "tsx",
              fileKey: "technologies",
            },
            {
              id: 7,
              name: "Projects.tsx",
              type: "tsx",
              iconType: "tsx",
              fileKey: "projects",
            },
            {
              id: 8,
              name: "ContactMe.tsx",
              type: "tsx",
              iconType: "tsx",
              fileKey: "contact",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "README.md",
      type: "readme",
      iconType: "readme",
      fileKey: "readme",
    },
  ],
};
