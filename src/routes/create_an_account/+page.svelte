<script>
<<<<<<< HEAD
	let name = "";
	let email = "";
	let password = "";
	let confirmPassword = "";

	function registerUser() {
		alert(`Account Created for ${name}`);
	}
</script>

<h2>Create an Account</h2>

<form on:submit|preventDefault={registerUser}>
	<label for="name">Full Name</label>
	<input id="name" type="text" bind:value={name} required />

	<label for="email">Email</label>
	<input id="email" type="email" bind:value={email} required />

	<label for="password">Password</label>
	<input id="password" type="password" bind:value={password} required />

	<label for="confirmPassword">Confirm Password</label>
	<input id="confirmPassword" type="password" bind:value={confirmPassword} required />

	<button type="submit">Sign Up</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 300px;
		margin: auto;
	}

	button {
		background: #8b5cf6;
		color: white;
		padding: 10px;
		border: none;
		cursor: pointer;
	}
=======
    import { onMount } from 'svelte';

    let fullName = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let showPassword = false;
    let showConfirmPassword = false;
    let errorMessage = '';
    let successMessage = '';

    function togglePassword() {
        showPassword = !showPassword;
    }

    function toggleConfirmPassword() {
        showConfirmPassword = !showConfirmPassword;
    }

    async function registerUser(event) {
        event.preventDefault(); // Prevent default form submission

        // ✅ Basic validation
        if (!fullName || !email || !password || !confirmPassword) {
            errorMessage = "All fields are required!";
            return;
        }

        if (password !== confirmPassword) {
            errorMessage = "Passwords do not match!";
            return;
        }

        // ✅ Backend API call (Replace with your backend URL)
        try {
            const response = await fetch('https://your-api.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                successMessage = "Registration successful! Redirecting...";
                errorMessage = '';
                setTimeout(() => {
                    window.location.href = "/login"; // Redirect after success
                }, 2000);
            } else {
                errorMessage = data.message || "Registration failed. Try again!";
            }
        } catch (error) {
            errorMessage = "Network error! Please try again later.";
        }
    }
</script>
<a href="{base}/dashboard">Go to Dashboard</a>

<svelte:head>
    <title>Create an Account</title>
    <meta name="description" content="Sign up for Snow Wolf and explore new tools!" />
</svelte:head>

<!-- 🌟 SIGNUP CONTAINER -->
<div class="signup-container">
    <div class="form-container">
        <h2>Create a New Account</h2>
        <p>Join Snow Wolf Today</p>

        {#if errorMessage}
            <p class="error-message">{errorMessage}</p>
        {/if}
        {#if successMessage}
            <p class="success-message">{successMessage}</p>
        {/if}

        <form on:submit={registerUser}>
            <div class="input-group">
            <label for="fullName">Full Name</label>
            <input id="fullName" type="text" placeholder="Enter your full name" bind:value={fullName} required />

            </div>

            <div class="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" bind:value={email} required />
            </div>

            <div class="input-group password-group">
                <label>Password</label>
                <input type={showPassword ? "text" : "password"} placeholder="Enter password" bind:value={password} required />
                <button type="button" class="toggle-icon" on:click={togglePassword} aria-label="Toggle password visibility">
                    {showPassword ? '🙈' : '👁️'}
                </button>
                
            </div>

            <div class="input-group password-group">
                <label>Confirm Password</label>
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" bind:value={confirmPassword} required />
                <span class="toggle-icon" on:click={toggleConfirmPassword}>
                    {showConfirmPassword ? '🙈' : '👁️'}
                </span>
            </div>

            <button type="submit" class="signup-btn">Sign Up</button>
            <p class="login-text">Already have an account? <a href="/login">Log in</a></p>
        </form>
    </div>

    <!-- 🎨 IMAGE SIDE -->
    <div class="image-container">
        <img src="/images/signup-illustration.png" alt="Signup Illustration" />
    </div>
</div>

<style>
    * { box-sizing: border-box; font-family: "Arial", sans-serif; }
    body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(to bottom right, #d4f1c4, #eff5e5); }
    
    .signup-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        max-width: 1000px;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }

    .form-container { flex: 1; padding: 40px; text-align: left; background: rgba(255, 255, 255, 0.25); border-radius: 15px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }
    
    h2 { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
    p { font-size: 14px; color: #666; margin-bottom: 20px; }
    
    .input-group { margin-bottom: 15px; position: relative; }
    label { font-weight: bold; font-size: 14px; }
    input { width: 100%; padding: 12px; border-radius: 8px; border: 1px solid #ddd; outline: none; font-size: 16px; }
    
    .password-group { position: relative; }
    .toggle-icon { position: absolute; right: 10px; top: 38px; cursor: pointer; font-size: 18px; }

    .signup-btn { width: 100%; padding: 12px; background: linear-gradient(to right, #6a11cb, #2575fc); color: white; font-size: 16px; border: none; border-radius: 8px; cursor: pointer; transition: 0.3s ease-in-out; }
    .signup-btn:hover { background: linear-gradient(to right, #2575fc, #6a11cb); }

    .login-text { margin-top: 10px; text-align: center; }
    .login-text a { color: #6a11cb; font-weight: bold; text-decoration: none; }

    .image-container { flex: 1; display: flex; justify-content: center; align-items: center; }
    .image-container img { max-width: 100%; height: auto; }

    /* 🚀 Success & Error Messages */
    .error-message { color: red; font-weight: bold; text-align: center; }
    .success-message { color: green; font-weight: bold; text-align: center; }

    @media (max-width: 768px) {
        .signup-container { flex-direction: column; }
        .form-container { width: 100%; }
        .image-container { display: none; }
    }
>>>>>>> 55732fa5ae9657c043781406eb6f70b0fc6e0f27
</style>
