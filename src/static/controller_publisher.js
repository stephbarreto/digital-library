
import Vue from 'vue';
import { Button, FormGroupInput, Card, Badge, DropDown } from '@/components';
import publishers from '../data/publishers.json'
import fz from 'fuzzaldrin-plus';
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters);

export default {
  name: 'publishers',
  bodyClass: 'publishers-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput, 
    Card,
    Badge,
    DropDown,
  },
  mixins: [Vue2Filters.mixin],
  data(){
      return{
            publishersList: publishers,
            result: ''
      }
  }, 
  methods: {

  }
};
