import React from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ imgUrl, title,theme, description, github, preview, categories }) => {
  return (
    <div className="flex flex-col font-raleway bg-gray-200 shadow-xl rounded-md max-w-[280px] md:w-[300px] md:max-w-none overflow-hidden">
      <div className="relative max-h-[280px] max-w-[280px] md:max-w-none  md:max-h-none md:w-[300px] md:h-[250px]">
        <img src={imgUrl} alt="" className=" max-h-[280px] max-w-[280px] md:max-w-none  md:max-h-none md:w-[300px] md:h-[250px]"/>
        <ProjectModal desc={description} github={github} preview={preview}/>

      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-gray-500 font-poppins font-bold text-sm">{theme}</p>
        </div>
        <h1 className="text-gray-500 text-sm font-bold">Tech Stack :</h1>
        <ul className="flex flex-wrap gap-2">
          {categories.map((cat,index)=>(
            <li className="px-3 py-2 rounded-md bg-gray-300 shadow-md text-xs font-bold">{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
