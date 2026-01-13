import "i18next";

import about from "./locales/en/about.json";
import files from "./locales/en/files.json";
import journey from "./locales/en/journey.json";
import technologies from "./locales/en/technologies.json";
import projects from "./locales/en/projects.json";
import code from "./locales/en/code.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      about: typeof about;
      files: typeof files;
      journey: typeof journey;
      technologies: typeof technologies;
      contactMe: typeof contactMe;
      projects: typeof projects;
      code: typeof code;
    };
  }
}
