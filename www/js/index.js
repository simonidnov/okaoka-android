/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    uuid:null,
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        if(typeof window.analytics !== "undefined"){
          window.analytics.startTrackerWithId('UA-122687516-1');
        }
        if(typeof window.plugins !== "undefined"){
          if(typeof window.plugins.uniqueDeviceID !== "undefined"){
            window.plugins.uniqueDeviceID.get(function(uuid){
              app.uuid = uuid;
              window.ga.setUserId(app.uuid);
            }, function(error){
              console.log('error get uuid ', error);
            });
          }
        }

    },
    navigate:function(){
      if(typeof window.analytics !== "undefined"){
        var view = window.location.hash.split('/')[1];
        window.ga.trackView(view);
        window.ga.setAppVersion('1.0.1')
        window.analytics.trackEvent(window.location.href, 'open_page', view, app.uuid);
      }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

    }
};

app.initialize();
