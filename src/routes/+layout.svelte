<script>
	import Header from './Header.svelte';
	import './styles.css';
	// import './mobile.css';
	// import './tablet.css';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
