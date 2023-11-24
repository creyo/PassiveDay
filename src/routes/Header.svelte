<script lang="js">
	// import { page } from '$app/stores';
	import logo from '$lib/images/logoText.png';
	import doctor from '$lib/images/doctor.png';
</script>

<header class="top-nav nav-container">
	<div class="logo-menu">
		<div>
			<a href="/">
			<img src={logo} alt="logo">
			</a>
		  </div>
		  <input id="menu-toggle" type="checkbox" />
		  <label class='menu-button-container' for="menu-toggle">
		  <div class='menu-button'></div>
		</label>
		  <ul class="menu">
			<li> <a href="/">Home</a></li>
			<li> <a href="/blog">Blog</a></li>	
			<li>
				<span>Categories</span>
				<ul class="dropdown">
				  <li><a href="/digital-products" data-sveltekit-reload >Digital Products</a></li>
				  <li><a href="/ecommerce" data-sveltekit-reload> Ecommerce</a></li>
				  <li><a href="/affiliate-marketing" data-sveltekit-reload> Affiliate Marketing</a></li>
				  <li><a href="/real-estate" data-sveltekit-reload> Real Estate</a></li>
				  <li><a href="/crypto-currency" data-sveltekit-reload>Crypto Currency</a></li>
				  <li><a href="/stock-market" data-sveltekit-reload>Stock Market</a></li>
				</ul>
			  </li>		
		  </ul>
	</div>	   
		<!-- <div class="user">
			<img src={doctor} alt="user">
		  </div> -->
</header>

