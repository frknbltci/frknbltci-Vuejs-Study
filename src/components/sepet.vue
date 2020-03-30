<template>
	<div id="sepet">
		<div class="container">
			<div class="row">
				<div class="col-9">
					<div class="row" style="margin: 50px 0px;">
						<div class="col-12" style="box-shadow: 0 0 5px 0 grey;">
							<div class="row">
								<div class="col-2">
									<img src="@/assets/products/1.jpg" alt="" style="width: 100%; height: 100%; object-fit: scale-down;">
								</div>
								<div class="col-3 my-auto text-left">
									<h6><b>Ürün İsmi</b></h6>
									<p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">Lorem İpsum Dolor Sit Amet</p>
								</div>
								<div class="col-3 my-auto" >
									
									<b-form-spinbutton id="sb-inline" v-model="value" inline></b-form-spinbutton>
								</div>
								<div class="col-md-2 my-auto">
									Birim Fiyatı
								</div>
								<div class="col-md-2 my-auto">
									Toplam Ücret
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-3">
					<div class="row" style="margin:50px 0px;">
						<div class="col-12" style="box-shadow: 0 2px 5px 0 grey;">
							<div class="row" style="padding: 15px 0px;">
								<div class="col-12 text-left">
									<h6><b>SİPARİŞ ÖZETİM</b></h6>
								</div>
								
							</div>
						</div>
						<div class="col-12" style="box-shadow: 0 2px 5px 0 grey;padding:15px 0px;">
							<div class="row" style="margin: 0px; padding: 15px 0px;">
								<div class="col-auto text-left">
									<h6><b>Ara Toplam :</b></h6>
								</div>
								<div class="col text-right">
									<h6><b>Price</b></h6>
								</div>
								
							</div>

							<div class="row" style="background: orange; margin: 0px; padding: 15px 0px;" >
								<div class="col-auto text-left">
									<h6><b>Toplam :</b></h6>
								</div>
								<div class="col text-right">
									<h6><b>Price</b></h6>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value: 1
			}
		},
		
	}
</script>