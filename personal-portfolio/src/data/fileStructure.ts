import type { INode } from "../types/node";

export const fileStructure: INode = {
  id: 1,
  name: "personal-portfolio",
  type: "folder",
  iconType: "folder",

  children: [
    {
      id: 1,
      name: "src",
      type: "folder",
      iconType: "src",
      children: [
        {
          id: 2,
          name: "components",
          type: "folder",
          iconType: "components",
          children: [
            {
              id: 3,
              name: "AboutMe.tsx",
              type: "tsx",
              iconType: "tsx",
            },
            {
              id: 4,
              name: "Carrer.tsx",
              type: "tsx",
              iconType: "tsx",
            },
            {
              id: 5,
              name: "Technologies.tsx",
              type: "tsx",
              iconType: "tsx",
            },
            {
              id: 6,
              name: "Projects.tsx",
              type: "tsx",
              iconType: "tsx",
            },
            {
              id: 7,
              name: "ContactMe.tsx",
              type: "tsx",
              iconType: "tsx",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "README.md",
      type: "readme",
      iconType: "readme",
    },
    {
      id: 9,
      name: "CREDITS.md",
      type: "readme",
      iconType: "readme",
    },
  ],
};
