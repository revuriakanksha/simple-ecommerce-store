document.getElementById("registerForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {
        name: name.value,
        email: email.value,
        password: password.value
    };

    const response = await fetch(
        "http://localhost:5000/api/auth/register",
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