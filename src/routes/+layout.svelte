<script>
	import { afterNavigate } from '$app/navigation';
	import '../app.css';

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});
</script>

<div class="mx-auto mt-8">
	<div class="bg-white shadow-lg rounded-lg p-4">
		<div class="mb-4">
            <h1 class="text-xl font-white text-center">Welcome to the career explorer page...</h1>
		</div>
        <slot />
	</div>
</div>
