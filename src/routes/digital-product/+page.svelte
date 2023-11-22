
<svelte:head>
	<title>Digital Products | PassiveDay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
  // import stores from '../../stores'
    import Newsletter from "../Newsletter.svelte";
    import home from '$lib/images/Home.svg'
	import gear from '$lib/images/gear.svg'
	import right from '$lib/images/right.svg'
	import supabase from '../../config/supabase.js';
    import { onMount } from 'svelte';
  import LatestBlogs from "../LatestBlogs.svelte";
  import Spinner from '../Spinner.svelte';
  import { goto } from '$app/navigation';
    let articles = [];
    let content = "";
    let check = []
    let loading= true;
    let activeArticle = null;


	onMount(async () => {
	// console.log(stores)
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
      
      let digital_products = data.filter(article=>article.post_type.type_name=="Page" && article.categories.name=="Digital Products");
			articles = digital_products;
  
			// console.log(articles);
		}
        content = articles[0].body;
        // activeArticle = articles[0].article_id;
        loading = false;
	});
  
   
    const handleClick=(id)=>{
        // console.log("clicked",id);
        let filtered_article = articles.filter(article=>article.article_id==id);
        // console.log(filtered_article[0])
        content = filtered_article[0].body
        goto(`/digital-products/${filtered_article[0].url}`)
        if (activeArticle === id) {
      activeArticle = null; // Deactivate if already active
    } else {
      activeArticle = id; // Activate the clicked article
    }
    }
</script>

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
        <p>Digital Products</p>
      </div>
    </div>
  </div>
  <div class="ebook-hero container">

      <h1> Digital Products</h1>
      <p>
Digital Products presents a monumental opportunity to create passive income. Explore the different options available.

      </p>
  </div>
{#if loading}
<Spinner/>
{:else}
  <section class="content-sidebar container">

      <div class="list">
          <div>
            <p>Digital Products</p>
          </div>
         
          <ul>
            {#each articles as article}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li on:click={()=>handleClick(article.article_id)} class:active-li={activeArticle === article.article_id}>{article.title}</li>
            {/each}
          </ul>
        </div>
        
        <div class="content">
          <p>
             {@html content}
          </p>
        </div>

  </section>

  <Newsletter/>
  <div class="container">
    <div class="list-2">
      <div>
        <p>Digital Products</p>
      </div>
     
      <ul>
        {#each articles as article}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click={()=>handleClick(article.article_id)} class:active-li={activeArticle === article.article_id}>{article.title}</li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="background">
    <h1>Latest From Our Blogs</h1>
  <LatestBlogs/>
  </div>
  {/if}

