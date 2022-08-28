if (Bangle.CLOCK) {
(() => {
  function draw() {
    Bangle.removeListener("touch", touch);
    Bangle.on("touch", touch);
    g.reset().setColor("#ff0").drawImage(
      atob("GBgB/////////+f//8P//4H//wD//hh//Dw/+GYf8MMP4YGHwwDDhgBhDAAwmAAZ8AAP8AAP8AcP8AcP8AcP8AcP8AcP////////")
    , this.x, this.y);
  }
  function touch(_, c) {
    const w = WIDGETS["widlaun"];
    if (w && c.x>=w.x && c.x<=w.x+24 && c.y>=w.y && c.y<=w.y+24){
      const s = require("Storage");
      var apps = s
        .list(/\.info$/)
        .map((app) => {
          var a = s.readJSON(app, 1);
          return (
            a && {
              type: a.type,
              src: a.src
            }
          );
        })
        .filter((app) => app && (app.type == "launch"));

      load(apps[0].src);
    }
  }
  WIDGETS["widlaun"] = { area:"tr", width:24, draw: draw, sortorder:100 };
})();
}