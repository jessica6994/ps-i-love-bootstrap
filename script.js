function showIngredients(element, ingredients) {
  changePicture(element, ingredients);
}

function hideIngredients(element, originalImage) {
  changePicture(element, originalImage);
}

function changePicture(element, image) {
  $(element).attr('src', image);
}
