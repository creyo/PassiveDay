<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Footer from './Footer.svelte';
	import ProfessionBlock from './ProfessionBlock.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
	<ProfessionBlock/>
	<Footer />
</div>
