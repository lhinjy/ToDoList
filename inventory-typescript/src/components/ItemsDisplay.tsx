import React from "react";
type item = {
  name: string;
  price: string;
  type: string;
  brand: string;
};
function displayData(dictionary: item, key: string) {
  if (key in dictionary) {
    if (dictionary.get(key) === "") return "N/A";
    else return dictionary[key];
  }
  return "No data to display";
}
export const ItemsDisplay = () => {
  return <div>ItemsDisplay</div>;
};
