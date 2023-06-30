<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { onMount } from "svelte";
	import { invalidate } from "$app/navigation";
	inject({ mode: dev ? 'development' : 'production' });

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<title>SvelteKit on the edge</title>
	<!--
	<meta name="description" content="HTML, dynamically rendered in a city near you" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@vercel" />
	<meta name="twitter:creator" content="@sveltejs" />
	<meta name="twitter:title" content="SvelteKit on the edge" />
	<meta name="twitter:description" content="HTML, dynamically rendered in a city near you" />
	<meta name="twitter:image" content="{$page.url.origin}{card}" />
	<meta name="twitter:image:alt" content="The Vercel and Svelte logos" />-->
</svelte:head>

{#key $page.url.pathname}
	<main in:fade>
		<slot />
	</main>
{/key}

