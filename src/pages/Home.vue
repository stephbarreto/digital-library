<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">National Library</h1>
          <h3 class="title">Your digital collection of the most popular books.</h3>
        </div>
      </div>
    </div>
    
    <div class="section section-team text-center">
      <div class="container">
        <div class="team">
         <h4 class="title">
            Select a category to start your search.
          </h4>
          <div class="row">
            <div class="col-md-6">
                <a class="title" href="/#/books">
                  <img
                    src="img/book.png"
                    class="rounded-circle img-raised"
                    style="width: 300px;"
                  />
                </a>                
              <h6 class="title">
                Most Popular Books
              </h6>
            </div>
  
            <div class="col-md-6">
              <div class="team-player">
                <a class="title" href="/#/publishers">
                  <img
                      v-lazy="'img/tw.png'"
                      class="rounded-circle img-raised"
                      style="width: 300px;"
                  />
                </a>
              </div>
              <h6 class="title">
                Our Publishers
              </h6>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
export default {
  name: 'home',
  bodyClass: 'home-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput, 
    
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>
