$(document).ready(function () {
    console.log("jQuery is running!");
    // Injecting an H1 header into the header HTML element with an id of "header"
    $("#header").html("<h1>Welcome to our Travel Blog!</h1>");

    // Create Navigation Bar
    const categories = ["Beaches", "Mountains", "Cities", "Forests", "Deserts"];
    let navContent = "<ul>";
    $.each(categories, function (index, category) {
        // console.log(index);
        // console.log(category);
        navContent += `<li onclick="loadCategoryContent('${category}')">${category}</li>`;
    });
    navContent += "</ul>";
    $("#navbar").html(navContent);

});

window.loadCategoryContent = function (category) {
    console.log("loadCategoryContent function ran!");
    console.log(category);
    let content = `<h2>${category}</h2>`;
    content += `<div class="carousel" id="${category.toLowerCase()}-carousel"></div>`;
    $("#content").html(content);

    populateCarousel(category.toLowerCase());

};

const categoryImages = {
    beaches: [
        { alt: "beach sunset", src: "beach1.jpg" },
        { alt: "beach sunset", src: "beach2.jpg" },
        { alt: "marina resort", src: "beach3.jpg" },
    ],
    mountains: [
        { alt: "Snowy peak", src: "mountain1.jpg" },
        { alt: "Snowy peak", src: "mountain2.jpg" },
        { alt: "Snowy peak", src: "mountain3.jpg" },
    ],
    mountains: [
        { alt: "Snowy peak", src: "mountain1.jpg" },
        { alt: "Snowy peak", src: "mountain2.jpg" },
        { alt: "Snowy peak", src: "mountain3.jpg" },
    ],
};

function populateCarousel(category) {
    const images = categoryImages[category];

    let carouselContent = images.map((image, index) => {
        return `<div class="carousel-item ${index == 0 ? "active" : ""}">
            <div class="image" style="background-image: url('${image.src}')">
            </div>
            <p>${image.alt}</p>
        </div>`;
    }).join("");

    $(`#${category}-carousel`).html(carouselContent);

    $(`#${category}-carousel`).append(
        `<button class="carousel-control prev" onClick="moveCarousel('${category}',-1)">&lt;</button>
        <button class="carousel-control next" onClick="moveCarousel('${category}',1)">&gt;</button>`
    );
}

window.moveCarousel = function (category, direction) {
    let items = $(`#${category}-carousel .carousel-item`);

    let activeIndex = items.index(items.filter(".active"));

    let newIndex = activeIndex + direction;

    if (newIndex >= items.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = items.length - 1;
    }

    items.removeClass("active");

    items.eq(newIndex).addClass("active");
}

// ICE 5 Tasks:
// 1.Populate Cities, Forests & Deserts
// 2. Add 3 images to the Cities & Deserts (Optionally, you may add images for the rest of the categories)
// 3. Dynamically add content to the Footer using jQuery. The content should include a short description of your favorite category/place and why.

// DUE Monday February 19th at 11:59 PM
