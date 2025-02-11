<script>
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
</style>
