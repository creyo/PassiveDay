<script>
	import home from '$lib/images/Home.svg'
	import gear from '$lib/images/gear.svg'
	import right from '$lib/images/right.svg'
	import logo from '$lib/images/logo.png'
	import BlogCard from '../BlogCard.svelte';
	import supabase from '../../config/supabase.js';
    import { onMount } from 'svelte';
	import Newsletter from '../Newsletter.svelte';
	import Spinner from '../Spinner.svelte';
	let loading= true;
    let articles = [];
	onMount(async () => {
	let { data, error } = await supabase
  			.from('articles')
              .select(`
            *,
            articlestatus(*),
            authors(*),
            categories(*),
            post_type(*),
            publication(*)
          `)

		if (error) {
			console.log(error);
		} else {
            // @ts-ignore
            let digital_products = data.filter(article=>article.post_type.type_name=="Blog" && article.publication_id== 1 && article.articlestatus.status_name=="Published")
			articles = digital_products;
			loading = false;
			// console.log(articles);
		}
	});
</script>
<svelte:head>
	<title>Blog | PassiveDay</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container">


	<div class="bread-crum">
	  <div>
		<img src={home} alt="">
		<p>Home</p>
	  </div>

	  <div>
		<img src={right} alt="">
	  </div>
	  <div>
		<img src={gear} alt="">
		<p>Blog</p>
	  </div>
	</div>
  </div>
  <div class="container">
	<div class="tags-search">
	  <div class="tags">
		<h3>Tags:</h3>
		<p>Articles</p>
		<p>Guides</p>
		<p>Interviews</p>
		<p>Recent</p>
	  </div>

	  <form class="search" action="">
		<input type="search" placeholder="Search" required>
		<button type="submit">Search</button>
	  </form>  
	</div>
  </div>
  
  <div class="blogs-hero ">
		 
			  <img src={logo} alt="">
			 
			<h1>
			  Our Latest Articles and Blog Posts
			</h1>

			<p>
				Get abreast with the passive income landscape and keep up with the new opportunities and methods available. Our team of experts are keeping an eye on what's happening around and making sure that you get all the inside information first.

			</p>
  </div>
  {#if loading}
  <Spinner/>
  {:else}
  <div class="blogs-grid container">
	{#each articles as article}
		<BlogCard article={article} />
	{/each}
  </div>
  {/if}

  <div class="container button-container">
        <button>Load More</button>
      </div>

  <Newsletter/>