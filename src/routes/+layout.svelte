<script>
	import Header from './Header.svelte';
	import '../app.css';

	/** @type {{children: import('svelte').Snippet}} */
	export let children;
</script>

<div class="app">
	<Header />

	<main>
		{#if children}
			{@html children}
		{/if}
	</main>

	<footer>
		<p>&copy; {new Date().getFullYear()} Snowwolf. All Rights Reserved.</p>
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
