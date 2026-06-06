document.getElementById("registerForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    const response = await fetch(
        "https://ecommerce-backend-ou46.onrender.com/api/auth/register",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }
    );

    const data = await response.json();

    alert(data.message);
});