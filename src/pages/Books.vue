<template>
  <div id="books">
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
            Books
        </h2>
        <div class="col-md-12">
          <drop-down class="btn-group" style="float: right">
            <template slot="title">
                <button type="button" class="btn btn-default">Sort by</button>
                <button type="button" class="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                </button>
            </template>
            <a class="dropdown-item" @click="sortID()">Id</a>
            <a class="dropdown-item" href="#">Name</a>
           </drop-down>
        </div>
        <div class="row">
            <div class="col-md-10 ml-auto col-xl-6 mr-auto" v-for="(data, i) in bookList" v-bind:key="`${i}-${data.id}`">
                <card id="bookRow">
                    <div id="bookTemplate">
                        <badge class="justify-content-end" style="float: right;" type="default"><i class="now-ui-icons ui-2_favourite-28"></i> {{data.avgRatings}}</badge>
                        <a class="title">{{ data.title | uppercase }}</a> 
                        <div><b>{{ data.authors }}</b></div>
                        <div>Published in {{ data.publicationDate }}, by {{ publisherName }} </div> 
                        <div>{{ data.numPages }} pages</div> 
                        <div>Rated by {{ data.numRatings }} users</div>
                    </div>
                </card>

                <pagination v-model="page" :records="500" @paginate="myCallback"/>
            </div>   
        </div> 
      </div>
    </div>

  </div>
</template>
<script src="../static/controller_books.js"></script>
<style></style>
