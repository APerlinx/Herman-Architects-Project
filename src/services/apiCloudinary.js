import dataJSON from '../../dataJSON.json';

const CLOUD_NAME = 'dayojijed';
const API_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list`;

export async function fetchPreviewProjects() {
  try {
    let data;

    if (process.env.NODE_ENV === 'development') {
      data = dataJSON;
      // JSON file should contain the latest from : https://res.cloudinary.com/dayojijed/image/list/preview.json
    } else {
      const response = await fetch(`${API_BASE_URL}/preview.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch project images from Cloudinary.');
      }
      data = await response.json();
    }

    return data.resources
      .map((resource) => ({
        id: resource.public_id,
        imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
        projectName:
          resource.context?.custom?.project_name || 'Unknown Project',
        caption: resource.context?.custom?.caption || 'Untitled Project',
        description: resource.context?.custom?.description || '',
        year: resource.context?.custom?.year || 'Unknown Year',
        location: resource.context?.custom?.location || '',
        isLast: resource.context?.custom?.last === 'true',
        projectType: resource.context?.custom?.project_type || 'general', // Correct key name
      }))
      .sort((a, b) => {
        if (a.isLast && !b.isLast) return 1;
        if (!a.isLast && b.isLast) return -1;
        return 0;
      });
  } catch (error) {
    console.error('Error fetching preview projects:', error);
    return [];
  }
}
