function ProjectsPage() {
  const projects = [
    {
      image: '../../../media/bg-images/bg-image-lg-e.jpeg',
      title: 'בית במושבת כנרת',
    },
    {
      image: '../../../media/bg-images/bg-image.jpg',
      title: 'בית במושב מגדל',
    },
    {
      image: '../../../media/bg-images/bg-image2.jpeg',
      title: 'מלון על שפת הכנרת',
    },
    {
      image: '../../../media/bg-images/bg-image3.jpeg',
      title: 'שערי המושבה בראש פינה',
    },
  ];

  return (
    <div className="relative mt-32 min-h-screen w-screen gap-8 border-b-2 border-stone-300 pb-12 text-right sm:mt-48 sm:px-32">
      <div className="mb-5">
        <h2 className="pb-5 text-4xl font-bold">פרוייקטים</h2>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex cursor-pointer flex-col overflow-hidden "
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Content */}
            <div className="pt-4 ">
              {/* Title */}
              <h3 className="mb-2 text-lg font-bold text-stone-800 sm:text-xl">
                {project.title}
              </h3>

              {/* Button with Hover Effect */}
              <button className="flex items-center gap-2  text-sm text-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-lg">
                <span className="inline-block -translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EAC452"
                  >
                    <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
                  </svg>
                </span>
                צפה בפרוייקט
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
