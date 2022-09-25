export const currentXLocation =
  window.scrollY +
  document.querySelector("#cowIcon").getBoundingClientRect().top;

export const currentYLocation =
  window.scrollY +
  document.querySelector("#cowIcon").getBoundingClientRect().left;

export const currentLocationObj = [currentXLocation, currentYLocation];
