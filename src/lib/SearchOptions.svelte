<script lang="ts">
	import axios from 'axios';
	import SearchIcon from './SearchIcon.svelte';
	import { createCareerData } from '$lib/careerSearchData.svelte.js';

	let keyword: string = $state('Computer Science');
	let location: string = $state('Boston');
	let radius: number = $state(25);
	let pageSize: number = $state(10);

	const sortColumns: number = $state(0);
	const sortOrder: number = $state(0);
	const startRecord: number = $state(0);
	const days: number = $state(30);

	const userId = import.meta.env.VITE_userId;
	const APIKey = import.meta.env.VITE_APIKey;

	const careerData = createCareerData();

	const sendAPIRequest = async () => {
		const url = `https://api.careeronestop.org/v1/jobsearch/${userId}/${keyword}/${location}/${radius}/${sortColumns}/${sortOrder}/${startRecord}/${pageSize}/${days}`;
		try {
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${APIKey}`
				}
			});
			careerData.set(response.data.Jobs);
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="flex justify-end">
	<button type="button" class="search-button" onclick={sendAPIRequest}>
		Search
		<SearchIcon />
	</button>
</div>

<label for="keyword" class="search-label">Keyword</label>
<input
	type="text"
	id="keyword"
	bind:value={keyword}
	class="search-input"
	placeholder="Computer Science"
/>

<label for="location" class="search-label" id="location-label">Location</label>
<input type="text" id="location" bind:value={location} class="search-input" placeholder="Boston" />

<label for="radius" class="search-label" id="radius-label">Radius</label>
<input type="number" id="radius" bind:value={radius} class="search-input" placeholder="20" />

<label for="result" class="search-label" id="result-label"># of result</label>
<input type="number" id="result" bind:value={pageSize} class="search-input" placeholder="10" />

<style lang="postcss">
	.search-button {
		@apply py-1 px-2 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700;
	}

	.search-label {
		@apply block text-sm font-medium mb-2;
	}

	.search-input {
		@apply py-3 px-4 block w-full border-gray-200 rounded-lg text-sm;
	}
</style>
