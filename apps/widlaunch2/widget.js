(() => {
  function draw() {
    Bangle.removeListener("touch", touch);
    Bangle.on("touch", touch);

    if (Bangle.CLOCK) {
      g.reset().setColor("#ff0").drawImage(atob(
        "GBgB/////////+f//8P//4H//wD//hh//Dw/+GYf8MMP4YGHwwDDhgBhDAAwmAAZ8AAP8AAP8AcP8AcP8AcP8AcP8AcP////////"
      ), this.x, this.y);
    } else {//Close
      g.reset().setColor("#f00").drawImage(atob(
        "GBgBABgAAf+AB//gD//wH//4P//8P//8fn5+fjx+fxj+f4H+/8P//8P/f4H+fxj+fjx+fn5+P//8P//8H//4D//wB//gAf+AABgA"
      ), this.x, this.y);
    }
  }
  function touch(_, c) {
    const w = WIDGETS.widlaunch2;
    if (w && c.x>=w.x && c.x<=w.x+24 && c.y>=w.y && c.y<=w.y+24) {
      if (Bangle.CLOCK) {
        var apps = require("Storage")
          .list(/\.info$/)
          .map((app) => {
            var a = s.readJSON(app, 1);
            return (a && {
                type: a.type,
                src: a.src
            });
          })
          .filter((app) => app && (app.type == "launch"));

        load(apps[0].src);
      } else {//Close
        load();
      }
    }
  }
  WIDGETS.widlaunch2 = { area:"tr", width:24, draw: draw, sortorder:100 };
})();
