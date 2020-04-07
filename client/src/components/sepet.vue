<template>
	<v-container grid-list-md>
		<div>
			<h6> {{urun.price}} </h6>
			<h6> {{urun.title}} </h6>
			<h6> {{urun.brand}} </h6>

		</div>
	

	</v-container>
</template>

<script>
 
	export default{

		props:['urun'],

		data(){
			return{
				value: 1
			
			};
		},
		
		
		
	}
		

</script>