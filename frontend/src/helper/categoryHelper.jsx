export const transformCategoryId = (categoryId) => {
  const categoryMappings = {
    tv: 1,
    laptop: 2,
    smartphone: 3,
    headphone: 4,
    tablet: 5
  };

  return categoryMappings[categoryId] || categoryId;
};