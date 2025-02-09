<script>
    import wolf from "$lib/images/wolf.png";
    let searchQuery = "";

    const categories = ["Marketing", "AI Tools", "Business"];
</script>

<svelte:head>
    <title>Home - Snowwolf</title>
    <meta name="description" content="Discover trending business tools and emerging AI startups." />
</svelte:head>

<!-- 🏡 HOME PAGE CONTAINER -->
<section class="home-page">
    <header class="nav">
        <a href="/" class="logo">
            <img alt="wolf" src={wolf} width="60" height="60" />
            <span class="logo-text">SNOWWOLF</span>
        </a>
        <nav class="menu">
            <a href="/home">HOME</a>
            <a href="/directory">DIRECTORY</a>
            <a href="/list">GET LISTED</a>
            <a href="/signup">CREATE AN ACCOUNT</a>
        </nav>
    </header>

    <h2 class="tagline">Find emerging startups & latest tools</h2>

    <!-- SEARCH BAR -->
    <div class="search-container">
        <div class="search-bar">
            <input type="text" placeholder="What is your business and what are you looking for?"
                bind:value={searchQuery} aria-label="Search" />
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm9.7 5.3l-5.1-5.1a7.9 7.9 0 0 0 1.1-4.2 8 8 0 1 0-8 8 7.9 7.9 0 0 0 4.2-1.1l5.1 5.1a1 1 0 1 0 1.4-1.4z" />
            </svg>
        </div>
    </div>

    <!-- CATEGORY SECTIONS -->
    <div class="categories">
        {#each categories as category}
        <div class="category-container">
            <button class="category-button">{category}</button>
            <div class="subtext">
                <span>Trending</span> <span class="separator">|</span> <span>Emerging</span>
            </div>
            <!-- Trending Business List -->
            {#if category === "Marketing"}
            <div class="marketing-grid">
                <div class="company-item">
                    <div class="icon">📈</div>
                    <div class="name">Company Name</div>
                    <div class="bar"><div class="progress" style="width: 80%;"></div></div>
                    <div class="percent">80%</div>
                </div>
                {#each Array(5) as _, i}
                <div class="company-item">
                    <div class="icon">📊</div>
                    <div class="bar"><div class="progress" style="width: 67%;"></div></div>
                    <div class="percent">67%</div>
                </div>
                {/each}
            </div>
            {/if}
        </div>
        {/each}
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <p>Trending Tools & Profiles</p>
    <h1>HOME PAGE</h1>
</footer>

<style>
    /* General Styling */
    * {
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }

    .home-page {
        text-align: center;
        background: linear-gradient(to bottom, #e6b8ee, #ffffff);
        padding-bottom: 50px;
    }

    /* NAVIGATION */
    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 40px;
        border-bottom: 1px solid #ddd;
    }

    .logo {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
    }

    .logo-text {
        margin-left: 10px;
        color: #5f5fff;
    }

    .menu a {
        margin: 0 15px;
        text-decoration: none;
        font-size: 16px;
        color: black;
    }

    /* SEARCH BAR */
    .search-container {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    .search-bar {
        display: flex;
        align-items: center;
        background-color: #e6b8ee;
        border-radius: 25px;
        max-width: 450px;
        padding: 0.5rem;
    }

    .search-bar input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 1rem;
        padding: 0.8rem 1rem;
        border-radius: 25px;
        background-color: transparent;
    }

    .search-icon {
        width: 20px;
        height: 20px;
        margin-left: 8px;
    }

    /* CATEGORY SECTIONS */
    .categories {
        display: flex;
        justify-content: space-evenly;
        max-width: 900px;
        margin: 30px auto;
    }

    .category-container {
        text-align: center;
        width: 30%;
    }

    .category-button {
        background-color: #e0b3ff;
        padding: 15px 40px;
        border-radius: 50px;
        font-size: 18px;
        border: none;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .subtext {
        display: flex;
        justify-content: center;
        gap: 10px;
        font-size: 14px;
        color: #666;
    }

    /* MARKETING GRID */
    .marketing-grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
    }

    .company-item {
        display: flex;
        align-items: center;
        width: 250px;
        gap: 10px;
    }

    .icon {
        width: 30px;
        text-align: center;
        font-size: 20px;
    }

    .bar {
        width: 100%;
        background: #ddd;
        height: 10px;
        border-radius: 5px;
        overflow: hidden;
    }

    .progress {
        height: 100%;
        background: #8b5cf6;
    }

    .percent {
        font-size: 14px;
        font-weight: bold;
    }

    /* FOOTER */
    .footer {
        background: linear-gradient(to top, #8b5cf6, #ffffff);
        padding: 40px;
        text-align: center;
        font-weight: bold;
        color: #000;
    }

    .footer h1 {
        font-size: 36px;
        color: #00aaff;
    }
</style>
