<template>
  <div id="publishers">
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
    
    <div class="section">
      <div class="container">
        <h2 class="title">
            Publishers
        </h2>
        <div class="row">
            <div class="col-md-10 ml-auto col-xl-6 mr-auto" v-for="data in publishersList" v-bind:key="data._id">
                <card id="publishersRow">
                    <div id="publisherTemplate">
                        <badge class="justify-content-end" style="float: right;" type="default">{{data._id}}</badge>
                        <a class="title">{{ data.name | uppercase }}</a> 
                    </div>
                </card>
            </div>   
        </div> 
      </div>
    </div>

  </div>
</template>
<script src="../static/controller_publisher.js"></script>
<style></style>
