import classlist from "classes.js"
!function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("@tensorflow/tfjs")); else if ("function" == typeof define && define.amd) define(["@tensorflow/tfjs"], t); else {
    var r = "object" == typeof exports ? t(require("@tensorflow/tfjs")) : t(e["@tensorflow/tfjs"]);
    for (var n in r) ("object" == typeof exports ? exports : e)[n] = r[n]
  }
}(window, function (e) {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {i: n, l: !1, exports: {}};
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t]
      }.bind(null, o));
      return n
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return r.d(t, "a", t), t
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 1)
  }([function (t, r) {
    t.exports = e
  }, function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0);
    const o = [10, 13, 16, 30, 33, 23, 30, 61, 62, 45, 59, 119, 116, 90, 156, 198, 373, 326],
      i = [10, 14, 23, 27, 37, 58, 81, 82, 135, 169, 344, 319],
      a = classlist;
    r.d(t, "yolov3Tiny", function () {
      return p
    }), r.d(t, "yolov3", function () {
      return h
    });
    var s = function (e, t, r, n) {
      return new (r || (r = Promise))(function (o, i) {
        function a(e) {
          try {
            c(n.next(e))
          } catch (e) {
            i(e)
          }
        }

        function s(e) {
          try {
            c(n.throw(e))
          } catch (e) {
            i(e)
          }
        }

        function c(e) {
          e.done ? o(e.value) : new r(function (t) {
            t(e.value)
          }).then(a, s)
        }

        c((n = n.apply(e, t || [])).next())
      })
    }, c = function (e, t) {
      var r, n, o, i, a = {
        label: 0, sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1]
        }, trys: [], ops: []
      };
      return i = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this
      }), i;

      function s(i) {
        return function (s) {
          return function (i) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
              switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, {value: i[1], done: !1};
                case 5:
                  a.label++, n = i[1], i = [0];
                  continue;
                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;
                default:
                  if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue
                  }
                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break
                  }
                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue
              }
              i = t.call(e, a)
            } catch (e) {
              i = [6, e], n = 0
            } finally {
              r = o = 0
            }
            if (5 & i[0]) throw i[1];
            return {value: i[0] ? i[1] : void 0, done: !0}
          }([i, s])
        }
      }
    }, u = function (e) {
      return Array(e).fill(0).map(function (e, t) {
        return t
      })
    };

    function l(e, t, r, o, i) {
      var a = function (e, t, r, o) {
        return n.tidy(function () {
          var i = t.shape[0], a = t.reshape([1, i, 2]), s = e.shape.slice(0, 2),
            c = n.tile(n.reshape(u(s[0]), [-1, 1, 1, 1]), [1, s[1], 1, 1]),
            l = n.tile(n.reshape(u(s[1]), [1, -1, 1, 1]), [s[0], 1, 1, 1]).concat(c, 3);
          l = n.cast(l, e.dtype);
          var f = n.reshape(e, [s[0], s[1], i, r + 5]), d = n.split(f, [2, 2, 1, classlist.length], 3), p = d[0], h = d[1], v = d[2],
            b = d[3];
          return [n.div(n.add(n.sigmoid(p), l), s.reverse()), n.div(n.mul(n.exp(h), a), o.reverse()), n.sigmoid(v), n.sigmoid(b)]
        })
      }(e, t, r, o), s = a[0], c = a[1], l = a[2], f = a[3], d = function (e, t, r, o) {
        return n.tidy(function () {
          var i = n.concat(n.split(e, [1, 1], 3).reverse(), 3), a = n.concat(n.split(t, [1, 1], 3).reverse(), 3),
            s = n.div(r, o);
          i = n.div(n.mul(i, r), s), a = n.div(n.mul(a, r), s);
          var c = n.sub(i, n.div(a, 2)), u = n.add(i, n.div(a, 2));
          return n.concat(n.split(c, [1, 1], 3).concat(n.split(u, [1, 1], 3)), 3)
        })
      }(s, c, o, i);
      d = d.reshape([-1, 4]);
      var p = n.mul(l, f);
      return [d, p = p.reshape([-1, r])]
    }

    var f = document.createElement("canvas");
    f.width = 416, f.height = 416;
    var d = f.getContext("2d");

    function p(e) {
      var t = void 0 === e ? {} : e, r = t.modelUrl,
        n = void 0 === r ? "https://zqingr.github.io/tfjs-yolov3-demo/model/yolov3-tiny/model.json" : r, o = t.anchors,
        a = void 0 === o ? i : o;
      return s(this, void 0, void 0, function () {
        return c(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, v({modelUrl: n, anchors: a})];
            case 1:
              return [2, e.sent()]
          }
        })
      })
    }

    function h(e) {
      var t = void 0 === e ? {} : e, r = t.modelUrl,
        n = void 0 === r ? "https://zqingr.github.io/tfjs-yolov3-demo/model/yolov3/model.json" : r, i = t.anchors,
        a = void 0 === i ? o : i;
      return s(this, void 0, void 0, function () {
        return c(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, v({modelUrl: n, anchors: a})];
            case 1:
              return [2, e.sent()]
          }
        })
      })
    }

    function v(e) {
      var t = e.modelUrl, r = e.anchors;
      return s(this, void 0, void 0, function () {
        var e, o = this;
        return c(this, function (i) {
          switch (i.label) {
            case 0:
              return [4, n.loadLayersModel(t)];
            case 1:
              return e = i.sent(), [2, function (t) {
                return s(o, void 0, void 0, function () {
                  var o;
                  return c(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return d.drawImage(t, 0, 0, 416, 416), o = n.stack([n.div(n.cast(n.browser.fromPixels(f), "float32"), 255)]), [4, e.predict(o)];
                      case 1:
                        return [4, function (e, t, r, o, i, u, f) {
                          return void 0 === i && (i = 20), void 0 === u && (u = .3), void 0 === f && (f = .45), s(this, void 0, void 0, function () {
                            var s, d, p, h, v, b, y, m, g, w, k, x, j, S, z, O, P, A;
                            return c(this, function (c) {
                              switch (c.label) {
                                case 0:
                                  for (s = e.length, d = 3 === s ? [[6, 7, 8], [3, 4, 5], [0, 1, 2]] : [[3, 4, 5], [1, 2, 3]], p = e[0].shape.slice(0, 2).map(function (e) {
                                    return 32 * e
                                  }), h = [], v = [], z = 0; z < s; z++) b = l(e[z], t.gather(n.cast(n.tensor1d(d[z]), "int32")), r, p, o), y = b[0], m = b[1], h.push(y), v.push(m);
                                  g = n.concat(h, 0), w = n.concat(v, 0), k = [], x = [], j = [], S = n.split(w, Array(r).fill(1), 1), z = 0, c.label = 1;
                                case 1:
                                  return z < r ? [4, n.image.nonMaxSuppressionAsync(g, S[z].reshape([-1]), i, f, u)] : [3, 4];
                                case 2:
                                  if (!(O = c.sent()).size) return [3, 3];
                                  P = n.gather(g, O), A = n.gather(S[z], O), k = k.concat(n.split(P, Array(O.size).fill(1)).map(function (e) {
                                    return e.dataSync()
                                  })), x = x.concat(n.split(A, Array(O.size).fill(1)).map(function (e) {
                                    return e.dataSync()
                                  })), j = j.concat(Array(O.size).fill(z)), A.dispose(), P.dispose(), c.label = 3;
                                case 3:
                                  return z++, [3, 1];
                                case 4:
                                  return g.dispose(), w.dispose(), [2, k.map(function (e, t) {
                                    return {
                                      top: e[0],
                                      left: e[1],
                                      bottom: e[2],
                                      right: e[3],
                                      width: +e[3] - +e[1],
                                      height: +e[2] - +e[0],
                                      scores: x[t][0],
                                      classes: a[j[t]]
                                    }
                                  })]
                              }
                            })
                          })
                        }(i.sent().map(function (e) {
                          return e.reshape(e.shape.slice(1))
                        }), n.tensor1d(r).reshape([-1, 2]), a.length, [t.clientHeight, t.clientWidth])];
                      case 2:
                        return [2, i.sent()]
                    }
                  })
                })
              }]
          }
        })
      })
    }
  }])
});
