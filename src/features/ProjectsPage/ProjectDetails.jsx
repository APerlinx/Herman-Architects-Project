import { useLoaderData } from 'react-router-dom';
import { fetchSingleProject } from '../../services/apiCloudinary';

function ProjectDetails() {
  const projectData = useLoaderData();

  if (!projectData || projectData.length === 0) {
    return <div>No data found for this project.</div>;
  }

  const [firstImage, ...otherImages] = projectData;

  return (
    <div
      className="relative mt-32 min-h-screen w-screen gap-8 px-8 pb-12 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      {/* Project Title */}
      <h1 className="pb-5 text-right text-4xl font-bold">
        {firstImage.caption}
      </h1>

      {/* Project Details */}
      <div className="flex items-center justify-evenly pb-8">
        <div className="flex flex-col items-center">
          <span className=" pb-1 text-stone-400 sm:text-base">מיקום</span>
          <span className="sm:text-xl">{firstImage.locationHEB}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" pb-1 text-stone-400 sm:text-base">סוג פרוייקט</span>
          <span className="sm:text-xl">{firstImage.projectTypeHEB}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className=" pb-1 text-stone-400 sm:text-base">סטטוס</span>
          <span className="sm:text-xl">{firstImage.year}</span>
        </div>
      </div>

      {/* First Image */}
      <div className="mb-8">
        <img
          src={firstImage.imageUrl}
          alt={firstImage.alt}
          className="h-auto w-full object-cover"
        />
        <p className="mt-4 py-12 text-center text-sm font-semibold text-stone-600 sm:text-3xl">
          {firstImage.alt}.
        </p>
      </div>

      {/* Remaining Images in a Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherImages.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;

export async function loader({ params }) {
  const { projectName } = params;
  const data = await fetchSingleProject(projectName);
  return data;
}
