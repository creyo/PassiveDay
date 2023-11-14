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
let slug;
let article = [];
let body = "";
let title = "";
let authorName = "";
let authorBio = "";
let Date = "";
let isLoading = true;
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
          `).eq("publication_id","1")
if (error) {
			console.log(error);
		} else {
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
      Date = article[0].date
		}
    isLoading = false;
  })



</script>
<svelte:head>
	<title>{title} | PassiveDay</title>
	<meta name="description" content="About this app" />
</svelte:head>
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
           {authorName}| {authorBio} |{Date}
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
