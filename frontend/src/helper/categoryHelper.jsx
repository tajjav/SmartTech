export const transformCategoryId = (categoryId) => {
  const categoryMappings = {
    tv: 1,
    laptops: 2,
    tablets: 3,
    smartphones: 4,
    headphones: 5,
  };

  return categoryMappings[categoryId.toLowerCase()] || null;
};