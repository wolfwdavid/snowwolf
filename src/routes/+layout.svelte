<script>
	import Header from './Header.svelte';
	import '../app.css';
	import { base } from '$app/paths';
</script>

<a href="{base}/home">Home</a>
<a href="{base}/create_an_account">Sign Up</a>
<div class="app">
	<Header />

	<main>
		<slot />  <!-- ✅ This ensures child pages render properly -->
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} Snow wolf. All Rights Reserved.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		width: 100%;
		background: linear-gradient(to top, #8b5cf6, #ffffff);
		min-height: 150px;
		font-weight: bold;
		color: #333;
		text-align: center;
	}

	@media (min-width: 480px) {
		footer {
			padding: 16px 0;
		}
	}
</style>
