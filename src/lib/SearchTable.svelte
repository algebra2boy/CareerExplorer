<script lang="ts">
	import { createCareerData } from '$lib/careerSearchData.svelte.js';
	const careerData = createCareerData();
</script>

{#if careerData.careerData.length !== 0}
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="min-w-full inline-block align-middle">
				<div class="overflow-hidden">
					<table class="min-w-full divide-y divide-gray-200">
						<thead>
							<tr>
								<th scope="col" class="table-col">JobTitle</th>
								<th scope="col" class="table-col">Company</th>
								<th scope="col" class="table-col">Accquisition Date</th>
								<th scope="col" class="table-col">Location</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200">
							{#each careerData.careerData as career}
								<tr class="hover:bg-gray-300 dark:hover:bg-gray-300">
									<td class="table-item">{career.JobTitle}</td>
									<td class="table-item underline"><a href={career.URL}>{career.Company}</a></td>
									<td class="table-item">{career.AccquisitionDate}</td>
									<td class="table-item">{career.Location}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.table-col {
		@apply px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase;
	}
	.table-item {
		@apply px-6 py-4 whitespace-nowrap text-sm text-gray-800;
	}
</style>
