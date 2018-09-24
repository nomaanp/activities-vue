<template>
  <v-app>
    <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>
  </v-toolbar>
    <v-content>
      <Timeline :timelineData="timelineData"></Timeline>
      
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Timeline from './components/Timeline'
import axios from 'axios';

var API = 'http://13.232.178.10/api/op.student';
var ACCESSTOKEN = 'cd896da1bc80baa14cac2347818612bd92ca67f3';


export default {
  name: 'App',
  components: {
    Timeline
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ACTIVITIES',
      timelineData: []
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: function() {
      var self = this;
      axios.get(API,{
        headers: {
          'Access-Token': ACCESSTOKEN
        }
      })
      .then(function (response) {
        var messages = [];
        var data = [];
        // console.log(response.data.results)
        data = response.data.results
          .filter(function(message) {
            return message.message_ids.length;
          })
          .map(function(message) {
            return message.message_ids.map(function(message_id) {
              var checked = false;
              if(message_id.body) {
                checked = message_id.body.toLowerCase().includes('checked-in') || message_id.body.toLowerCase().includes('checked-out')
              }
              return {
                id: message.id,
                img: message.image_medium,
                title: message.display_name,
                date: message_id.create_date,
                text: message_id.body,
                checked: checked
              };
            })
          })
          .flat()
          .sort(function(a, b) {
            var a_date = new Date(a.date);
            var b_date = new Date(b.date);
            return a_date - b_date;
          })
          .reduce((acc, message) => {
            var date = self.formatDate(message.date);
            if(!messages[date]) {
              messages[date] = [];
            }
            messages[date].push(message);
            return messages;
          }, {});
          
          self.timelineData = Object.keys(data).map((date) => {
          return {
            date,
            messages: data[date]
          };
        })
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {

      });
    },
    formatDate: function (date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }
  },
  
}
</script>
