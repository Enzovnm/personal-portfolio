import React from "react";

export const FolderNavigationBar = () => {
  return (
    <div className=" h-full flex-col">
      <div className="h-7 flex items-center">
        <button>personal-portfolio</button>
      </div>
      <div>
        <button>src</button>
      </div>
      <div className="flex flex-col items-start">
        <button>components</button>
        <div className="flex flex-col text-start">
          <button className="text-start">AboutMe.tsx</button>
          <button className="text-start">Carrer.tsx</button>
          <button className="text-start">Technologies.tsx</button>
          <button className="text-start">Projects.tsx</button>
          <button className="text-start">ContactMe.tsx</button>
        </div>
      </div>
    </div>
  );
};
