import React from "react";

function ProjectCard({
  project: { title, gif, description, stack, code, live, direction },
}) {
  return (
    <div
      className={`mt-[150px] flex flex-col items-center md:items-start md:flex-row justify-center ${direction}`}
    >
      <div>
        <img
          src={gif}
          alt={title}
          className="h-[250px] w-[350px] md:h-[300px] md:w-[450px] lg:h-[500] lg:w-[600px]"
        />
      </div>

      <div className="w-[400px] max-w-[400px] px-10 pt-6 md:pt-0 md:px-5">
        <h1 className="text-[30px]">{title}</h1>
        <p className="pt-[20px] text-[20px]">{description}</p>
        <p className="pt-[20px] text-[18px]">Made with: {stack}</p>

        <div className="mt-[50px]">
          <a href={code} className="px-2 text-[20px]">
            <button className="text-white bg-blue-700 p-2 rounded-2xl hover:bg-blue-900">Repository</button>
          </a>
          <a href={live} className="px-5 text-[20px]">
            <button className="text-white bg-blue-700 p-2 rounded-2xl hover:bg-blue-900">Live</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
