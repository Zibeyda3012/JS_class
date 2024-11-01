const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  console.log(data);
};

const createProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: "Lenovo IdeaPad Slim 13th generation",
      price: 3000,
      description:
        "13th generation 15.6 inch , 8GB RAM, core Intel i7, 512GB SSD and 1TB HDD storage",
      category: "electronic",
      image:
        "https://p2-ofp.static.pub//fes/cms/2023/07/17/j1xofq5xwmxial9rou4v2dea9weo2r690202.png",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

const deleteProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products/7", {
    method: "DELETE",
  });

  const data = await response.json();

  console.log(data);
};

const updateProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products/10", {
    method: "PUT",
    body: JSON.stringify({
      title: "Lenovo Thinkpad 12th generation",
      price: 2000,
      description:
        "13th generation 15.6 inch , 8GB RAM, core Intel i5, 512GB SSD",
      category: "electronic",
      image:
        "https://static3.webx.pk/files/4012/Images/61xo6awmvel.-ac-sl1500--4012-1309712-220922094416201.jpg",
    }),

    headers: {
        "Content-Type": "application/json"
    }
  });

  const data = await response.json();
  console.log(data);
};

// getProducts();

// createProduct();

// updateProduct();

deleteProduct();
