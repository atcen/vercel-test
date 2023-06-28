<script>
	import { fade } from 'svelte/transition';
	import '$lib/styles.css';
	import card from '$lib/twitter-card.jpg';
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>SvelteKit on the edge</title>
	<meta name="description" content="HTML, dynamically rendered in a city near you" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@vercel" />
	<meta name="twitter:creator" content="@sveltejs" />
	<meta name="twitter:title" content="SvelteKit on the edge" />
	<meta name="twitter:description" content="HTML, dynamically rendered in a city near you" />
	<meta name="twitter:image" content="{$page.url.origin}{card}" />
	<meta name="twitter:image:alt" content="The Vercel and Svelte logos" />
</svelte:head>

<Card />


{#key $page.url.pathname}
	<main in:fade>
		<slot />
	</main>
{/key}

<Footer />

<style>
	main {
		position: relative;
		width: 100vw;
		height: 100%;
		padding: 2.5rem;
		box-sizing: border-box;
	}

	nav {
		position: absolute;
		display: flex;
		justify-content: center;
		padding: 1rem;
		gap: 0.5em;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
		font-size: 0.9rem;
		color: #999;
	}

	a {
		color: #666;
	}

	a[aria-current='true'] {
		color: #ff3e00;
	}
</style>
