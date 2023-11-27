<script>
  import { onMount } from 'svelte';
  import supabase from '../config/supabase.js';
  import { goto } from '$app/navigation';
  import doctor from '$lib/images/doctor.png';

    const goTo = (e) => {
  goto(`/${e.target.value}`)  
  setTimeout(() => {
        location.reload();
      }, 100);
  };
  
  let professions = [];
  onMount(async () => {
	
    const { data, error } = await supabase
          .from('articles')
          .select(`
            *,
            articlestatus(*),
            authors(*),
            categories(*),
            post_type(*),
            publication(*)
          `) .eq('status', 3).eq('publication_id', 1)

    if (error) console.log('error', error)
    //@ts-ignore
    else professions = data.filter(blog=>blog.categories.name == 'Profession')
    // console.log(professions)
	});
</script>

<section class="select">
    <div class="container">
  
  
    <div>
        <img src={doctor} alt="">
    </div>
    <div class="selector">
        <h1>
            Find the most effective <span>
         Passive Income
        </span> options for
        </h1>
        <select name="" id="" on:change|preventDefault={goTo}>
          <option value="" disabled selected> Select your Profession</option>
          {#each professions as profession}
          <option value={profession.url}>{profession.title}</option>
            {/each}
        </select>
        <p>
          Please remember that we may receive a commission when you click on our links to make a purchase. This, however, has no bearing on our reviews and comparisons. We will do our best to keep things fair and balanced to assist you in making the best decision for you.
  
        </p>
    </div>
  </div>
  </section>