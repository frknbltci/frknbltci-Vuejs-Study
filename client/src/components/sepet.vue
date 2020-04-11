<template>
	<v-container grid-list-md>
		
	<div id="app">
  <form action="https://postman-echo.com/post" method="post">
  <div v-show="step === 1">

    <h1>Step One</h1>
    
    <button @click.prevent="next()">Next</button>
    
  </div>

  <div v-show="step === 2">
    <h1>Step Two</h1>

  

    


    <button @click.prevent="prev()">Previous</button>
    <button @click.prevent="next()">Next</button>

  </div>

  <div v-show="step === 3">
    <h1>Step Three</h1>
    
    

  

    <button @click.prevent="prev()">Previous</button>
    <input type="submit" value="Save">
    
  </div>
  </form>

  <br/><br/>Debug: {{registration}}
</div>

	</v-container>
</template>

<script>
 
	export default{

	

		data(){
			return{
				step:1,
				value: 1
			
			};
		},
		methods:{
			prev() {
			this.step--;
			},
			next() {
			this.step++;
			}
 	 }
		
		
		
	}
		

</script>