<script lang="ts">
export default{

	data(){

		return {

			firstname:"",
			lastname:"",
			email:"",
			message:"",
			disable:false,
			btn_msg:"Send Message"
		}
	},
	methods:{

		clearForm(){

			this.firstname = ""
			this.lastname = ""
			this.email = ""
			this.message = ""
		},
		disableForm(disable:boolean = true){

			this.disable = disable
		},
		async submitForm(event:any){

			const contact = this;
			contact.disableForm()
			contact.btn_msg = "Wait.."

			await this.$recaptchaLoaded()
			const token = await this.$recaptcha("contact_form")

			console.log(token)

			setTimeout(function(){

				contact.disableForm(false)
				contact.btn_msg = "Failed: Try Again!"

			}, 2000)
			
			console.log("submitted")
		}
	}
}
</script>
<template>
	<!-- CONTACT -->
	<section id="contact" class="fabtheme-link-show">
		<div class="container-fluid h-100">
			<div class="row h-100 align-items-center mt-5 justify-content-start">
				<div class="col-11 col-sm-11 col-md-10 col-lg-10 col-xl-9 pl-0">
					<div class="p-3 p-sm-4 p-md-4 p-lg-5 p-xl-5 text-left wow fadeInLeft fabtheme-services-1" data-wow-duration="3s">
						<h2>Contact</h2>
						<div class="row pt-2">
							<div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
								<a href="mailto:info@kenaqua.co.ke" 
									class="fabtheme-link-2">
									<i class="fas fa-envelope-open"></i>
									<p>info@kenaqua.co.ke</p>
								</a>
								<i class="fas fa-map-marker"></i>
								<p>Kiambu, Kenya</p>
								<div class="col-12 py-2 pr-0">
									<a href="https://twitter.com/kenaqua_"  
										target="_blank" 
										class="fabtheme-link-2">
										<i class="fab fa-twitter fa-lg mr-2"></i>
										<p>@kenaqua_</p>
									</a>
								</div>
							</div>
							<form @submit.prevent="submitForm" 
									class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
								<!-- <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"> -->
									<div class="form-group fabtheme-field">
										<label for="form_name">Firstname *</label>
										<input id="form_name" type="text"  
										class="form-control" placeholder="Firstname" 
										v-model="firstname" :disabled="disable" 
										:class="{'contact-disabled': disable}"
									    required>
									</div>
									<div class="form-group fabtheme-field">
										<label for="form_lastname">Lastname *</label>
										<input id="form_lastname" type="text"  
										class="form-control" placeholder="Lastname" 
										v-model="lastname" :disabled="disable" 
										:class="{'contact-disabled': disable}" required>
									</div>
									<div class="form-group fabtheme-field">
										<label for="form_email">Email *</label>
										<input id="form_email" type="email"  
										class="form-control" placeholder="Email" 
										v-model="email" :disabled="disable" 
										:class="{'contact-disabled': disable}" required>
									</div>
									<div class="form-group fabtheme-field">
										<label for="form_message">Message</label>
										<textarea id="form_message"  
										class="form-control" placeholder="Message" rows="4"
										v-model="message" :disabled="disable" 
										:class="{'contact-disabled': disable}" required>
										</textarea>
									</div>
									<div class="form-group fabtheme-field">
										<input type="submit"
												id="form_btn" 
												class="btn fabtheme-button" 
												:value="btn_msg" :disabled="disable">
									</div>
								<!-- </div> -->
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- END OF CONTACT -->
</template>
<style scoped>
.contact-disabled{

  background-color: darkgrey;
}
</style>