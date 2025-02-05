<script>
	import Counter from './Counter.svelte';
	import wolf from '$lib/images/wolf.png';
	import Marketing from './Marketing.svelte';

	let searchQuery = '';

	const categories = ["Marketing", "AI Tools", "Business"];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<img alt="wolf" src={wolf} width="50" height="50" />
		Snow Wolf
	</h1>

	<hr class="styled-line">
	<p>Search engine supporting the underdogs</p>

	<!-- Search Bar -->
	<div class="search-container">
		<div class="search-bar">
			<input
				type="text"
				placeholder="What is your business and what are you looking for?"
				bind:value={searchQuery}
				aria-label="Search"
			/>
			<!-- Magnifying Glass Icon -->
			<svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm9.7 5.3l-5.1-5.1a7.9 7.9 0 0 0 1.1-4.2 8 8 0 1 0-8 8 7.9 7.9 0 0 0 4.2-1.1l5.1 5.1a1 1 0 1 0 1.4-1.4z"/>
			</svg>
		</div>
	</div>

	<!-- Buttons for Categories -->
	<div class="categories">
		{#each categories as category}
			<button class="category-button">{category}</button>
		{/each}
	</div>

	<!-- Optional display filtered items -->
	<ul>
		{#each categories.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase())) as item}
			<li>{item}</li>
		{/each}
	</ul>
</section>

<style>
	/* Center the section */
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		padding: 2rem 0;
	}

	/* Styled line */
	.styled-line {
		border: 0;
		border-top: 2px solid #e6b8ee;
		margin: 20px 0;
		width: 80%;
	}

	/* Search Bar Container */
	.search-container {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 1rem;
	}

	/* Search Bar */
	.search-bar {
		display: flex;
		align-items: center;
		background-color: #e6b8ee;
		border-radius: 25px;
		width: 100%;
		max-width: 450px;
		padding: 0.5rem;
		margin: 0 auto;
	}

	.search-bar input {
		border: none;
		outline: none;
		width: 100%;
		font-size: 1rem;
		color: #000;
		padding: 0.8rem 1rem;
		border-radius: 25px;
		background-color: transparent;
	}

	.search-icon {
		width: 20px;
		height: 20px;
		fill: #000;
		margin-left: 8px;
	}

	/* Category Buttons */
	.categories {
		display: flex;
		gap: 15px;
		margin-top: 20px;
	}

	.category-button {
		background-color: #e0b3ff;
		color: black;
		font-weight: bold;
		padding: 10px 20px;
		border-radius: 25px;
		font-size: 18px;
		border: none;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s ease-in-out;
		cursor: pointer;
	}

	.category-button:hover {
		background-color: #d49fff;
	}
</style>
