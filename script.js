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
            name: "Dining Room Table",
            price: "J$299,000.00",
            description: "Meticulously crafted from the finest, hand-selected materials, this stunning dining room table promises to elevate your dining experience to new heights. With its sleek, polished surface, the table becomes an enchanting focal point, captivating both guests and family members alike.",
            image: "table2.jpg",
        },

        {
            name: "Elegant Breakfront",
            price: "J$194,850.00",
            description: "Enhance the beauty and functionality of your living space with our elegant breakfront. Display your treasured items and store your essentials in style with this timeless piece.",
            image: "breakfront.jpg",
        },
        {
            name: "Classic Bookcase",
            price: "J$89,850.00",
            description: "Organize your books and show off your literary collection with our classic bookcase. This bookcase blends style and practicality to elevate any room.",
            image: "bookcase.jpg",
        },
        {
            name: "Plush Rocking Chair",
            price: "J$44,850.00",
            description: "Indulge in pure relaxation with our plush rocking chair. Perfect for unwinding after a long day, this chair will become your favorite spot in the house.",
            image: "rocking.webp",
        },
        {
            name: "Elegant Sofa",
            price: "J$74,850.00",
            description: "A comfortable and stylish sofa for your living room. Relax in luxury and add a touch of elegance to your home décor.",
            image: "sofa.webp",
        },
        {
            name: "Chest of Drawers",
            price: "J$119,850.00",
            description: "Experience the ultimate comfort and relaxation with our cozy bed. Crafted with the finest materials, this bed will provide you with a good night's sleep like never before.",
            image: "chest-of-drawers-spread-eagles.jpeg",
        },
        {
            name: "Cozy Bed",
            price: "J$119,850.00",
            description: "Experience the ultimate comfort and relaxation with our cozy bed. Crafted with the finest materials, this bed will provide you with a good night's sleep like never before.",
            image: "Bed-spread-eagles.jpeg"
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