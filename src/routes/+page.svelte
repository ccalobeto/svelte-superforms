<script lang="ts">
</script>

<div class="form-wrapper">
	<form method="POST">
		<label for="name">First Name</label>
		<input type="text" name="name" />

		<label for="name">Last Name</label>
		<input type="text" name="name" />

		<label for="email">E-mail</label>
		<input type="email" name="email" />

		<label for="email">Employee Number</label>
		<input type="number" name="employeeNumber" />

		<div><button>Submit</button></div>
	</form>
</div>

<style>
	.form-wrapper {
		display: flex;
		justify-content: center;
	}
	button {
		background-color: #008001;
		border-radius: 5px;
		border: none;
		padding: 10px;
	}
	button:hover {
		background-color: #aad922;
	}
</style>
