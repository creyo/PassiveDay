<script>
    import BlogCard from './BlogCard.svelte'
	import supabase from '../config/supabase.js'
    import { onMount } from 'svelte';
	
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
            let digital_products = data.filter(article=>article.post_type.type_name=="Blog");
			articles = digital_products.slice(-3);
			// console.log(articles);
		}
	});
</script>


    <div class="blogs-grid container">
        {#each articles as article}
            <BlogCard article={article} />
        {/each}
</div>