webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CollaborateService = (function () {
    function CollaborateService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    CollaborateService.prototype.getuserName = function () {
        return JSON.parse(localStorage.getItem('user')).username;
    };
    CollaborateService.prototype.requestToCollaborate = function (id, postWriter, status) {
        var username = this.getuserName();
        var post = { ready: status };
        return this.http
            .patch("posts/requestCollaboration/" + postWriter + "/" + username + "/" + id, post);
    };
    CollaborateService.prototype.responseToCollab = function (id, person, post) {
        var username = this.getuserName();
        return this.http
            .patch("posts/respondToCollaboration/" + username + "/" + person + "/" + id, post);
    };
    CollaborateService.prototype.addDiscussion = function (id, comment) {
        var post = {
            text: comment
        };
        var username = this.getuserName();
        return this.http
            .patch("collab/discussions/" + username + "/" + id, post);
    };
    CollaborateService.prototype.participatios = function () {
        if (this.auth.isLoggedIn()) {
            var username = this.getuserName();
            return this.http.get("collab/participations/" + username);
        }
    };
    CollaborateService.prototype.delNotifications = function () {
        var username = this.getuserName();
        return this.http.get("collab/notifications/" + username);
    };
    CollaborateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], CollaborateService);
    return CollaborateService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/collaborate.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidateService = (function () {
    function ValidateService(http) {
        this.http = http;
        this.country = "in";
        this.url = "https://newsapi.org/v2/top-headlines?country=" + this.country + "&apiKey=175f4e0e69464ed7963b7e269901d3a7";
    }
    ValidateService.prototype.getNews = function (name) {
        this.country = name;
        return this.http.get(this.url);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], ValidateService);
    return ValidateService;
    var _a;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('users/register', user, { headers: headers });
    };
    AuthService.prototype.loginIser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers });
    };
    AuthService.prototype.saveDetails = function (token, data) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(data));
        this.token = token;
        this.currentUser = data;
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.currentUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('token');
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(513);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/main.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostsService = (function () {
    function PostsService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    PostsService.prototype.getAllPosts = function () {
        return this.http.get('posts/allposts');
    };
    PostsService.prototype.addPost = function (post) {
        var mypost = {
            username: JSON.parse(localStorage.getItem('user')).username,
            title: post.title,
            text: post.text
        };
        console.log(mypost);
        return this.http.post('posts/addpost', mypost);
    };
    PostsService.prototype.userPosts = function (username) {
        return this.http.get("posts/" + username);
    };
    PostsService.prototype.getPost = function (id) {
        var username = JSON.parse(localStorage.getItem('user')).username;
        return this.http.get("posts/" + username + "/" + id);
    };
    PostsService.prototype.updatePost = function (post, postId) {
        var username = JSON.parse(localStorage.getItem('user')).username;
        return this.http.patch("posts/" + username + "/" + postId, post);
    };
    PostsService.prototype.deletePost = function (id) {
        var username = JSON.parse(localStorage.getItem('user')).username;
        return this.http.delete("posts/" + username + "/" + id);
    };
    PostsService.prototype.likeChange = function (post) {
        var username = JSON.parse(localStorage.getItem('user')).username;
        return this.http.patch("posts/like/" + username + "/" + post.postId, post);
    };
    PostsService.prototype.postComment = function (id, post) {
        var mYcomment = { comment: post };
        var username = JSON.parse(localStorage.getItem('user')).username;
        return this.http.patch("posts/comment/" + username + "/" + id, mYcomment);
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], PostsService);
    return PostsService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/posts.service.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(721),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/about.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(722),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_validate_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__post_post_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__explore_explore_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_guard_service__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_edit_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__explore_like_like_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__view_post_view_likes_component__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_my_pipes_pipe__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__view_post_collborate_collborate_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_collaborate_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__collabs_collabs_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_reverse_pipe__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__participations_participations_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_idfilter_pipe__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__about_about_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__not_found_not_found_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__common_app_errors_app_errors_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__errors_app_errors_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__footer_footer_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ui_loading_spinner_loading_spinner_component__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ui_square_spinner_square_spinner_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ui_window_spinner_window_spinner_component__ = __webpack_require__(536);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






































var appRoute = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_30__about_about_component__["a" /* AboutComponent */] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_31__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_31__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_16__post_post_component__["a" /* PostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'explore', component: __WEBPACK_IMPORTED_MODULE_17__explore_explore_component__["a" /* ExploreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'edit/:postWriter/:id', component: __WEBPACK_IMPORTED_MODULE_19__edit_edit_component__["a" /* EditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'viewlikes/:id', component: __WEBPACK_IMPORTED_MODULE_21__view_post_view_likes_component__["a" /* ViewLikesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'collaborate/:username/:postId', component: __WEBPACK_IMPORTED_MODULE_25__collabs_collabs_component__["a" /* CollabsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'participations', component: __WEBPACK_IMPORTED_MODULE_27__participations_participations_component__["a" /* ParticipationsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_31__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_17__explore_explore_component__["a" /* ExploreComponent */],
                __WEBPACK_IMPORTED_MODULE_19__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__explore_like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__view_post_view_likes_component__["a" /* ViewLikesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_my_pipes_pipe__["a" /* MyPipesPipe */],
                __WEBPACK_IMPORTED_MODULE_23__view_post_collborate_collborate_component__["a" /* CollborateComponent */],
                __WEBPACK_IMPORTED_MODULE_25__collabs_collabs_component__["a" /* CollabsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pipes_reverse_pipe__["a" /* ReversePipe */],
                __WEBPACK_IMPORTED_MODULE_27__participations_participations_component__["a" /* ParticipationsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_idfilter_pipe__["a" /* IdfilterPipe */],
                __WEBPACK_IMPORTED_MODULE_30__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_31__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_32__common_app_errors_app_errors_component__["a" /* AppErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_35__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_36__ui_square_spinner_square_spinner_component__["a" /* SquareSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_37__ui_window_spinner_window_spinner_component__["a" /* WindowSpinnerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoute)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__service_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__service_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_18__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_24__service_collaborate_service__["a" /* CollaborateService */],
                { provide: __WEBPACK_IMPORTED_MODULE_28__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_28__angular_common__["b" /* HashLocationStrategy */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_33__errors_app_errors_service__["a" /* AppErrorHandler */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/app.module.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn())
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/auth-guard.service.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_collaborate_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollabsComponent = (function () {
    function CollabsComponent(postService, route, router, collabsService) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.collabsService = collabsService;
        this.showSpinner = true;
    }
    CollabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('user')).username;
        var params = this.route.snapshot.params;
        this.postId = params['postId'];
        this.postService.getPost(this.postId).subscribe(function (res) {
            var p = res.json();
            _this.post = p.result;
            _this.collabRequests = _this.post.requestedForCollaboration;
            _this.collabs = _this.post.collaborations;
            _this.comments = _this.post.discussions;
            _this.title = _this.post.title;
            if (currentUser === _this.post.username) {
                _this.isAdmin = true;
            }
            else
                _this.isAdmin = false;
            _this.num = _this.collabs.length;
            _this.newreqLen = _this.collabRequests.length;
            var user = localStorage.getItem('user');
            var username = JSON.parse(user).username;
            if (_this.collabs.indexOf(username) >= 0 || _this.isAdmin) {
                _this.isSneaking = false;
                _this.postWriter = _this.post.username;
            }
            else {
                _this.isSneaking = true;
                _this.router.navigate(['/notfound']);
            }
            _this.showSpinner = false;
        }, function (error) {
            alert('Opps something gone wrong');
        });
    };
    CollabsComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    CollabsComponent.prototype.add = function (person) {
        var _this = this;
        var post = { accept: true };
        // console.log(this.post._id,this.post.username,post)
        this.collabsService.responseToCollab(this.post._id, person, post)
            .subscribe(function (res) {
            var index = _this.collabRequests.indexOf(person);
            _this.collabs.push(person);
            _this.collabRequests.splice(index, 1);
            _this.num = _this.collabs.length;
        });
    };
    CollabsComponent.prototype.delete = function (person) {
        var _this = this;
        var post = { accept: false };
        this.collabsService.responseToCollab(this.post._id, person, post)
            .subscribe(function (res) {
            var index = _this.collabRequests.indexOf(person);
            _this.collabRequests.splice(index, 1);
        });
    };
    CollabsComponent.prototype.submit = function () {
        var _this = this;
        if (this.comment) {
            var user = localStorage.getItem('user');
            var username = JSON.parse(user).name;
            var userComment_1 = username + " : " + this.comment;
            this.collabsService.addDiscussion(this.postId, userComment_1).subscribe(function (res) {
                console.log(res);
                _this.comments.splice(0, 0, userComment_1);
                _this.comment = null;
                _this.show = !_this.show;
            });
        }
    };
    CollabsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collabs',
            template: __webpack_require__(723),
            styles: [__webpack_require__(701)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_collaborate_service__["a" /* CollaborateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_collaborate_service__["a" /* CollaborateService */]) === 'function' && _d) || Object])
    ], CollabsComponent);
    return CollabsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/collabs.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppErrorsComponent = (function () {
    function AppErrorsComponent() {
    }
    AppErrorsComponent.prototype.ngOnInit = function () {
    };
    AppErrorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-errors',
            template: __webpack_require__(724),
            styles: [__webpack_require__(702)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppErrorsComponent);
    return AppErrorsComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/app-errors.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_validate_service__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(news) {
        this.news = news;
        this.showSpinner = true;
        this.url = "http://news.bbcimg.co.uk/news/special/2015/newsspec_10077/content/english/img/1024/future_of_news.jpg";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$subsription = this.news.getNews("in").subscribe(function (res) {
            var result = res.json();
            if (result.status === "ok") {
                _this.articles = result.articles;
                _this.showSpinner = false;
            }
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.$subsription.unsubscribe();
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(725),
            styles: [__webpack_require__(703)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(route, postService, router) {
        this.route = route;
        this.postService = postService;
        this.router = router;
        this.showLoader = true;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        //console.log(params['id'])
        this.postId = params['id'];
        var postWriter = params['postWriter'];
        //console.log(postWriter)
        var user = JSON.parse(localStorage.getItem('user')).username;
        if (user === postWriter) {
            this.postService.getPost(params['id']).subscribe(function (res) {
                var post = res.json();
                _this._title = post.result.title;
                _this._text = post.result.text;
                // console.log(post)
                _this.showLoader = false;
            });
        }
        else {
            this.router.navigate(['/notfound']);
        }
    };
    EditComponent.prototype.submit = function () {
        var _this = this;
        var post = {
            title: this._title,
            text: this._text
        };
        this.postService.updatePost(post, this.postId).subscribe(function (res) {
            var status = res.json();
            if (status.success) {
                _this.router.navigate(['/profile']);
            }
            else
                _this.router.navigate(['/dashboard']);
        });
    };
    EditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(726),
            styles: [__webpack_require__(704)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], EditComponent);
    return EditComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/edit.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('Unexpected error has occoured Try refreshing');
        console.log(error);
    };
    return AppErrorHandler;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/app-errors.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExploreComponent = (function () {
    function ExploreComponent(postService) {
        this.postService = postService;
        this.showSpinner = true;
        this.isClicked = false;
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getAllPosts().subscribe(function (res) {
            var p = res.json();
            _this.posts = p.result;
            var user = localStorage.getItem('user');
            _this.name = JSON.parse(user).name;
            _this.showSpinner = false;
        });
    };
    ExploreComponent.prototype.onLikeChange = function (post) {
        // console.log(post)
        this.postService.likeChange(post).subscribe(function (res) { return console.log(res); });
    };
    ExploreComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(727),
            styles: [__webpack_require__(705)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object])
    ], ExploreComponent);
    return ExploreComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/explore.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LikeComponent = (function () {
    function LikeComponent(auth) {
        this.auth = auth;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LikeComponent.prototype.ngOnInit = function () {
        var user = localStorage.getItem('user');
        var username = JSON.parse(user).username;
        if (this.likedBy.indexOf(username) >= 0) {
            this.isClicked = true;
        }
        else {
            this.isClicked = false;
        }
        (this.isClicked) ? this.buttonState = "Liked" : this.buttonState = "Likes";
    };
    LikeComponent.prototype.toggle = function () {
        this.isClicked = !this.isClicked;
        if (this.isClicked) {
            this.likes++;
            this.buttonState = "Liked";
        }
        else {
            this.likes--;
            this.buttonState = "Likes";
        }
        this.change.emit({ likesCount: this.isClicked, postId: this.postId });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], LikeComponent.prototype, "likes", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "change", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LikeComponent.prototype, "postId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], LikeComponent.prototype, "likedBy", void 0);
    LikeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'like',
            template: __webpack_require__(728),
            styles: [__webpack_require__(706)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LikeComponent);
    return LikeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/like.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(729),
            styles: [__webpack_require__(707)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/footer.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(postService, auth) {
        this.postService = postService;
        this.auth = auth;
        this.isClicked = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HomeComponent.prototype, "status", {
        get: function () {
            return this.auth.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(730),
            styles: [__webpack_require__(708)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/home.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.show = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function (f) {
        var _this = this;
        this.show = true;
        var user = f.value;
        this.auth.loginIser(user).subscribe(function (res) {
            var status = res.json();
            //console.log(status)
            if (status.success === true) {
                _this.auth.saveDetails(status.token, status.user);
                _this.router.navigate(['/profile']);
            }
            _this.invalidLogin = true;
            _this.show = false;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(731),
            styles: [__webpack_require__(709)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/login.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngDoCheck = function () {
        var navName = localStorage.getItem('user');
        if (navName)
            this.name = JSON.parse(navName).name;
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/']);
    };
    Object.defineProperty(NavbarComponent.prototype, "status", {
        get: function () {
            return this.auth.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(732),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(733),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/not-found.component.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_collaborate_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_posts_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParticipationsComponent = (function () {
    function ParticipationsComponent(collabService, postService, router) {
        this.collabService = collabService;
        this.postService = postService;
        this.router = router;
        this.showSpinner = true;
    }
    ParticipationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.collabService.participatios().subscribe(function (res) {
            _this.info = res.json();
            _this.inCollabortion = _this.info.result['inCollaboration'];
            _this.notificatios = _this.info.result['notifications'];
            _this.num = _this.notificatios.length;
            //console.log(this.inCollabortion)
            //console.log(this.notificatios)
            _this.showSpinner = false;
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this.postService.userPosts(this.user.username).subscribe(function (res) {
            var p = res.json();
            _this.posts = p.result;
            if (_this.posts) {
                _this.lenofPosts = _this.posts.length;
            }
            else {
                _this.lenofPosts = 0;
            }
        });
    };
    ParticipationsComponent.prototype.goto = function (item) {
        var val = item.split('-');
        this.router.navigateByUrl("/collaborate/" + val[1] + "/" + val[0]);
    };
    ParticipationsComponent.prototype.toggle = function () {
        var val = this.notificatios.length;
        this.notificatios.splice(0, val);
        this.num = this.notificatios.length;
        if (val > 0) {
            this.collabService.delNotifications().subscribe(function (res) {
                var result = res.json();
                if (result.success) {
                }
            }, function (error) { return alert('opps something went wrong'); });
        }
    };
    ParticipationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-participations',
            template: __webpack_require__(734),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_collaborate_service__["a" /* CollaborateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_collaborate_service__["a" /* CollaborateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ParticipationsComponent);
    return ParticipationsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/participations.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdfilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IdfilterPipe = (function () {
    function IdfilterPipe() {
    }
    IdfilterPipe.prototype.transform = function (value, args) {
        if (value) {
            var val = value.split('-');
            return val[2];
        }
        else
            return null;
    };
    IdfilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'idfilter'
        }), 
        __metadata('design:paramtypes', [])
    ], IdfilterPipe);
    return IdfilterPipe;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/idfilter.pipe.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPipesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPipesPipe = (function () {
    function MyPipesPipe() {
    }
    MyPipesPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        var date = value.substring(0, 10);
        return date;
    };
    MyPipesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'myPipes'
        }), 
        __metadata('design:paramtypes', [])
    ], MyPipesPipe);
    return MyPipesPipe;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/my-pipes.pipe.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        if (value) {
            return value.reverse();
        }
        else
            return null;
    };
    ReversePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'reverse',
        }), 
        __metadata('design:paramtypes', [])
    ], ReversePipe);
    return ReversePipe;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/reverse.pipe.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostComponent = (function () {
    function PostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    PostComponent.prototype.submit = function (f) {
        var _this = this;
        var post = f.value;
        console.log(post);
        this.postService.addPost(post).subscribe(function (res) {
            var status = res.json();
            if (status.success) {
                alert("your post was saved");
                _this.router.navigate(['/profile']);
            }
            else {
                _this.router.navigate(['/post']);
            }
        });
    };
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(735),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/post.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(auth, postsService, router) {
        this.auth = auth;
        this.postsService = postsService;
        this.router = router;
        this.showSpinner = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.name = this.user.name;
        this.postsService.userPosts(this.user.username).subscribe(function (res) {
            var p = res.json();
            _this.posts = p.result;
            if (_this.posts) {
                _this.plen = _this.posts.length;
            }
            else {
                _this.plen = 0;
            }
            _this.showSpinner = false;
        });
    };
    ProfileComponent.prototype.removePost = function (post) {
        var _this = this;
        if (confirm('Are you sure you wanted to delete This')) {
            this.postsService.deletePost(post._id).subscribe(function (res) {
                var status = res.json();
                if (status.success) {
                    var index = _this.posts.indexOf(post);
                    _this.posts.splice(index, 1);
                    _this.router.navigate(["/profile"]);
                }
                else
                    alert('Opps something went wrong try refreshing the page');
            });
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(736),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.show = false;
    }
    RegisterComponent.prototype.submit = function (f) {
        var _this = this;
        if (this.username && this.email && this.password && this.name) {
            this.show = true;
            var user = { username: this.username, email: this.email, password: this.password, name: this.name };
            this.auth.registerUser(user).subscribe(function (res) {
                var status = res.json();
                console.log(status);
                if (status.success) {
                    _this.invalidDetails = false;
                    _this.router.navigate(['/login']);
                }
                else if (status.success == false) {
                    _this.invalidDetails = true;
                    _this.show = false;
                }
            }, function (error) { return console.log(error); });
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(737),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/register.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'loading-spinner',
            template: __webpack_require__(738),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/loading-spinner.component.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SquareSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SquareSpinnerComponent = (function () {
    function SquareSpinnerComponent() {
    }
    SquareSpinnerComponent.prototype.ngOnInit = function () {
    };
    SquareSpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'square-spinner',
            template: __webpack_require__(739),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], SquareSpinnerComponent);
    return SquareSpinnerComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/square-spinner.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowSpinnerComponent = (function () {
    function WindowSpinnerComponent() {
    }
    WindowSpinnerComponent.prototype.ngOnInit = function () {
    };
    WindowSpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'window-spinner',
            template: __webpack_require__(740),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], WindowSpinnerComponent);
    return WindowSpinnerComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/window-spinner.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollborateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollborateComponent = (function () {
    function CollborateComponent() {
    }
    CollborateComponent.prototype.ngOnInit = function () {
    };
    CollborateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'collborate',
            template: __webpack_require__(741),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [])
    ], CollborateComponent);
    return CollborateComponent;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/collborate.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_posts_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_collaborate_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLikesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewLikesComponent = (function () {
    function ViewLikesComponent(route, postService, router, collaborateService) {
        this.route = route;
        this.postService = postService;
        this.router = router;
        this.collaborateService = collaborateService;
        this.showLoader = true;
    }
    ViewLikesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var params = this.route.snapshot.params;
        //console.log(params['id'])
        this.postService.getPost(params['id']).subscribe(function (res) {
            var post = res.json();
            _this.post = post.result;
            _this.title = _this.post.title;
            _this.text = _this.post.text;
            _this.username = _this.post.username;
            _this.likedBy = _this.post.likedBy;
            _this.id = _this.post._id;
            _this.date = _this.post.createdAt;
            _this.comments = _this.post.comments;
            _this.requestsForCollab = _this.post.requestedForCollaboration;
            _this.collaborations = _this.post.collaborations;
            //console.log(this.requestsForCollab)
            _this.len = _this.collaborations.length;
            _this.likesLength = _this.likedBy.length;
            _this.commentsLen = _this.post.comments.length;
            var username = JSON.parse(localStorage.getItem('user')).username;
            if (username === _this.username) {
                _this.isPostWriter = true;
            }
            else {
                _this.isPostWriter = false;
            }
            if (_this.collaborations.indexOf(username) >= 0) {
                _this.isCollabed = true;
            }
            else {
                _this.isCollabed = false;
            }
            //console.log(this.isCollabed)
            //console.log(this.collaborations)
            if (_this.requestsForCollab.indexOf(username) >= 0) {
                _this.isClicked = true;
            }
            else {
                _this.isClicked = false;
            }
            ;
            (_this.isClicked) ? _this.display = "Undo Collaboration request" : _this.display = "Request to Join";
            _this.showLoader = false;
        });
    };
    ViewLikesComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    ViewLikesComponent.prototype.submit = function () {
        var _this = this;
        if (this.comment) {
            var user = localStorage.getItem('user');
            var username = JSON.parse(user).name;
            var userComment = username + " : " + this.comment;
            // console.log(this.comment)
            this.comments.splice(0, 0, userComment);
            this.postService.postComment(this.id, userComment).subscribe(function (res) {
                //  console.log(res)
                _this.comment = null;
                _this.show = !_this.show;
            });
        }
    };
    ViewLikesComponent.prototype.request = function () {
        var _this = this;
        this.isClicked = !this.isClicked;
        //console.log(this.postId,this.postWriter,this.isClicked)
        this.collaborateService.requestToCollaborate(this.id, this.username, this.isClicked)
            .subscribe(function (res) {
            var response = res.json();
            if (response.success) {
                (_this.isClicked) ? _this.display = "Undo Collaboration request" : _this.display = "Collaborate";
                alert("" + response.message);
            }
        });
    };
    ViewLikesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-likes',
            template: __webpack_require__(742),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_posts_service__["a" /* PostsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_collaborate_service__["a" /* CollaborateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_collaborate_service__["a" /* CollaborateService */]) === 'function' && _d) || Object])
    ], ViewLikesComponent);
    return ViewLikesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/view-likes.component.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/maharshi/Desktop/MeanApp/angular-src/src/environment.js.map

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = ".my-pagination /deep/ .ngx-pagination .current {\r\n   background: rgb(33, 1, 70);\r\n   -webkit-text-emphasis-color: white;\r\n           text-emphasis-color: white;\r\n }"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = ".jumbotron-fluid{\r\n   background: #3a6186;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n   background: linear-gradient(to right, #89253e, #3a6186); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n   \r\n\r\n}"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = ".card{\r\n   border: 2px solid rgb(66, 65, 109)\r\n}\r\n.card-title{\r\n   color:rgb(216, 8, 112)\r\n}\r\n.card-text{\r\n   color:rgb(0, 0, 0)\r\n}\r\n/* .card-footer {\r\n   background-color: rgb(66, 65, 109)\r\n   \r\n} */\r\n.text-center{\r\n   color:#fff;\r\n}\r\n.lead{\r\n   color:rgb(53, 54, 100)\r\n}\r\n.jumbo{\r\n   background: #780206;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n   background: linear-gradient(to right, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n   \r\n}\r\nh3{\r\n   color:rgb(240, 134, 134)\r\n}\r\n.lead{\r\n   color:#ffff\r\n}\r\n.explore{\r\n   background: #0f0c29;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n   background: rgb(33, 1, 70);\r\n   -webkit-text-emphasis-color: white;\r\n           text-emphasis-color: white;\r\n }"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = ".jumbo{\r\n   background: #23074d;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n   background: linear-gradient(to bottom, #cc5333, #23074d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n   \r\n}\r\n.lumbo{\r\n   background: #009FFF;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\n.tumbo{\r\n   background: #b92b27;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\nbackground: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n}\r\n#home{\r\n   color: beige\r\n}\r\nh1{\r\n   color:rgb(235, 156, 11)\r\n}\r\n.mycard{\r\n   border: 2px solid rgb(235, 94, 58)\r\n}"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ".nav-link{\r\n color: #ffff;\r\n}"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ".my-text{\r\n   color:rgb(156, 13, 102)\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n   background: rgb(33, 1, 70);\r\n   -webkit-text-emphasis-color: white;\r\n           text-emphasis-color: white;\r\n }\r\n .title{\r\n   color:rgb(28, 2, 88);\r\n }"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".card{\r\n   border: 2px solid rgb(66, 65, 109)\r\n}\r\n.card-title{\r\n   color:rgb(216, 8, 112)\r\n}\r\n.card-text{\r\n   color:rgb(0, 0, 0)\r\n}\r\n/* .card-footer {\r\n   background-color: rgb(66, 65, 109)\r\n   \r\n} */\r\n.text-center{\r\n   color:#fff;\r\n}\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n   background: rgb(33, 1, 70);\r\n   -webkit-text-emphasis-color: white;\r\n           text-emphasis-color: white;\r\n }\r\n/* .pagination{\r\n   align-content: center;\r\n   color: red;\r\n   background-color: green\r\n} */"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n   width: 40px;\r\n   height: 40px;\r\n \r\n   position: relative;\r\n   margin: 100px auto;\r\n }\r\n \r\n .double-bounce1, .double-bounce2 {\r\n   width: 100%;\r\n   height: 100%;\r\n   border-radius: 50%;\r\n   background-color: #333;\r\n   opacity: 0.6;\r\n   position: absolute;\r\n   top: 0;\r\n   left: 0;\r\n   animation: sk-bounce 2.0s infinite ease-in-out;\r\n }\r\n \r\n .double-bounce2 {\r\n   animation-delay: -1.0s;\r\n }\r\n \r\n @keyframes sk-bounce {\r\n   0%, 100% { \r\n     transform: scale(0.0);\r\n     -webkit-transform: scale(0.0);\r\n   } 50% { \r\n     transform: scale(1.0);\r\n     -webkit-transform: scale(1.0);\r\n   }\r\n }"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ".spinner {\r\n   margin: 100px auto;\r\n   width: 50px;\r\n   height: 40px;\r\n   text-align: center;\r\n   font-size: 10px;\r\n }\r\n \r\n .spinner > div {\r\n   background-color: #333;\r\n   height: 100%;\r\n   width: 6px;\r\n   display: inline-block;\r\n   animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n }\r\n \r\n .spinner .rect2 {\r\n   animation-delay: -1.1s;\r\n }\r\n \r\n .spinner .rect3 {\r\n   animation-delay: -1.0s;\r\n }\r\n \r\n .spinner .rect4 {\r\n   animation-delay: -0.9s;\r\n }\r\n \r\n .spinner .rect5 {\r\n   animation-delay: -0.8s;\r\n }\r\n \r\n @keyframes sk-stretchdelay {\r\n   0%, 40%, 100% { \r\n     transform: scaleY(0.4);\r\n     -webkit-transform: scaleY(0.4);\r\n   }  20% { \r\n     transform: scaleY(1.0);\r\n     -webkit-transform: scaleY(1.0);\r\n   }\r\n }"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ".sk-cube-grid {\r\n   width: 40px;\r\n   height: 40px;\r\n   margin: 100px auto;\r\n }\r\n \r\n .sk-cube-grid .sk-cube {\r\n   width: 33%;\r\n   height: 33%;\r\n   background-color: #333;\r\n   float: left;\r\n   animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; \r\n }\r\n .sk-cube-grid .sk-cube1 {\r\n   animation-delay: 0.2s; }\r\n .sk-cube-grid .sk-cube2 {\r\n   animation-delay: 0.3s; }\r\n .sk-cube-grid .sk-cube3 {\r\n   animation-delay: 0.4s; }\r\n .sk-cube-grid .sk-cube4 {\r\n   animation-delay: 0.1s; }\r\n .sk-cube-grid .sk-cube5 {\r\n   animation-delay: 0.2s; }\r\n .sk-cube-grid .sk-cube6 {\r\n   animation-delay: 0.3s; }\r\n .sk-cube-grid .sk-cube7 {\r\n   animation-delay: 0s; }\r\n .sk-cube-grid .sk-cube8 {\r\n   animation-delay: 0.1s; }\r\n .sk-cube-grid .sk-cube9 {\r\n   animation-delay: 0.2s; }\r\n \r\n @keyframes sk-cubeGridScaleDelay {\r\n   0%, 70%, 100% {\r\n     transform: scale3D(1, 1, 1);\r\n   } 35% {\r\n     transform: scale3D(0, 0, 1);\r\n   } \r\n }"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = ".my-pagination /deep/ .ngx-pagination .current {\r\n   background: rgb(33, 1, 70);\r\n   -webkit-text-emphasis-color: white;\r\n           text-emphasis-color: white;\r\n }"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-10\">\n    <br>\n    <br>\n    <br>\n    <br>\n\n\n\n    <h2>What is EXCO</h2>\n    <p>\n      EXCO it a two sided community, so it works with differently based on what type of user you are. We think of all of our users\n      as Entrepreneurs and/or Explorers. Entrepreneurs are people who provide a product or service solution. Explorers are\n      people who want to part of the solution by being an investor, advisor, employees, cofounder etc. Entrepreneurs can\n      publish their startup or just a business idea on EXCO. Once they publish it, the whole user community of EXCO will\n      see that as a venture. Each person can view the venture, along with all the details, and provide feedback. The feedback\n      is very simple. They pick from two icons and it triggers options for the user to select why they made that specific\n      choice. The entrepreneur can see the data of who likes/dislikes their product and why. Additionally, each user has\n      a profile with some basic information and preferences so people can connect and chat for collaboration opportunities.\n      Career Companion is like a companion for your career. A user can log in and manage all aspects of their career. There\n      are few core components of Career Companion, starting with the modules to better understand oneself with five key aspects:\n      1. Career Questions 2. Career Goals 3. Career Competencies 4. Career Assets 5. Career Assessments\n    </p>\n    <br>\n    <h1>About EXCO - brief introduction </h1>\n    <p>\n      EXCO is an Website for people in love with entrepreneurship. It’s a community and platform to explore startups and ideas,\n      get feedback and insights on your ventures, and find people to collaborate with to build and scale your business. Career\n      Companion is for anyone who is passionate about their career and needs the support to succeed. It’s the first comprehensive\n      career platform providing you the one-stop space to manage your career in a simple, effective, and flexible way. Career\n      Companion platform complies tools, processes, and techniques to help you design your career blueprint, prepare for\n      career success, and drive career fulfillment.\n    </p>\n    <h3 style=\"text-align: end;\">@Maharshi</h3>\n     <a class=\"btn btn-info\" routerLink=\"/\">Back To Home</a>\n    \n\n  </div>\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isSneaking\" class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <br>\n        <br>\n        <h6>Admin : {{postWriter}}</h6>\n        <h6>Companions {{num}}</h6>\n        <ul class=\"nav flex-column\">\n          <li *ngFor=\"let person of collabs;let i= index\" class=\"nav-item\">\n            <a class=\"nav-link active \" class=\"btn btn-default\">{{i+1}} : {{person}}</a>\n\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-6\">\n        <br>\n        <br>\n        <h3>Discussions on {{title}}</h3>\n        <loading-spinner *ngIf=\"showSpinner\"></loading-spinner>\n        <button class=\"btn btn-outline-primary\" (click)=\"toggle()\">Say Something</button>\n        <br>\n        <form *ngIf=\"show\">\n          <div class=\"form-group\">\n            <label for=\"exampleFormControlTextarea1\">Comment Here</label>\n            <textarea required class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n          </div>\n          <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-primary\">Post</button>\n        </form>\n        <br>\n\n        <ul class=\"list-group\">\n          \n          <li *ngFor=\"let item of comments | reverse  |paginate: {itemsPerPage:15,currentPage:p}\" class=\"list-group-item\">{{item}}</li>\n          <pagination-controls autoHide=\"true\" class=\"my-pagination\" (pageChange)=\"p =$event\"></pagination-controls>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <br>\n        <br>\n        <ng-container>\n          <h6>New Requests {{newreqLen}}</h6>\n          <ul class=\"nav flex-column\">\n            <li *ngFor=\"let person of collabRequests;let i= index\" class=\"nav-item\">\n              <a class=\"nav-link active \">{{i+1}} : {{person}}</a>\n              <ng-container  *ngIf=\"isAdmin\">\n                <button class=\"btn btn-outline-success \" (click)=\"add(person)\">Add</button>\n              <button class=\"btn btn-outline-danger\" (click)=\"delete(person)\">Decline</button>\n              </ng-container>\n              <br>\n              <br>\n            </li>\n          </ul>\n        </ng-container>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<p>\n  app-errors works!\n</p>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4 news\">Global News</h1>\n      \n         \n      <p class=\"lead news\">Trending  on this Hour</p>\n    </div>\n  </div>\n<window-spinner *ngIf=\"showSpinner\"></window-spinner>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <ng-container *ngFor=\"let article of articles;let i = index\">\n                <div class=\"col\">\n                    <div  class=\"card\" style=\"width: 18rem;\">\n                        <img *ngIf=\"article.urlToImage\" class=\"card-img-top\" [src]=\"article.urlToImage \">\n                        <img *ngIf=\"!article.urlToImage\" class=\"card-img-top\" [src]=\"url\" >\n                        <div class=\"card-body\">\n                          <h5 class=\"card-title\">{{article.title}}</h5>\n                          <p class=\"card-text\">{{article.description}} </p>\n                          <a target=\"_blank\" [href]=article.url class=\"btn btn-primary\">Read Full Story</a>\n                        </div>\n                      </div>\n                </div>\n               \n                <div *ngIf=\"(i+1)%3===0\" class=\"w-100\">\n                 <br>\n                 <hr>\n                </div>\n            </ng-container>\n           \n        \n          </div>\n    </div>\n  </div>\n</div>\n  \n\n\n"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  \n  <div class=\"col-md-3\">\n     \n  </div>\n  <div class=\"col-md-6\">\n    <square-spinner *ngIf=\"showLoader\"></square-spinner>\n      <h2 class=\"page-header\">Edit Post</h2>\n      <form >\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input \n            required \n            minlength=\"3\" \n            \n            [(ngModel)]=\"_title\"\n            \n           name=\"title\"\n            id=\"title\" \n            type=\"text\" \n            class=\"form-control\">\n         \n            \n          </div>\n        \n        <div class=\"form-group\">\n          <label for=\"text\">Text</label>\n          <textarea [(ngModel)]=\"_text\" name=\"text\" required id=\"text\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n        </div>\n       \n        <button (click)=\"submit()\" class=\"btn btn-primary\">Submit</button>\n      </form>\n  </div>\n  \n  <div class=\"col-md-3\">\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbo jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h3 class=\"display-4\">Hey {{name}} Explore ideas and Products</h3>\n    <p class=\" lead\">Suggest people in improving their products </p>\n    <p class=\"lead\">Find your favourite posts or ideas and request to collaborate </p>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n\n  </div>\n  <div class=\"col-md-5\">\n    <ng-container *ngIf=\"showSpinner\">\n        <loading-spinner></loading-spinner>\n    </ng-container>\n\n   \n    <div class=\"row\">\n      <ng-container *ngFor=\"let post of posts |reverse| paginate: {itemsPerPage:6,currentPage:p} ;let i = index\">\n        <div class=\"col\">\n          <div class=\"card\">\n              \n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"text-align: center\">{{post.title}}</h5>\n              <p class=\"card-text\">{{post.text}}</p>\n              \n              <p >\n                  posted on {{post.createdAt | myPipes}} # {{post.username}}\n                </p>\n            </div>\n            <div class=\"card-footer text-muted\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-2\">\n                  <like [likes]=\"post.likes\" [likedBy]=\"post.likedBy\" [postId]=\"post._id\" (change)=\"onLikeChange($event)\"></like>\n                </div>\n                <div class=\"col text-center\">\n                    <a [routerLink]=\"['/viewlikes',post._id]\" class=\"btn btn-success \">Comments {{post.comments.length}}</a>\n                </div>\n                <div class=\"col-3\">\n                  <a [routerLink]=\"['/viewlikes',post._id]\" class=\"btn btn-dark \">Join</a>\n                </div>\n              </div>\n\n            </div>\n\n\n\n\n          </div>\n        </div>\n\n        <div *ngIf=\"(i+1)%1===0\" class=\"w-100\">\n          <br>\n          <hr>\n        </div>\n      </ng-container>\n    <pagination-controls class=\"my-pagination\" autoHide=\"true\" (pageChange)=\"p =$event\"></pagination-controls>\n\n    </div>\n\n\n  </div>\n  <div class=\"col-md-2\">\n\n  </div>\n</div>"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggle()\" \n class=\"btn\"\n[class.btn-danger]=\"isClicked\"\n[class.btn-dark]=\"!isClicked\"\n>{{buttonState}} {{likes}}</button>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n\n      <div class=\"jumbo jumbotron text-center\">\n\n\n        <h1>EXCO</h1>\n        <p class=\"lead\" id=\"home\">Welcome Explore and Collaborate</p>\n        <p id=\"home\">Post your startUp idea and Collaborate With people around </p>\n\n        <div *ngIf=\"!status\">\n          <p id=\"home\">Get Started</p>\n          <a class=\"btn btn-primary\" routerLink=\"/register\">Register</a>\n          <a class=\"btn btn-primary\" routerLink=\"/login\">Login</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\"lumbo jumbotron text-center\">\n\n\n        <h1>EXCO</h1>\n        <p id=\"home\" class=\"lead\">Be a Collaborator With Your Favourite Ideas and StartUps</p>\n        <p id=\"home\">Publish your product and show what your product can do</p>\n\n        <div *ngIf=\"!status\">\n          <p id=\"home\">Get Started</p>\n          <a class=\"btn btn-primary\" routerLink=\"/register\">Register</a>\n          <a class=\"btn btn-primary\" routerLink=\"/login\">Login</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <div class=\" tumbo jumbotron text-center\">\n\n\n        <h1>EXCO</h1>\n        <p class=\"lead\" id=\"home\">Work with your collaborators Easily</p>\n\n\n        <p id=\"home\">Advertise Events with Ease</p>\n\n        <div *ngIf=\"!status\">\n          <p id=\"home\">Get Started</p>\n          <a class=\"btn btn-primary\" routerLink=\"/register\">Register</a>\n          <a class=\"btn btn-primary\" routerLink=\"/login\">Login</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"card-deck\">\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"http://digitallearning.eletsonline.com/wp-content/uploads/2017/09/IIT-allows-startups-to-participate-in-placement-drive.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Start-ups</h5>\n          <p class=\"card-text\">Post your start ups and find people to work with you and also Exco Helps you to scale your idea </p>\n        </div>\n        <div class=\"card-footer\">\n\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://content.audiospace.co/stations/40/files/Page%20Images%20-%20600%20x%20400/banner1.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Product-publicity</h5>\n          <p class=\"card-text\">Publish your products and make your product more popular and get suggestions from people to improve</p>\n        </div>\n        <div class=\"card-footer\">\n\n        </div>\n      </div>\n      <div class=\"card\">\n        <img class=\"card-img-top\" src=\"https://assets.smartbygep.com/sites/default/files/top-banner/events.jpg\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Publish-Events</h5>\n          <p class=\"card-text\">Expose your events to World And attract People</p>\n        </div>\n        <div class=\"card-footer\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<br>\n\n<div class=\"container\">\n  <div class=\" col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-5\"></div>\n      <div class=\"col-md-2\">\n        <button routerLink=\"/about\" class=\"btn btn-info\">Know More</button>\n      </div>\n\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  \n  <div class=\"col-md-3\">\n     \n  </div>\n  <div class=\"col-md-6\">\n     <br><br>\n      \n      <div class=\"card logincard w-80\">\n          <div class=\"card-body\">\n            \n            <br>\n            <h5 class=\"card-title\">\n                Login/\n                <a class=\"btn btn-dark\" routerLink=\"/register\">Sign Up Here</a>\n            </h5>\n            <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n        \n                <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid Username or password</div>\n                        \n                       \n                        <div class=\"form-group\">\n                          <label for=\"username\">username</label>\n                          <input \n                            required \n                            minlength=\"5\" \n                            maxlength=\"15\" \n                            \n                            ngModel \n                            name=\"username\" \n                            #username=\"ngModel\" \n                           \n                            id=\"username\" \n                            type=\"text\" \n                            class=\"form-control\">\n                          <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"username.touched && !username.valid\">\n                            <div *ngIf=\"username.errors.required\">\n                              username name is required.\n                            </div>\n                            \n                           \n                          </div>\n                        </div>\n                \n                        <div class=\"form-group\">\n                          <label for=\"password\">Password</label>\n                          <input \n                            required \n                            minlength=\"3\" \n                            maxlength=\"20\" \n                            \n                            ngModel \n                            name=\"password\" \n                            #password=\"ngModel\" \n                            \n                            id=\"password\" \n                            type=\"password\" \n                            class=\"form-control\">\n                          <div \n                            class=\"alert alert-danger\" \n                            *ngIf=\"password.touched && !password.valid\">\n                            <!-- <div *ngIf=\"password.errors.required\"> -->\n                              Password is required.\n                            <!-- </div> -->\n                            \n                            \n                          </div>\n                        </div>\n                      \n                        \n                         \n                        \n                        <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Login</button>\n            </form>\n          </div>\n        </div>\n     \n      <loading-spinner *ngIf=\"show\"></loading-spinner>\n  </div>\n\n\n</div>\n<br><br>\n\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light \" style=\"background-color: #3c0679;\">\n  <a class=\"navbar-brand\" style=\"color: #ddbf19;\" routerLink=\"/\">EXCO</a>\n\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"nav  nav-tabs \" id=\"myTab\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link \"  routerLink=\"/\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link \"   routerLink=\"/dashboard\" id=\"dashboard-tab\" data-toggle=\"tab\" href=\"#dashboard\" role=\"tab\" aria-controls=\"dashboard\"\n          aria-selected=\"false\">News</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"   routerLink=\"/explore\" id=\"explore-tab\" data-toggle=\"tab\" href=\"#explore\" role=\"tab\" aria-controls=\"explore\"\n          aria-selected=\"false\">Explore</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"   routerLink=\"/post\" id=\"post-tab\" data-toggle=\"tab\" href=\"#post\" role=\"tab\" aria-controls=\"post\" aria-selected=\"false\">Post</a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"   routerLink=\"/profile\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n          aria-selected=\"false\">My Posts</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"   routerLink=\"/participations\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n          aria-selected=\"false\">Dashboard</a>\n      </li>\n    \n    </ul>\n   \n   \n  </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n     \n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"status\" class=\"nav-item \">\n          <a class=\"nav-link \"   style=\"color: #e3f2fd;\" routerLink=\"/profile\">{{name}}</a>\n        </li>\n        <li *ngIf=\"!status\" class=\"nav-item btn btn-info btn-sm\">\n          <a class=\"nav-link \"   style=\"color: #e3f2fd;\" routerLink=\"/login\">Login</a>\n        </li>\n  \n        \n        <li></li>\n        <li *ngIf=\"status\" class=\"nav-item btn btn-danger btn-sm \" style=\"align-self:left;\">\n          <a class=\"nav-link\"   style=\"color: #e3f2fd;\" (click)=\"logout()\">Logout</a>\n        </li>\n       \n  \n      </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

module.exports = "\n<br><br>\n<img src=\"https://www.1and1.com/digitalguide/fileadmin/DigitalGuide/Teaser/not-found-t.jpg\" class=\"rounded mx-auto d-block\" style=\"width: 40%;\" alt=\"...\">\n<hr>\n<p style=\"color:rgb(218, 29, 29)\" class=\"text-center display-3\">We Are Unable to process your request</p>"

/***/ }),

/***/ 734:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <br>\n        <br>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            Notifications {{num}}\n          </button>\n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Notifications</h5>\n  \n                  <button type=\"button\" (click)=\"toggle()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  .\n                  <div>\n                    <ul class=\"list-group\">\n                      <li class=\"list-group-item\" *ngFor=\"let item of notificatios\">{{item}}</li>\n  \n                    </ul>\n                  </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" (click)=\"toggle()\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                  <button type=\"button\" (click)=\"toggle()\" class=\"btn btn-primary\">Dismiss</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          \n        <br>\n      \n      </div>\n      <div class=\"col-md-6\">\n        <br>\n        <br>\n        <h4>Hey {{user.name}} here is your Profile</h4>\n\n        <p>Username : {{user.username}}</p>\n        <p>Email : {{user.email}}</p>\n        <br>\n        <square-spinner *ngIf=\"showSpinner\"></square-spinner>\n        <h6>Posts {{lenofPosts}}</h6>\n       \n\n        <ng-container *ngFor=\"let post of posts | reverse |paginate: {itemsPerPage:10,currentPage:p}\" class=\"list-group-item\">\n        <div class=\"card text-center\" style=\"width: 24rem;\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title title\">{{post.title | uppercase }}</h5>\n              <p class=\"my-text card-text\"> Likes : {{post.likes}}  Comments : {{post.comments.length}} Collabs : {{post.collaborations.length}} </p>\n              <a class=\"btn btn-outline-info\" [routerLink]=\"['/collaborate',post.username,post._id]\">Discussions</a>\n            </div>\n          </div>\n          </ng-container>\n          <pagination-controls class=\"my-pagination\" autoHide=\"true\" (pageChange)=\"p =$event\"></pagination-controls>\n       \n\n      </div>\n      <div class=\"col-md-3\">\n        \n        <br>\n        <br>\n   <!-- <a><i class=\"fas fa-comment-alt\"></i>User</a> -->\n         \n   <h6>Participations</h6>\n   <ul class=\"list-group\">\n\n     <li *ngFor=\"let item of inCollabortion\" (click)=\"goto(item)\" class=\"btn btn-outline-dark\">{{item | idfilter}}</li>\n   </ul>\n\n      </div>\n\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  \n  <div class=\"col-md-3\">\n     \n  </div>\n  <div class=\"col-md-6\">\n      <h2 class=\"page-header\">Post Your Idea</h2>\n      <form #f=\"ngForm\" (ngSubmit)=\"submit(f)\">\n        <div class=\"form-group\">\n          <label for=\"title\">Title</label>\n          <input \n            required \n            minlength=\"3\" \n            \n            ngModel \n            name=\"title\" \n            #title=\"ngModel\" \n           \n            id=\"title\" \n            type=\"text\" \n            class=\"form-control\">\n          <div \n            class=\"alert alert-danger\" \n            *ngIf=\"title.touched && !title.valid\">\n            <div *ngIf=\"title.errors.required\">\n              Title is required.\n            </div>\n            \n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"text\">Text</label>\n          <textarea ngModel name=\"text\" required id=\"text\" cols=\"30\" rows=\"10\" class=\"form-control\"></textarea>\n        </div>\n       \n        <button class=\"btn btn-primary\" [disabled]=\"!f.valid\">Submit</button>\n      </form>\n  </div>\n  \n  <div class=\"col-md-3\">\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" style=\"text-align-last: center;\">Hello {{name}} Manage your posts</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n\n  </div>\n  <div class=\"col-md-6\">\n    <square-spinner *ngIf=\"showSpinner\"></square-spinner>\n    <div *ngIf=\"plen===0\">\n      <div class=\"card w-80 text-center\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Hello {{name}}</h5>\n          <p class=\"card-text\">You don't have any posts, start posting</p>\n          <a routerLink=\"/post\" class=\"btn btn-primary\">Post</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <ng-container *ngFor=\"let post of posts |reverse|paginate: {itemsPerPage:10,currentPage:p} ;let i = index\">\n        <div class=\"col\">\n          <div class=\"card\">\n\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"text-align: center\">{{post.title}}</h5>\n              <p class=\"card-text\">{{post.text}}</p><br>\n              <p> posted on {{post.createdAt | myPipes}} # {{post.username}}</p>\n            </div>\n            <div class=\"card-footer text-muted\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-2\">\n\n                  <a class=\"btn btn-danger \" [routerLink]=\"['/viewlikes',post._id]\">Likes {{post.likes}}</a>\n                </div>\n\n                <div class=\"col text-center\">\n                  <a [routerLink]=\"['/viewlikes',post._id]\" class=\"btn btn-primary \">Comments</a>\n                </div>\n                <div class=\"col-2\">\n                  <a [routerLink]=\"['/edit',post.username,post._id]\" class=\"btn btn-primary \">Edit</a>\n\n                </div>\n                <div class=\"col-2\">\n                  <button (click)=\"removePost(post)\" class=\"btn btn-dark \">Delete</button>\n                </div>\n              </div>\n\n            </div>\n\n\n\n\n          </div>\n        </div>\n\n        <div *ngIf=\"(i+1)%1===0\" class=\"w-100\">\n          <br>\n          <hr>\n        </div>\n      </ng-container>\n\n      <pagination-controls class=\"my-pagination\" autoHide=\"true\" (pageChange)=\"p =$event\"></pagination-controls>\n\n\n\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ 737:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  \n  <div class=\"col-md-3\">   \n  </div>\n  <div class=\"col-md-6\">\n      <br><br>\n      <div class=\"card w-80\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Register</h5>\n            <form>\n                <div *ngIf=\"invalidDetails\" class=\"alert alert-danger\"> Username or Email Have Alredy Taken</div>\n                <div  class=\"form-group\">\n                    <label for=\"name\">Name </label>\n                    <input required [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\">\n                    \n                  </div>\n                <div class=\"form-group\">\n                    <label for=\"username\">username </label>\n                    <input required [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" aria-describedby=\"usernameHelp\" placeholder=\"Enter username\">\n                    \n                  </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Email address</label>\n                  <input required [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n                  \n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input required [(ngModel)]=\"password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                </div>\n               \n                <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-primary\">Sign Up</button>\n              </form>\n          </div>\n        </div>\n      <loading-spinner *ngIf=\"show\"></loading-spinner>\n  </div>\n \n  <div class=\"col-md-3\">  \n  </div>\n</div>\n\n  "

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div>"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n  </div>\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-cube-grid\">\n    <div class=\"sk-cube sk-cube1\"></div>\n    <div class=\"sk-cube sk-cube2\"></div>\n    <div class=\"sk-cube sk-cube3\"></div>\n    <div class=\"sk-cube sk-cube4\"></div>\n    <div class=\"sk-cube sk-cube5\"></div>\n    <div class=\"sk-cube sk-cube6\"></div>\n    <div class=\"sk-cube sk-cube7\"></div>\n    <div class=\"sk-cube sk-cube8\"></div>\n    <div class=\"sk-cube sk-cube9\"></div>\n  </div>"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <br>\n    <div class=\"row\">\n\n      <div class=\"col-md-3\">\n        <br>\n        <br>\n        <div *ngIf=\"!isCollabed && !isPostWriter \">\n          <button (click)=\"request()\" class=\"btn btn-outline-success\">{{display}}</button>\n        </div>\n        <div *ngIf=\"isCollabed\">\n          <h5>You are in Collab</h5>\n        </div>\n        <div *ngIf=\"isPostWriter\">\n          <h5>You Wrote this Post</h5>\n        </div>\n        <br>\n        <br>\n        <h6>Collaborations {{len}}</h6>\n      </div>\n      <div class=\"col-md-6\">\n        <square-spinner *ngIf=\"showLoader\"></square-spinner>\n        <div class=\"card border-dark mb-3\">\n          <div class=\"card-header\">\n            posted By - {{username}}\n            <span style=\"align-items: flex-end\"> on : {{date | myPipes}}\n            </span>\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{title}}</h5>\n            <p class=\"card-text\">{{text}}</p>\n\n            <div class=\"row no-gutters\">\n              <div class=\"col-2\">\n                <button class=\"btn btn-primary\" (click)=\"toggle()\">comment</button>\n              </div>\n              <div class=\"col text-center\">\n\n              </div>\n              <div class=\"col-2\">\n                <a routerLink=\"/explore\" class=\"btn btn-danger\">goBack</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"show\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlTextarea1\">Comment Here</label>\n              <textarea required class=\"form-control\" [(ngModel)]=\"comment\" name=\"comment\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n            </div>\n            <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-primary\">Post</button>\n          </form>\n        </div>\n        <h6>comments </h6>\n        <div class=\"card\" style=\"width: 33rem;\">\n          <ul class=\"list-group list-group-flush\">\n            <li *ngFor=\"let commen of comments | reverse |paginate: {itemsPerPage:15,currentPage:p}\" class=\"list-group-item\"> {{commen}}</li>\n            <pagination-controls autoHide=\"true\" (pageChange)=\"p =$event\"></pagination-controls>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n\n\n\n        <h6>Liked By {{likesLength}}</h6>\n        <div class=\"card\" style=\"width: 18rem;\">\n\n          <ul class=\"list-group list-group-flush\">\n\n            <li *ngFor=\"let item of likedBy\" class=\"list-group-item\">{{item}}</li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[783]);
//# sourceMappingURL=main.bundle.map