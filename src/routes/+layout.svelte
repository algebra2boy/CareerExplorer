<script>
	import { afterNavigate } from '$app/navigation';
	import '../app.css';
</script>

<svelte:head>
	<title>Career Explorer</title>
</svelte:head>

<div class="mx-auto mt-8">
	<div class="bg-white shadow-lg rounded-lg p-4">
		<div class="mb-4 flex items-center justify-center">
			<a href="https://www.careeronestop.org/" class="mr-4 w-20 h-auto border-0"
				><img
					src="https://www.careeronestop.org/tridionmultimedia/tcm24-26158_CareerOneStopLogo-linktous.gif"
					alt="careeronestop logo"
				/></a
			>
			<h1 class="text-xl font-white">Welcome to the career explorer page...</h1>
		</div>
		<slot />
	</div>
</div>
