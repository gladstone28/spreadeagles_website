document.addEventListener("DOMContentLoaded", function() {
    // Sample furniture data (You can replace this with your actual data from a database)
    const furnitureData = [{
            name: "Night Stand",
            price: "J$60,000.00",
            description: "Our skillfully designed and crafted night stand is the epitome of sophistication and style.Its sleek, contemporary design and space saving innovation offers support to restful night's sleep.",
            image: "path/to/dining-table-image.jpg",
            image: "night-table.jpeg",
        },
        {
            name: "Wardrobe",
            price: "J$250,000.00",
            description: "Where your house lack space, we can custom make pieces of furniture like this Wardrobe to satisfy your requirements, in fact we can make antique furnitue to fit modern taste on demand.",
            image: "ward-robe.jpeg",
        },
        {
            name: "Dresser",
            price: "J$250,000.00",
            description: "Our carefully crafted Dresser is a luxurious addition to any living space. Its sleek, contemporary design and style offers aesthetic beauty to any space it occupies.",
            image: "dresser-spread-eagles.jpeg",
        },
        {
            name: "Dresser with 2 night stands",
            price: "J$110,000.00",
            description: "Our carefully crafted Dresser is a luxurious addition to any living space. Its sleek, contemporary design and style offers aesthetic beauty to any space it occupies.",
            image: "dresser-2-night-stands.jpeg",
        },
        {
            name: "King Size Bed with a pair of night stands",
            price: "J$185,000.00",
            description: "Experience the ultimate comfort and relaxation with our cozy bed. Crafted with the finest materials, this bed will provide you with a good night's sleep like never before.",
            image: "bed-with-2-night-stand.jpeg",
        },

        {
            name: "Chest of Drawers",
            price: "J$119,850.00",
            description: "This chest-of-drawers does exactly what it promises.",
            image: "chest-of-drawers-spread-eagles.jpeg",
        },

        // Add more furniture items here as needed
    ];

    const furnitureContainer = document.getElementById("furnitureContainer");

    furnitureData.forEach((item) => {
        const furnitureItem = document.createElement("div");
        furnitureItem.classList.add("furniture-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("p");
        itemPrice.textContent = "Price: " + item.price;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        furnitureItem.appendChild(itemImage);
        furnitureItem.appendChild(itemName);
        furnitureItem.appendChild(itemPrice);
        furnitureItem.appendChild(itemDescription);

        furnitureContainer.appendChild(furnitureItem);
    });
});