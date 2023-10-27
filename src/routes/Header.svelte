<script lang="js">
	// import { page } from '$app/stores';
	import logo from '$lib/images/logoText.png';
	import doctor from '$lib/images/doctor.png';
</script>

<header class="top-nav nav-container">
	<div class="logo-menu">
		<div>
			<img src={logo} alt="logo">
		  </div>
		  <input id="menu-toggle" type="checkbox" />
		  <label class='menu-button-container' for="menu-toggle">
		  <div class='menu-button'></div>
		</label>
		  <ul class="menu">
			<li> <a href="/">Home</a></li>
			<li> <a href="/products">Digital Products</a></li>
			<li> <a href="/blog">Blog</a></li>			
		  </ul>
	</div>	   
		<div class="user">
			<img src={doctor} alt="user">
		  </div>
</header>

