import React from "react";

const TimelineCard = ({
  duration,
  duracion,
  title,
  titulo,
  details,
  detalles,
  mode,
  language,
}) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
            {language === "english" ? duration : duracion}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {language === "english" ? title : titulo}
          </h3>
        </div>
        <p
          className={`my-2 text-base font-normal ${
            mode === "light" ? "text-stone-600" : "text-stone-400"
          }`}
        >
          {language === "english" ? details : detalles}
        </p>
      </li>
    </ol>
  );
};

export default TimelineCard;
