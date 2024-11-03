// Set the date when the relationship started
const startDate = new Date("2006-09-12");

// Function to calculate days and time together
function calculateDaysAndTime() {
    const today = new Date();
    const timeDifference = today - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

    // Cập nhật số ngày yêu và thời gian cụ thể
    document.getElementById("counter").innerText = `${days}`;
    document.getElementById("time-details").innerText = `${days} Ngày : ${hours} Giờ : ${minutes} Phút \n 18+ `;
}

// Function to display the current time
function displayCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);

    document.getElementById("current-time").innerText = formattedTime;
}

// Toggle theme between light and dark modes
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", function() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeToggle.innerText = "Dark Mode";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeToggle.innerText = "Light Mode";
    }
});

// Gọi các hàm và cập nhật thời gian hàng giây
calculateDaysAndTime();
setInterval(displayCurrentTime, 1000);
