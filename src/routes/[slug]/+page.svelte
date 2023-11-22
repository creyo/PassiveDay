<script>
    import home from '$lib/images/Home.svg'
	import gear from '$lib/images/gear.svg'
	import right from '$lib/images/right.svg'
    import doctor from '$lib/images/doctor.png'
    import try1 from '$lib/images/try1.png'
    import { page } from '$app/stores';
    import supabase from '../../config/supabase.js';
    import { onMount } from 'svelte';
    import Newsletter from '../Newsletter.svelte'
    import LatestBlogs from '../LatestBlogs.svelte'
    import Spinner from '../Spinner.svelte'
  import { goto } from '$app/navigation';
let slug;
let test_slug;
let article = [];
let articles = [];
    let content = "";
    let activeArticle = null;
let body = "";
let title = "";
let authorName = "";
let authorBio = "";
let date = "";
let featured_image = "";
let isLoading = true;
let type1 = false;
let type2 = false;
function formatUrlSegment(url) {
  const segments = url.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    const words = lastSegment.split('-');
    
    // Capitalize the first letter of each word
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    return formattedWords.join(' ');
  }
  const handleClick=(id)=>{
        // console.log("clicked",id);
        let filtered_article = articles.filter(article=>article.article_id==id);
        content = filtered_article[0].body
        goto(`/digital-products/${filtered_article[0].url}`)
        if (activeArticle === id) {
      activeArticle = null; // Deactivate if already active
    } else {
      activeArticle = id; // Activate the clicked article
    }
    }
	onMount(async () => {
    // Access the slug parameter from the route
    slug = $page.params.slug;
    // console.log(slug);    	
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
          

            test_slug = formatUrlSegment(slug);
              // @ts-ignore
         
      // article = data.filter(blog=>blog.url == slug);

      type1 = true ? data.filter(blog=>blog.url == slug && blog.post_type.type_name == 'Blog' ).length>0: false;
      // console.log( data.filter(blog=>blog.url == slug))
           // @ts-ignore
      type2 = true ? data.filter(blog=>blog.categories.name == 'Main' && blog.url == slug).length>0 : false;
      // console.log(type1,type2)

      if(type1){
        isLoading = false;
        type1 = true;
// @ts-ignore
        article = data.filter(blog=>blog.url == slug);
// @ts-ignore
body = article[0].body
      // @ts-ignore
      title = article[0].title
      // @ts-ignore
      authorName = article[0].authors.name
      // @ts-ignore
      authorBio = article[0].authors.bio
      // @ts-ignore
      const timestamp = article[0].date
      const localDate = new Date(timestamp);

// Convert to local time zone
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
     // @ts-ignore
     date = localDate.toLocaleDateString('en-US', options);
      }
         
  
    // @ts-ignore
      else if(type2){
            // @ts-ignore
        // console.log(data.filter(item=>item.categories.name==test_slug))
        type2 = true;
        isLoading = false;
         // @ts-ignore
        // let digital_products = data.filter(article=>article.post_type.type_name=="Page" && article.categories.name=="Digital Products");
			articles = data.filter(item=>item.categories.name==test_slug)
  
        // let slug = $page.params.slug;
        // @ts-ignore
        // let article_item = articles.filter(article=>article.url==slug);
        // console.log(article_item)
        // console.log(articles[0].body)

        // let article_item = articles[0]
        // console.log(article_item.body)
          // @ts-ignore
        title = test_slug;
          // @ts-ignore
        let foo = data.filter(blog=>blog.categories.name == 'Main' && blog.url == slug)[0];
           // @ts-ignore
        content = foo.body
          // @ts-ignore
        featured_image = foo.featured_image
        // console.log(featured_image)
          // @ts-ignore
        // activeArticle = article_item.article_id;
      //   if(article_item && article_item.length>0){
      //     // console.log('yes')
      //   // console.log(article)
      
      //   content = article_item.body;
      //   // console.log(content)
      //   // @ts-ignore
      //   activeArticle = article_item.article_id;
      // }
    }
         else{
               
          isLoading = false;
          goto("/404")
         }   
			
		}
  
  })



</script>

<svelte:head>
	<title>{title} | PassiveDay</title>
	<meta name="description" content="About this app" />
</svelte:head>
{#if isLoading}
<Spinner/>
{:else}
{#if type1}
{#if isLoading}
<!-- Display a loader while data is loading -->
<Spinner/>
{:else}
{#if article[0]}
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
		<p>{title}</p>
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
  <div class="blog-hero ">

    <h1>
        {title}
      </h1>

      <div class="blog-hero-flex">
            <img src={doctor} alt="">
             
          <p>
           {authorName}| {authorBio} |{date}
          </p>
        </div>
      <img src={try1} alt="try" >    
</div>
<div class="blog-content container">
    <p>
    {@html body}
    </p>
</div>

<div class="container next-blog">
    <p>Next Blog: <span>Navigating the Future: Content Writers and AI-Powered Tools </span> </p>
  </div>
<Newsletter/>
<div class="background">
  <h1>Latest From Our Blogs</h1>
<LatestBlogs/>
</div>

{:else}
  <p>Blog post not found</p>
{/if}
{/if}
{/if}

{#if type2}

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
      <p>{test_slug}</p>
    </div>
  </div>
</div>
<div class="ebook-hero container">
  <img src={`https://res.cloudinary.com/creyo-com/image/upload/v1700642325/passiveday/pages/${featured_image}`} alt="">
    <!-- <h1>{test_slug}</h1>
    <p>
Digital Products presents a monumental opportunity to create passive income. Explore the different options available.

    </p> -->
</div>
{#if isLoading}
<Spinner/>
{:else}
<section class="content-sidebar container">
  {#if articles.length>0}
    <div class="list">
        <div>
          <p>{test_slug}</p>
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
    <div>
      <p>{test_slug}</p>
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

<img src={`https://res.cloudinary.com/creyo-com/image/upload/v1700642325/passiveday/pages/${featured_image}`} alt="">
</div>
{/if}
{/if}
{/if}

