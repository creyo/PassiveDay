<script>
	import heroImage from '$lib/images/sample1.png';
  import Newsletter from './Newsletter.svelte';

  import smile from '$lib/images/Icon.svg';
  import LatestBlogs from './LatestBlogs.svelte';
 

</script>

<svelte:head>
	<title>PassiveDay</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<section class="hero">
        <div class="hero-container">
            <div class="hero-text">
                <h1>Unlocking Financial Freedom Through Passive Income Streams.</h1>
                <p>
                  Find the exact methods to follow to create endless passive income based on your knowledge and experience. Our proven methods and processes will help you in your journey to unlimited passive income. Discover proven strategies, expert insights, and valuable resources to help you generate passive income and secure your financial future effortlessly. Explore our articles, tips, and tools to start earning money while you sleep
                  </p>
            </div>
            <div class="hero-image">
                <img src="src\lib\images\sample1.png" alt="">
            </div>
        </div>
    </section>

    <section class="unlocking container">
        <h1>Passive Income Opportunities for Better Life and Secure Future.
        </h1>
    </section>

    <section class="box-container">
        <div class="boxes">
          <div class="box box-l-1 box-u"> <a href="/digital-products"> Digital Products</a></div>
          <div class="box box-u"> <a href="/ecommerce"> Ecommerce</a></div>
        <div class="box box-l" ><a href="/affiliate-marketing"> Affiliate Marketing</a></div>
        <div class="box box-r"><a href="/real-estate"> Real Estate</a></div>
        <div class="box box-l-1 box-d"><a href="/crypto-currency">Crypto Currency</a>
        </div>
        <div class="box box-d"><a href="/stock-market">Stock Market</a></div>
      </div>
      </section>
      <section class="head-para container">
        <h1>Why Passive income?</h1>
        <p>
          Majority of us are not earning enough to secure a better future and spend money for a fulfilling life. Passive income allows us to have more secure steam of income which could grow as we get more experience and expertise.
          </p>
      </section>
      <div class="container">

    
      <section class="cards ">
        <div class="card">
        <img src={smile} alt="smiley">
        <h1>Basic Skills for Passive Income
        </h1>
        <p>
          Learn the basic skills and knowledge required for an efficient passive income stream. These basic information is helpful in all types of passive income streams.
           </p>
        <!-- <div class="link"><a href="">Learn More</a><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <path d="M3.94141 10H14.0431M10.1578 5L14.2707 9.41074C14.5741 9.73618 14.5741 10.2638 14.2707 10.5893L10.1578 15" stroke="#FF0000" stroke-width="1.67" stroke-linecap="round"/>
          </svg></div> -->
        </div>
        <div class="card">
            <img src={smile} alt="smiley">

        <h1>
          Passive Income based on Your Profession
          </h1>
        <p>
          Not everyone has same skills and proficiency and the inclination try all the passive income opportunities available. We have made everything easy for you. Find the best and easiest way to earn passive income using your current skill and expertise.
           </p>
        <!-- <div class="link"><a href="">Learn More</a><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <path d="M3.94141 10H14.0431M10.1578 5L14.2707 9.41074C14.5741 9.73618 14.5741 10.2638 14.2707 10.5893L10.1578 15" stroke="#FF0000" stroke-width="1.67" stroke-linecap="round"/>
          </svg></div> -->
        </div>
        <div class="card">
            <img src={smile} alt="smiley">

        <h1>Right Tools for Passive Money
        </h1>
        <p>
          As we start our journey to our financial freedom, we have to use different tools and processes to achieve it. We have painstakingly reviewed most tools available and selected the best tools and resources available
          </p>
        <!-- <div class="link"><a href="">Learn More</a><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <path d="M3.94141 10H14.0431M10.1578 5L14.2707 9.41074C14.5741 9.73618 14.5741 10.2638 14.2707 10.5893L10.1578 15" stroke="#FF0000" stroke-width="1.67" stroke-linecap="round"/>
          </svg></div> -->
        </div>
        <div class="card">   
			 <img src={smile} alt="smiley">

        <h1>Directory of Opportunities
        </h1>
        <p>
          There are far too many affiliate opportunities and income streams to get confused. We do the dirty work on reviewing, classifying and presenting to you in an easier way
          
           </p>
        <!-- <div class="link"><a href="">Learn More</a><svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <path d="M3.94141 10H14.0431M10.1578 5L14.2707 9.41074C14.5741 9.73618 14.5741 10.2638 14.2707 10.5893L10.1578 15" stroke="#FF0000" stroke-width="1.67" stroke-linecap="round"/>
          </svg></div> -->
        </div>
      </section>
      <Newsletter/>

      
      <section class="head-para container">
        <h1>Latest Blog Posts</h1>
        <p>Get abreast with the passive income landscape and keep up with the new opportunities and methods available. Our team of experts are keeping an eye on what's happening around and making sure that you get all the inside information first.
        </p>
      </section>
        <LatestBlogs/>
</div>
</div>
