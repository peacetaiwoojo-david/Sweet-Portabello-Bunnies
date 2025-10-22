Sweet Bunnies Portobello Store JavaScript Code
// Add event listener to the window load event
window.addEventListener('load', () => {
    console.log('Page loaded!');
});

// Function to display current date and time
function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    dateTimeElement.innerHTML = `Current Date: ${currentDate} | Current Time: ${currentTime}`;
}

// Call the displayDateTime function every second
setInterval(displayDateTime, 1000);

// Add event listener to the contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sweet Bunnies Portobello Store</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Sweet Bunnies</h1>
        <h2>Portobello Store</h2>
    </header>
    <main>
        <section class="store-info">
            <h3>Store Location:</h3>
            <p>123 Portobello Road, London, W10 5SZ</p>
            <h3>Contact Us:</h3>
            <p>Phone: 020 1234 5678</p>
            <p>Email: [info@sweetbunnies.co.uk](mailto:info@sweetbunnies.co.uk)</p>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea><br><br>
                <input type="submit" value="Submit">
            </form>
        </section>
        <section class="store-description">
            <h3>About Us:</h3>
            <p>Sweet Bunnies is a charming store located in the heart of Portobello Road, London. We offer a wide range of sweet treats and gifts for all occasions.</p>
        </section>
        <section class="products">
            <h3>Our Products:</h3>
            <ul>
                <li>Sweet Treats</li>
                <li>Chocolates</li>
                <li>Cakes</li>
                <li>Gift Baskets</li>
            </ul>
        </section>
        <p id="date-time"></p>
    </main>
    <footer>
        <p>&copy; 2023 Sweet Bunnies</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>

JavaScript Code for Bunny Price List
// Get user's location
navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Use reverse geocoding to get country code
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            const countryCode = data.countryCode;

            // Display price list based on country
            if (countryCode === "NG") {
                // Nigeria
                displayPriceList("NG");
            } else if (countryCode === "US") {
                // United States
                displayPriceList("US");
            } else {
                // Europe (default)
                displayPriceList("EU");
            }
        })
        .catch(error => console.error(error));
});

// Function to display price list
function displayPriceList(region) {
    const priceListElement = document.querySelector(".price-list table tbody");

    // Clear existing price list
    priceListElement.innerHTML = "";

    // Define price lists for each region
    const priceLists = {
        NG: [
            { type: "Small Bunny", price: "₦25,000" },
            { type: "Medium Bunny", price: "₦35,000" },
            { type: "Large Bunny", price: "₦50,000" }
        ],
        US: [
            { type: "Small Bunny", price: "$56" },
            { type: "Medium Bunny", price: "$78" },
            { type: "Large Bunny", price: "$112" }
        ],
        EU: [
            { type: "Small Bunny", price: "€50" },
            { type: "Medium Bunny", price: "€70" },
            { type: "Large Bunny", price: "€100" }
        ]
    };

    // Generate price list HTML
    priceLists[region].forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.type}</td>
            <td>${item.price}</td>
        `;
        priceListElement.appendChild(row);
    });
}

