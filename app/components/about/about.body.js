System.register(['angular2/core', 'angular2/http', 'service/gruntfiles/gruntfiles', './about.detail'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, gruntfiles_1, about_detail_1;
    var AboutBodyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (gruntfiles_1_1) {
                gruntfiles_1 = gruntfiles_1_1;
            },
            function (about_detail_1_1) {
                about_detail_1 = about_detail_1_1;
            }],
        execute: function() {
            AboutBodyComponent = (function () {
                function AboutBodyComponent(gruntfilesService) {
                    var _this = this;
                    this.gruntfilesService = gruntfilesService;
                    this.gruntfilesService.fetch()
                        .subscribe(function (res) {
                        _this.list = res.json();
                    });
                }
                AboutBodyComponent = __decorate([
                    core_1.Component({
                        selector: 'about-body',
                        providers: [http_1.HTTP_PROVIDERS, gruntfiles_1.GruntfilesService],
                        templateUrl: 'components/about/about.body.html',
                        directives: [about_detail_1.AboutDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof gruntfiles_1.GruntfilesService !== 'undefined' && gruntfiles_1.GruntfilesService) === 'function' && _a) || Object])
                ], AboutBodyComponent);
                return AboutBodyComponent;
                var _a;
            }());
            exports_1("AboutBodyComponent", AboutBodyComponent);
        }
    }
});
//# sourceMappingURL=about.body.js.map