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
            price: "J$160,000.00",
            description: "Immerse yourself in the world of dreams with our Elegant Dreamweaver Dresser. Meticulously handcrafted with an artistic touch, this dresser transcends the boundaries of ordinary furniture. Its ethereal design and enchanting curves will transport you to a realm of beauty and grace. Step into your bedroom and witness the magic unfold as this masterpiece adorns your space like a surreal work of art. Elevate your living space with the epitome of luxury and sophistication.",
            image: "dresser-2-night-stands.jpeg",
        },
        {
            name: "King Size Bed with a pair of night stands",
            price: "J$250,000.00",
            description: "Experience a haven of serenity and celestial comfort with our exclusive Serenity Haven King Size Bed. This majestic bed is not just a place to rest your head; it's a sanctuary of tranquility that transcends the boundaries of ordinary sleep. Crafted with the finest materials, the plush mattress cradles you in cloud-like softness, lulling you into a peaceful slumber.",
            image: "bed-with-2-night-stand.jpeg",
        },

        {
            name: "Chest of Drawers",
            price: "J$119,850.00",
            description: "This remarkable piece of furniture is not just a storage solution; it's an extraordinary work of art that demands attention. Crafted with utmost precision, its captivating facade features intricate carvings, reminiscent of ancient symbols of prosperity and abundance. As you glide the drawers open, a sense of wonder envelops you, revealing ample space to store your precious possessions. Add a touch of opulence to your home with the Majestic Treasurium, and immerse yourself in the luxury and splendor it bestows upon your living space.",
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