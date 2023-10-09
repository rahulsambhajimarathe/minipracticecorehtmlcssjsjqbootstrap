fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data[0].title);

    let main = ""; // Declare the 'main' variable here

    data.map((values) => {
      main += `<tr>
        <td>${values.title}</td>
        <td>${values.price}</td>
        <td>${values.description}</td>
        <td><img src="${values.image}" class="w-100"></td>
      </tr>`;
    });

    document.getElementById("bodys").innerHTML = main;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
