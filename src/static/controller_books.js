import { Button, FormGroupInput, Card, Badge, DropDown } from '@/components';
import books from '../data/books.json'
import publishers from '../data/publishers.json'
import Pagination from 'vue-pagination-2';


export default {
  name: 'books',
  bodyClass: 'books-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput, 
    Card,
    Badge,
    DropDown, 
    Pagination
  },
  data(){
      return{
            bookList: books, 
            publishersList: publishers,
            result: [], 
            publisherName: '', 
            page: 1
      }
  }, 
  mounted(){
    console.log("oie");
    console.log(this.bookList.authors);
    console.log(this.publishersList.name);
    $.getJSON("modified_data.json", function(json_data) {
      self.datas = json_data.data
    })
  }
};
