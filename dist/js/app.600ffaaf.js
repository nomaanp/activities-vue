(function(e) {
  function t(t) {
    for (
      var n, r, o = t[0], d = t[1], l = t[2], s = 0, f = [];
      s < o.length;
      s++
    )
      (r = o[s]), a[r] && f.push(a[r][0]), (a[r] = 0);
    for (n in d) Object.prototype.hasOwnProperty.call(d, n) && (e[n] = d[n]);
    u && u(t);
    while (f.length) f.shift()();
    return c.push.apply(c, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < c.length; t++) {
      for (var i = c[t], n = !0, o = 1; o < i.length; o++) {
        var d = i[o];
        0 !== a[d] && (n = !1);
      }
      n && (c.splice(t--, 1), (e = r((r.s = i[0]))));
    }
    return e;
  }
  var n = {},
    a = { app: 0 },
    c = [];
  function r(t) {
    if (n[t]) return n[t].exports;
    var i = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = e),
    (r.c = n),
    (r.d = function(e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (r.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function(t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var u = d;
  c.push([0, "chunk-vendors"]), i();
})({
  0: function(e, t, i) {
    e.exports = i("56d7");
  },
  "2ca5": function(e, t, i) {},
  "56d7": function(e, t, i) {
    "use strict";
    i.r(t);
    i("744f"),
      i("6c7b"),
      i("7514"),
      i("20d6"),
      i("1c4c"),
      i("6762"),
      i("cadf"),
      i("e804"),
      i("55dd"),
      i("d04f"),
      i("c8ce"),
      i("217b"),
      i("7f7f"),
      i("f400"),
      i("7f25"),
      i("536b"),
      i("d9ab"),
      i("f9ab"),
      i("32d7"),
      i("25c9"),
      i("9f3c"),
      i("042e"),
      i("c7c6"),
      i("f4ff"),
      i("049f"),
      i("7872"),
      i("a69f"),
      i("0b21"),
      i("6c1a"),
      i("c7c62"),
      i("84b4"),
      i("c5f6"),
      i("2e37"),
      i("fca0"),
      i("7cdf"),
      i("ee1d"),
      i("b1b1"),
      i("87f3"),
      i("9278"),
      i("5df2"),
      i("04ff"),
      i("f751"),
      i("4504"),
      i("fee7"),
      i("ffc1"),
      i("0d6d"),
      i("9986"),
      i("8e6e"),
      i("25db"),
      i("e4f7"),
      i("b9a1"),
      i("64d5"),
      i("9aea"),
      i("db97"),
      i("66c8"),
      i("57f0"),
      i("165b"),
      i("456d"),
      i("cf6a"),
      i("fd24"),
      i("8615"),
      i("551c"),
      i("097d"),
      i("df1b"),
      i("2397"),
      i("88ca"),
      i("ba16"),
      i("d185"),
      i("ebde"),
      i("2d34"),
      i("f6b3"),
      i("2251"),
      i("c698"),
      i("a19f"),
      i("9253"),
      i("9275"),
      i("3b2b"),
      i("3846"),
      i("4917"),
      i("a481"),
      i("28a5"),
      i("386d"),
      i("6b54"),
      i("4f7f"),
      i("8a81"),
      i("ac4d"),
      i("8449"),
      i("9c86"),
      i("fa83"),
      i("48c0"),
      i("a032"),
      i("aef6"),
      i("d263"),
      i("6c37"),
      i("9ec8"),
      i("5695"),
      i("2fdb"),
      i("d0b0"),
      i("b54a"),
      i("f576"),
      i("ed50"),
      i("788d"),
      i("14b9"),
      i("f386"),
      i("f559"),
      i("1448"),
      i("673e"),
      i("242a"),
      i("c66f"),
      i("b05c"),
      i("34ef"),
      i("6aa2"),
      i("15ac"),
      i("af56"),
      i("b6e4"),
      i("9c29"),
      i("63d9"),
      i("4dda"),
      i("10ad"),
      i("c02b"),
      i("4795"),
      i("130f"),
      i("ac6a"),
      i("96cf");
    var n = i("2b0e"),
      a = i("ce5b"),
      c = i.n(a);
    i("bf40");
    n["default"].use(c.a, { iconfont: "md" });
    var r = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "v-app",
          [
            i(
              "v-navigation-drawer",
              {
                attrs: {
                  persistent: "",
                  "mini-variant": e.miniVariant,
                  clipped: e.clipped,
                  "enable-resize-watcher": "",
                  fixed: "",
                  app: ""
                },
                model: {
                  value: e.drawer,
                  callback: function(t) {
                    e.drawer = t;
                  },
                  expression: "drawer"
                }
              },
              [
                i(
                  "v-list",
                  e._l(e.items, function(t, n) {
                    return i(
                      "v-list-tile",
                      { key: n, attrs: { value: "true" } },
                      [
                        i(
                          "v-list-tile-action",
                          [
                            i("v-icon", {
                              domProps: { innerHTML: e._s(t.icon) }
                            })
                          ],
                          1
                        ),
                        i(
                          "v-list-tile-content",
                          [
                            i("v-list-tile-title", {
                              domProps: { textContent: e._s(t.title) }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    );
                  })
                )
              ],
              1
            ),
            i(
              "v-toolbar",
              { attrs: { app: "", "clipped-left": e.clipped } },
              [
                i("v-toolbar-side-icon", {
                  on: {
                    click: function(t) {
                      t.stopPropagation(), (e.drawer = !e.drawer);
                    }
                  }
                }),
                i(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function(t) {
                        t.stopPropagation(), (e.miniVariant = !e.miniVariant);
                      }
                    }
                  },
                  [
                    i("v-icon", {
                      domProps: {
                        innerHTML: e._s(
                          e.miniVariant ? "chevron_right" : "chevron_left"
                        )
                      }
                    })
                  ],
                  1
                ),
                i("v-toolbar-title", {
                  domProps: { textContent: e._s(e.title) }
                }),
                i("v-spacer")
              ],
              1
            ),
            i(
              "v-content",
              [i("Timeline", { attrs: { timelineData: e.timelineData } })],
              1
            ),
            i("v-footer", { attrs: { fixed: e.fixed, app: "" } }, [
              i("span", [e._v("© 2017")])
            ])
          ],
          1
        );
      },
      o = [],
      d = function() {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "section",
          { staticClass: "timeline-container timeline" },
          e._l(e.timelineData, function(t) {
            return i("div", { staticClass: "timeline-block" }, [
              i(
                "div",
                {
                  staticClass: "timeline-img",
                  class: [
                    "timeline-img",
                    void 0 === t.pointColor ? "red" : t.pointColor
                  ]
                },
                [
                  t.checked
                    ? i("v-list-tile-avatar", [
                        i("img", {
                          attrs: { src: "data:image/jpeg;base64," + t.img }
                        })
                      ])
                    : e._e()
                ],
                1
              ),
              i("div", { staticClass: "timeline-content" }, [
                i("h2", { domProps: { textContent: e._s(t.title) } }),
                i("div", { domProps: { innerHTML: e._s(t.text) } }),
                t.date
                  ? i("span", {
                      staticClass: "date",
                      domProps: { textContent: e._s(t.date) }
                    })
                  : e._e()
              ])
            ]);
          })
        );
      },
      l = [],
      u = {
        props: { timelineData: { required: !0 } },
        data: function() {
          return {
            defaultImg:
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg2OTExMDgyNTYzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzYxLjU2NTEwNSAwbDI5Ni44NzcxNjkgMCAwIDk3LjYwNzMxMy0yOTYuODc3MTY5IDAgMC05Ny42MDczMTNaIiBwLWlkPSIyMTQ3Ij48L3BhdGg+PHBhdGggZD0iTTQ2MS4xOTIyMDQgMzQzLjYyOTcyNWw5Ny42MDczMTMgMCAwIDI0NC4wMDI2MjYtOTcuNjA3MzEzIDAgMC0yNDQuMDAyNjI2WiIgcC1pZD0iMjE0OCI+PC9wYXRoPjxwYXRoIGQ9Ik05NTMuMjA1NzEzIDE2Mi42MDA1NjlsLTY5LjAwMTUxMy02OS4wMDE1MTMtMTI3LjcwMDU1MyAxMjcuNzAwNTUzYy03MC4yODU0MDctNDcuNzU0NjIxLTE1NS4xMTY0MDMtNzUuNzAyODE3LTI0Ni40OTIxMjktNzUuNzAyODE3QzI2Ny40MzM3MDEgMTQ1LjU5Njc5MyA3MC43OTQyNjUgMzQyLjIyMDU3MiA3MC43OTQyNjUgNTg0Ljc5ODM4OWMwIDI0Mi41NjIxNTkgMTk2LjYzOTQzNyA0MzkuMjAxNTk2IDQzOS4yMDE1OTYgNDM5LjIwMTU5NiAyNDIuNTc3ODE2IDAgNDM5LjIwMTU5Ni0xOTYuNjM5NDM3IDQzOS4yMDE1OTYtNDM5LjIwMTU5NiAwLTExNS45MjYyOTktNDUuMjQ5NDYtMjIxLjA0OTA5NC0xMTguNjM1MDA0LTI5OS41NTQ1NTlMOTUzLjIwNTcxMyAxNjIuNjAwNTY5ek04NTEuNjA1OCA1ODQuNzk4Mzg5YzAgMTg4LjY1NDIzOC0xNTIuOTQwMDQ0IDM0MS42MDk5NC0zNDEuNjA5OTQgMzQxLjYwOTk0UzE2OC40MDE1NzggNzczLjQ1MjYyNyAxNjguNDAxNTc4IDU4NC43OTgzODljMC0xODguNjY5ODk1IDE1Mi45NDAwNDQtMzQxLjYwOTk0IDM0MS42MDk5NC0zNDEuNjA5OTRTODUxLjYwNTggMzk2LjEyODQ5NCA4NTEuNjA1OCA1ODQuNzk4Mzg5eiIgcC1pZD0iMjE0OSI+PC9wYXRoPjwvc3ZnPg=="
          };
        },
        components: {},
        methods: {
          getImg: function(e) {
            var t = new Image();
            return (
              (t.src = e - 1),
              t.fileSize > 0 || (t.width > 0 && t.height > 0)
                ? e
                : this.defaultImg
            );
          }
        }
      },
      s = u,
      f = (i("bd5e"), i("2877")),
      M = Object(f["a"])(s, d, l, !1, null, "80f4a1c6", null);
    M.options.__file = "Timeline.vue";
    var N = M.exports,
      p = i("bc3a"),
      D = i.n(p),
      b = "http://13.232.178.10/api/op.student",
      g = "cd896da1bc80baa14cac2347818612bd92ca67f3",
      I = {
        name: "App",
        components: { Timeline: N },
        data: function() {
          return {
            clipped: !1,
            drawer: !1,
            fixed: !1,
            items: [{ icon: "bubble_chart", title: "Inspire" }],
            miniVariant: !1,
            right: !0,
            rightDrawer: !1,
            title: "ACTIVITIES",
            timelineData: []
          };
        },
        created: function() {
          this.fetchData();
        },
        methods: {
          fetchData: function() {
            var e = this;
            D.a
              .get(b, { headers: { "Access-Token": g } })
              .then(function(t) {
                e.timelineData = t.data.results
                  .filter(function(e) {
                    return e.message_ids.length;
                  })
                  .map(function(e) {
                    return e.message_ids.map(function(t) {
                      var i = !1;
                      return (
                        t.body &&
                          (i =
                            t.body.toLowerCase().includes("checked-in") ||
                            t.body.toLowerCase().includes("checked-out")),
                        {
                          id: e.id,
                          img: e.image_medium,
                          title: e.display_name,
                          date: t.create_date,
                          text: t.body,
                          checked: i
                        }
                      );
                    });
                  })
                  .flat()
                  .sort(function(e, t) {
                    var i = new Date(e.date),
                      n = new Date(t.date);
                    return i - n;
                  });
              })
              .catch(function(e) {
                console.log(e);
              })
              .then(function() {});
          }
        }
      },
      T = I,
      j = Object(f["a"])(T, r, o, !1, null, null, null);
    j.options.__file = "App.vue";
    var m = j.exports;
    (n["default"].config.productionTip = !1),
      new n["default"]({
        render: function(e) {
          return e(m);
        }
      }).$mount("#app");
  },
  bd5e: function(e, t, i) {
    "use strict";
    var n = i("2ca5"),
      a = i.n(n);
    a.a;
  }
});
//# sourceMappingURL=app.600ffaaf.js.map
