// Get the current year and set it in the span with id "currentyear"
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${currentYear}`;

// Get the last modified date of the document and set it in the paragraph with id "lastModified"
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `LastModified: ${lastModified}`;
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  const selectElement = document.getElementById('product'); // Replace with your select element's ID

products.forEach(product => {
  const optionElement = document.createElement('option');
  optionElement.value = product.id;
  optionElement.textContent = product.name;
  selectElement.appendChild(optionElement);
});

