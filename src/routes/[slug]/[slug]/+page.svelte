
<svelte:head>
	<title>Digital Products | PassiveDay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
  import { page } from '$app/stores';
    import Newsletter from '../../Newsletter.svelte';
    import home from '$lib/images/Home.svg'
	import right from '$lib/images/right.svg'
	import supabase from '../../../config/supabase.js';
    import { onMount } from 'svelte';
  import LatestBlogs from "../../LatestBlogs.svelte";
  import Spinner from '../../Spinner.svelte';
  import { goto } from '$app/navigation';
   //@ts-ignore
  import IoIosPaper from 'svelte-icons/io/IoIosPaper.svelte'
  import { featured_image } from '$lib/stores';
    let articles = [];
    let content = "";
    let loading= true;
    let activeArticle = null;
    let staticPart= "";
    let main_category = "";
    function formatUrlSegment(url) {
  const segments = url.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const words = lastSegment.split('-');
    // Capitalize the first letter of each word
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return formattedWords.join(' ');
  }
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
          `).eq('status', 3).eq('publication_id', 1)

		if (error) {
			console.log(error);
		} else {
      let slug = $page.params.slug;
        // @ts-ignore
      let full_path = $page.url.pathname;
      const index = full_path.indexOf(slug);
      if (index !== -1) {
       staticPart = full_path.slice(0, index);
    } else {
      staticPart = full_path 
    }
    main_category = staticPart;
    staticPart = formatUrlSegment(staticPart)
        // @ts-ignore
			  articles =  data.filter(article=>article.post_type.type_name=="Page" && article.categories.name == staticPart).sort((a, b) => new Date(a.date) - new Date(b.date));
        console.log(articles)
         // @ts-ignore
        let foo = data.filter(blog=>(blog.categories.name == 'Main' && blog.url == main_category.replace(/^\/|\/$/g, '')  ))
          // @ts-ignore
          // console.log(foo)
        featured_image.set(foo[0].featured_image)
             // @ts-ignore
        let article = articles.filter(article=>article.url==slug );

        // @ts-ignore
        if(article && article.length>0){
        // @ts-ignore
        content = article[0].body;
        // @ts-ignore
        activeArticle = article[0].article_id;
        loading = false;
        }else{
            goto("/404")
        }
		}
       
      
	});

  
  const normalizePath = (...parts) => {
  // Remove leading and trailing slashes, then join parts with a single slash
  return `/${parts.map(part => part.replace(/^\/|\/$/g, '')).join('/')}`;
};

    const handleClick=(id)=>{
        // console.log("clicked",id);
        let filtered_article = articles.filter(article=>article.article_id==id);
        content = filtered_article[0].body
        // console.log(filtered_article)
        let url = normalizePath(main_category, filtered_article[0].url)
        goto(url)
        // console.log(url)
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
        <div  class='small-icon'>
          <IoIosPaper/>
        </div>
        <p>Digital Products</p>
      </div>
    </div>
  </div>
  <div class="ebook-hero container">
    <img src={`https://res.cloudinary.com/creyo-com/image/upload/v1700642325/passiveday/page/${$featured_image}`} alt="">
      <!-- <h1> Digital Products</h1>
      <p>
Digital Products presents a monumental opportunity to create passive income. Explore the different options available.

      </p> -->
  </div>
{#if loading}
<Spinner/>
{:else}
  <section class="content-sidebar container">
    {#if articles.length>0}
      <div class="list">
        <div class="list-category">
          <a href={main_category} >
          {staticPart}
        </a>
        </div>
         
          <ul>
            {#each articles as article}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li on:click={()=>handleClick(article.article_id)} class:active-li={activeArticle === article.article_id}>{article.title}</li>
            {/each}
          </ul>
        </div>
        {/if} 
        
        <div class="content">
          <p>
             {@html content}
          </p>
        </div>

  </section>

  <Newsletter/>
  <div class="container">
    {#if articles.length>0}
    <div class="list-2">
    <div class="list-category">
      <a href={main_category} >
      {staticPart}
    </a>
    </div>
     
      <ul>
   
        {#each articles as article}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click={()=>handleClick(article.article_id)} class:active-li={activeArticle === article.article_id}>{article.title}</li>
        {/each}
       
      </ul>
    </div>
    {/if}
  </div>
  
  <div class="background">
    <h1>Latest From Our Blogs</h1>
  <LatestBlogs/>
  </div>
  {/if}

