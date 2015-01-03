var Cylon = require('cylon');
var _ = require("underscore");
var Q = require('q');

Cylon.robot({
  connections: {
    joystick: { adaptor: 'joystick' },
    speech: { adaptor: 'speech', voice: 'en-f3', speed: 130 },
  },

  devices: {
    controller: { driver: 'dualshock-3' },
    mouth: { driver: 'speech' },
  },

  work: function(my) {
    var mm = my;
    ["square", "circle", "x", "triangle", "left", "right", "up", "down"].forEach(function(button) {
      my.controller.on(button + ":press", function() {
        console.log("Button " + button + " pressed.");
        my.connections.speech.say(button);
      });

      my.controller.on(button + ":release", function() {
        console.log("Button " + button + " released.");
      });
    }); 
  }
});

Cylon.start();
