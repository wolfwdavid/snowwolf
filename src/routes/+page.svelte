<script>
	import wolf from '$lib/images/wolf.png';

	let searchQuery = '';

	const categories = ["Marketing", "AI Tools", "Business"];
</script>

<svelte:head>
	<title>Welcome to Snow Wolf</title>
	<meta name="description" content="Discover new business tools & emerging startups." />
</svelte:head>

<!-- 🏡 Landing Page Content -->
<section class="landing-page">
	<div class="logo-container">
        <img alt="wolf" src={wolf} width="50" height="50" />
        <span class="logo-text">SNOW WOLF</span>
        <span class="tagline">Search engine supporting the underdogs</span>
    </div>

	<hr class="styled-line">

	<!-- 🔍 Search Bar -->
	<div class="search-container">
		<div class="search-bar">
			<input
				type="text"
				placeholder="What is your business and what are you looking for?"
				bind:value={searchQuery}
				aria-label="Search"
			/>
			<svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm9.7 5.3l-5.1-5.1a7.9 7.9 0 0 0 1.1-4.2 8 8 0 1 0-8 8 7.9 7.9 0 0 0 4.2-1.1l5.1 5.1a1 1 0 1 0 1.4-1.4z"/>
			</svg>
		</div>
	</div>

	<!-- 🌟 Category Section -->
	<div class="categories">
		{#each categories as category}
			<div class="category-container">
				<button class="category-button">{category}</button>
				<div class="subtext">
					<span>Trending</span>
					<span class="separator">|</span>
					<span>Emerging</span>
				</div>
				{#if category === "Marketing"}
					<div class="tiles-wrapper">
						{#each [1, 2] as _}
							<div class="tiles-grid">
								{#each Array(6) as _}
									<div class="tile"></div>
								{/each}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</section>

<div class="footer-gradient"></div>

<style>
	/* 📌 PAGE STYLING */
	.landing-page {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		text-align: center;
		padding: 2rem 0;
		position: relative;
		z-index: 2;
		background: linear-gradient(to bottom, #e6b8ee, #ffffff);
	}

	.styled-line {
		border: 0;
		border-top: 2px solid #e6b8ee;
		margin: 20px 0;
		width: 80%;
	}

	/* 🔍 SEARCH BAR */
	.search-container {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 1rem;
	}

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

	/* 📌 CATEGORY STYLES */
	.category-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}

	.categories {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
		max-width: 900px;
		margin: 30px auto;
	}

	.category-button {
		background-color: #e0b3ff;
		color: black;
		font-weight: bold;
		padding: 15px 40px;
		border-radius: 50px;
		font-size: 18px;
		border: none;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		position: relative;
		transition: 0.3s ease-in-out;
	}

	.category-button:hover {
		background-color: #d49fff;
	}

	.subtext {
		display: flex;
		gap: 10px;
		font-size: 14px;
		color: #666;
	}

	.separator {
		color: #999;
		font-weight: bold;
	}

	.tiles-wrapper {
		display: flex;
		gap: 15px;
		margin-top: 10px;
		z-index: 3;
	}

	.tiles-grid {
		display: grid;
		grid-template-columns: repeat(3, 30px);
		gap: 5px;
	}

	.tile {
		width: 30px;
		height: 30px;
		background-color: #e6b8ee;
		border-radius: 5px;
	}

	/* 📌 LOGO CENTERING */
	.logo-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		text-align: center;
		margin-bottom: 20px;
	}

	.logo-text {
		font-family: 'Arial', sans-serif;
		font-weight: bold;
		font-size: 48px;
		color: #5f5fff;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.tagline {
		font-family: 'Arial', sans-serif;
		font-size: 18px;
		color: #7f7f7f;
		font-style: italic;
		margin-top: 10px;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
	}
</style>
