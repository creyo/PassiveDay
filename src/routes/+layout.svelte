<script>
	import Header from './Header.svelte';
	import './styles.css';
	// import './mobile.css';
	// import './tablet.css';
	import Footer from './Footer.svelte';
	// import { onMount,onDestroy  } from 'svelte';
  // import supabase from '../config/supabase.js';
  // import { page } from '$app/stores';

//   let currentPage = $page.url.pathname;

//   const unsubscribe = page.subscribe(($page) => {
//     console.log('page', $page.url.pathname);
//     currentPage = $page.url.pathname;
//   });
//   onMount(async () => {
	
// 	const { data, error } = await supabase
//           .from('articles')
//           .select(`
//             *,
//             articlestatus(*),
//             authors(*),
//             categories(*),
//             post_type(*),
//             publication(*)

//           `)
				
// 			// @ts-ignore
// 			let type_blog = data.filter(article=>article.post_type.type_name=="Blog")
// 			// @ts-ignore
// 			let type_page = data.filter(article=>article.post_type.type_name=="Page")
//     // console.log(data)
// 	});
// 	onDestroy(() => {
//     unsubscribe();
//   });
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
