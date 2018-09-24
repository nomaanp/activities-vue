<template>
    <!-- <section class="timeline-container timeline">
        <div v-for="point in timelineData" class="timeline-block">
            <div class="timeline-img" :class="['timeline-img',point.pointColor===undefined?'red':point.pointColor]">
                <img v-if="point.img" v-bind:src="'data:image/jpeg;base64,'+point.img" alt="">
                <v-list-tile-avatar 
                v-if="point.checked"
                >
                <img v-bind:src="'data:image/jpeg;base64,'+point.img" />
                </v-list-tile-avatar>
            </div>
            
            <div class="timeline-content">
                <h2 v-text="point.title"></h2>
                <div v-html="point.text"></div>
                <span v-if="point.date" class="date" v-text="point.date"></span>
            </div>
          </div>
    </section> -->
    <div class="timeline mt-4">
        <div v-for="point in timelineData" class="timeline-group">
          <h2>{{ point.date | formatDate('DD MMMM, YYYY')}}</h2>
          <div v-for="message in point.messages" class="timeline-event">
              <v-layout row wrap>
                <v-flex xs6 pa-4>
                  <v-card>
                    <v-card-text class="text-xs-right">
                      {{ message.date | formatTime('h:mm A')}}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs6 pa-4>
                  <v-card>
                     <v-flex  
                      xs12
                      sm6
                      md8
                      pl-2
                      align-center
                      layout>
                       <v-avatar
                      v-if="message.img"
                      color="grey lighten-4"
                    >
                      <img v-bind:src="'data:image/jpeg;base64,'+message.img" alt="avatar">
                    </v-avatar>
                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0" v-text="message.title"></h3>
                        <div v-html="message.text"></div>
                      </div>
                    </v-card-title>
                     </v-flex>
                  </v-card>
                </v-flex>
              </v-layout>
            <div class="timeline-badge blue white-text"></div>
          </div>
        </div>   
      </div>
</template>

<style scoped>
  .timeline {
  position: relative;
  width: 90%;
  margin: 0 auto;
  border: 1px solid green;
}

.timeline .timeline-group h2 {
  text-align: center;
}

.timeline .timeline-event {
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
}

.timeline .timeline-event .timeline-content {
  position: relative;
  width: calc(50% - 50px);
}

.timeline .timeline-event::before {
  display: block;
  content: "";
  width: 2px;
  height: calc(50% - 0px);
  position: absolute;
  background: #d2d2d2;
  left: calc(50% - 1px);
  top: 0;
}

.timeline .timeline-event::after {
  display: block;
  content: "";
  width: 2px;
  height: calc(50% - 0px);
  position: absolute;
  background: #d2d2d2;
  left: calc(50% - 1px);
  top: calc(50% + 10px);
}

.timeline .timeline-event:first-child::before {
  display: none;
}

.timeline .timeline-event:last-child::after {
  display: none;
}

/* .timeline .timeline-event:nth-child(even) .timeline-content {
  margin-left: calc(50% + 50px);
}

.timeline .timeline-event:nth-child(odd) .timeline-content {
  margin-left: 0;
} */

.timeline .timeline-badge {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  background: #d2d2d2;
  top: calc(50% - 10px);
  right: calc(50% - 10px);
  border-radius: 50%;
  text-align: center;
  cursor: default;
}

.timeline .timeline-badge i {
  font-size: 25px;
  line-height: 40px;
}

@media (max-width: 600px) {
  .timeline .timeline-event .timeline-content {
    width: calc(100% - 70px);
  }
  .timeline .timeline-event::before {
    /* left: 19px; */
  }
  .timeline .timeline-event::after {
    /* left: 19px; */
  }
  .timeline .timeline-event:nth-child(even) .timeline-content {
    margin-left: 70px;
  }
  .timeline .timeline-event:nth-child(odd) .timeline-content {
    margin-left: 70px;
  }
  .timeline .timeline-badge {
    /* left: 0; */
  }
}
</style>

<script>
  import moment from 'moment';

  export default{
    props: {
      timelineData: {
        required: true
      }
    },
    data () {
      return {
        defaultImg: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg2OTExMDgyNTYzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzYxLjU2NTEwNSAwbDI5Ni44NzcxNjkgMCAwIDk3LjYwNzMxMy0yOTYuODc3MTY5IDAgMC05Ny42MDczMTNaIiBwLWlkPSIyMTQ3Ij48L3BhdGg+PHBhdGggZD0iTTQ2MS4xOTIyMDQgMzQzLjYyOTcyNWw5Ny42MDczMTMgMCAwIDI0NC4wMDI2MjYtOTcuNjA3MzEzIDAgMC0yNDQuMDAyNjI2WiIgcC1pZD0iMjE0OCI+PC9wYXRoPjxwYXRoIGQ9Ik05NTMuMjA1NzEzIDE2Mi42MDA1NjlsLTY5LjAwMTUxMy02OS4wMDE1MTMtMTI3LjcwMDU1MyAxMjcuNzAwNTUzYy03MC4yODU0MDctNDcuNzU0NjIxLTE1NS4xMTY0MDMtNzUuNzAyODE3LTI0Ni40OTIxMjktNzUuNzAyODE3QzI2Ny40MzM3MDEgMTQ1LjU5Njc5MyA3MC43OTQyNjUgMzQyLjIyMDU3MiA3MC43OTQyNjUgNTg0Ljc5ODM4OWMwIDI0Mi41NjIxNTkgMTk2LjYzOTQzNyA0MzkuMjAxNTk2IDQzOS4yMDE1OTYgNDM5LjIwMTU5NiAyNDIuNTc3ODE2IDAgNDM5LjIwMTU5Ni0xOTYuNjM5NDM3IDQzOS4yMDE1OTYtNDM5LjIwMTU5NiAwLTExNS45MjYyOTktNDUuMjQ5NDYtMjIxLjA0OTA5NC0xMTguNjM1MDA0LTI5OS41NTQ1NTlMOTUzLjIwNTcxMyAxNjIuNjAwNTY5ek04NTEuNjA1OCA1ODQuNzk4Mzg5YzAgMTg4LjY1NDIzOC0xNTIuOTQwMDQ0IDM0MS42MDk5NC0zNDEuNjA5OTQgMzQxLjYwOTk0UzE2OC40MDE1NzggNzczLjQ1MjYyNyAxNjguNDAxNTc4IDU4NC43OTgzODljMC0xODguNjY5ODk1IDE1Mi45NDAwNDQtMzQxLjYwOTk0IDM0MS42MDk5NC0zNDEuNjA5OTRTODUxLjYwNTggMzk2LjEyODQ5NCA4NTEuNjA1OCA1ODQuNzk4Mzg5eiIgcC1pZD0iMjE0OSI+PC9wYXRoPjwvc3ZnPg=='
      }
    },
    components: {},
    methods: {
      getImg: function (imgurl) {
        var ImgObj = new Image()
        ImgObj.src = imgurl-1
        if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
          return imgurl
        } else {
          return this.defaultImg
        }
      }
    },
    filters: {
      formatDate: function(value, format) {
        if (value) {
          var date = moment(String(value));
          if(moment().diff(date, 'days') >= 1) {
            return moment(String(value)).format(format);
          }
          return date.calendar().split(' ')[0] + ', ' + moment(String(value)).format(format);
        }
      },
      formatTime: function(value, format) {
        if (value) {
          var date = moment(String(value));
          return moment(String(value)).format(format);
        }
      }
    }
  }
</script>