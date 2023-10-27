<script>
    export let article;
    import try1 from '$lib/images/try1.png'
    import doctor from '$lib/images/doctor.png';
</script>

<div class="blog-card">
    <img src={try1} alt="" class="blog-image">
    <h3><a href="{article.url}" data-sveltekit-reload>{article.title}</a></h3>
    <div class="info">
        <div  class="img-name">
            <img src={doctor} alt="" class="blog-user">
            <p class="name">{article.authors.name}</p>
        </div>
        <p class="designition">{article.authors.bio}</p>
    </div>
    <p class="blog-desc">{article.seo_description}</p>
</div>