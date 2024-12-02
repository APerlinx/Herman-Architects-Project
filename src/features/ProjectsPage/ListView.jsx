function ListView({ projects }) {
  const textDesign = 'text-base font-semibold text-stone-600';
  return (
    <div className="space-y-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center justify-between gap-8 border-b border-stone-300 pb-4"
        >
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="hidden h-32 w-48 object-cover sm:inline-block"
          />

          {/* Title, Year, and Place */}
          <div className="flex w-full items-center justify-between">
            {/* Title */}
            <h3 className="text-xl font-bold text-stone-800 transition-colors duration-300 group-hover:text-yellow-500">
              {project.title}
            </h3>

            {/* Year and Place */}
            <p className={textDesign}>{project.place}</p>
            <p className={textDesign}> הושלם ב- {project.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListView;
