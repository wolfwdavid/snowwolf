<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
	import wolf from '$lib/images/wolf.png';

	// Add a reactive search query variable
	let searchQuery = '';
	
	// You can filter content based on this searchQuery if needed
	const filteredItems = [
		'Marketing',
		'Ai tools',
		'Business',
		'Directory',
		'Get Listed',
		'Create an Account'
	].filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<img alt="wolf" src={wolf}  width="50" height="50" />
		Snow Wolf
		<hr class="styled-line">


<style>
	.styled-line {
		border: 0;
		border-top: 2px solid #e6b8ee;  /* Light purple line */
		margin: 20px 0;  /* Space above and below the line */
		width: 80%;  /* Set the width of the line */
		margin-left: auto;
		margin-right: auto;  /* Center the line */
	}
</style>



	<!-- Search input with magnifying glass on the right -->
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

	<!-- Optional display filtered items or results -->
	<ul>
		{#each filteredItems as item}
			<li>{item}</li>
		{/each}
	</ul>

	<Counter />
</section>

<style>
	/* Centering the section */
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
	}

	/* New container to center the search bar */
	.search-container {
		display: flex;
		justify-content: center;  /* Centers the search bar */
		width: 100%;
		margin-top: 1rem;
	}

	/* Search bar styling */
	.search-bar {
		display: flex;
		align-items: center;
		background-color: #e6b8ee;  /* Light purple background */
		border-radius: 25px;  /* More rounded corners */
		width: 100%;
		max-width: 450px;  /* Limit max width */
		padding: 0.5rem;
		margin: 0 auto;  /* Ensure search bar is centered */
	}

	.search-bar input {
		border: none;
		outline: none;
		width: 100%;
		font-size: 1rem;
		color: #000000;
		padding: 0.8rem 1rem;
		border-radius: 25px;
		background-color: transparent;
	}

	/* Search icon on the right side */
	.search-icon {
		width: 20px;
		height: 20px;
		fill: #000;  /* Dark color for the icon */
		margin-left: 8px; /* Space between input field and icon */
	}
</style>