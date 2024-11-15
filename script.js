function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("create-form").style.display = "none";
    document.getElementById("reset-form").style.display = "none";
    document.getElementById("login-tab").classList.add("active");
    document.getElementById("create-tab").classList.remove("active");
}

function showCreate() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("create-form").style.display = "block";
    document.getElementById("reset-form").style.display = "none";
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("create-tab").classList.add("active");
}

function showReset() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("create-form").style.display = "none";
    document.getElementById("reset-form").style.display = "block";
    document.getElementById("login-tab").classList.remove("active");
    document.getElementById("create-tab").classList.remove("active");
}
