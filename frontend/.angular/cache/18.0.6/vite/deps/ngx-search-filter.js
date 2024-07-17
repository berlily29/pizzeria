import {
  NgModule,
  Pipe,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe
} from "./chunk-QWAKMQFU.js";
import "./chunk-X6JV76XL.js";

// node_modules/ngx-search-filter/fesm2022/ngx-search-filter.mjs
var _NgxFilterPipe = class _NgxFilterPipe {
  /**
     * @param items object from array
     * @param term term's search
     * @param excludes array of strings which will ignored during search
     */
  transform(items, term, excludes = []) {
    if (!term || !items)
      return items;
    return _NgxFilterPipe.filter(items, term, excludes);
  }
  /**
   *
   * @param items List of items to filter
   * @param term  a string term to compare with every property of the list
   * @param excludes List of keys which will be ignored during search
   *
   */
  static filter(items, term, excludes) {
    const toCompare = term.toLowerCase();
    function checkInside(item, term2) {
      if (typeof item === "string" && item.toString().toLowerCase().includes(toCompare)) {
        return true;
      }
      for (let property in item) {
        if (item[property] === null || item[property] == void 0 || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === "object") {
          if (checkInside(item[property], term2)) {
            return true;
          }
        } else if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    }
    return items.filter(function(item) {
      return checkInside(item, term);
    });
  }
};
_NgxFilterPipe.ɵfac = function NgxFilterPipe_Factory(t) {
  return new (t || _NgxFilterPipe)();
};
_NgxFilterPipe.ɵpipe = ɵɵdefinePipe({
  name: "filter",
  type: _NgxFilterPipe,
  pure: false
});
var NgxFilterPipe = _NgxFilterPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxFilterPipe, [{
    type: Pipe,
    args: [{
      name: "filter",
      pure: false
    }]
  }], null, null);
})();
var _NgxSearchFilterModule = class _NgxSearchFilterModule {
};
_NgxSearchFilterModule.ɵfac = function NgxSearchFilterModule_Factory(t) {
  return new (t || _NgxSearchFilterModule)();
};
_NgxSearchFilterModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxSearchFilterModule,
  declarations: [NgxFilterPipe],
  exports: [NgxFilterPipe]
});
_NgxSearchFilterModule.ɵinj = ɵɵdefineInjector({});
var NgxSearchFilterModule = _NgxSearchFilterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSearchFilterModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxFilterPipe],
      imports: [],
      exports: [NgxFilterPipe]
    }]
  }], null, null);
})();
export {
  NgxFilterPipe,
  NgxSearchFilterModule
};
//# sourceMappingURL=ngx-search-filter.js.map
