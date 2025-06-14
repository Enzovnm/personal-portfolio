import type { INode } from "../types/node";

export const fileStructure: INode = {
  name: "personal-portfolio",
  type: "folder",
  children: [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder",
          children: [
            {
              name: "AboutMe.jsx",
              type: "tsx",
            },
            {
              name: "Carrer.tsx",
              type: "tsx",
            },
            {
              name: "Technologies.tsx",
              type: "tsx",
            },
            {
              name: "Projects.tsx",
              type: "tsx",
            },
            {
              name: "ContactMe.tsx",
              type: "tsx",
            },
          ],
        },
      ],
    },
    {
      name: "README.md",
      type: "readme",
    },
    {
      name: "CREDITS.md",
      type: "readme",
    },
  ],
};
