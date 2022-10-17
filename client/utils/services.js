export const getFilteredList = (products, selectedCategory, selectedBrand) => {
  if (selectedCategory && selectedBrand) {
    return products.filter(
      (product) =>
        product.attributes.category.data.attributes.name === selectedCategory &&
        product.attributes.brand.data.attributes.name === selectedBrand
    );
  } else if (selectedCategory) {
    return products.filter(
      (product) =>
        product.attributes.category.data.attributes.name === selectedCategory
    );
  } else if (selectedBrand) {
    return products.filter(
      (product) =>
        product.attributes.brand.data.attributes.name === selectedBrand
    );
  }

  return products;
};

export const capitalizeFirstLetters = (words, allWords) => {
  if (allWords === false) {
    return words
      .split("")
      .map((letter, index) =>
        index ? letter.toLowerCase() : letter.toUpperCase()
      )
      .join("");
  }
  return words
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
};

export const sortingProducts = (products, order) => {
  switch (order) {
    case "Name":
      return console.log("Name");
      break;

    case "Price High to Low":
      return console.log("price-low-to-high");
      break;

    case "Price Low to High":
      return console.log("price-high-to-low");
      break;
    case "Newest":
      return console.log("newest-first");
      break;

    case "Oldest":
      return console.log("oldest-first");
      break;
    default:
      return console.log("nothing");
      break;
  }
};
