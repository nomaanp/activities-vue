<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <Timeline :timelineData="timelineData"></Timeline>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
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
        // console.log(response.data.results)
        self.timelineData = response.data.results
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
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {

      });
    }
  }
}
</script>
