<script lang="ts">
	import { page } from '$app/stores'
</script>

<h1>Profile</h1>

{#if $page.data.user}
	<p>User Profile {$page.data.user.username}</p>
	<p>User First Name {$page.data.user.fname}</p>

	<p>User surname {$page.data.user.surname}</p>

	<p>User role {$page.data.user.role}</p>


	<p>User student_number {$page.data.user.student_number}</p>
	<div class="container">
	  </div>
{/if}

{#if $page.data.user.role === 'ADMIN'}
	<form action="/logout" method="POST">
		<button type="submit">Log out</button>
	</form>
{/if}
