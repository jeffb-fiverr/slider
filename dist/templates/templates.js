this["slider"] = {"1":function(depth0,helpers,partials,data) {
    return "isMobile";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "            <div class=\"slide-counter\">\n                <strong class=\"slide-current\"></strong> "
    + alias1(((helper = (helper = helpers.textOf || (depth0 != null ? depth0.textOf : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"textOf","hash":{},"data":data}) : helper)))
    + " <strong>"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.slides : depth0)) != null ? stack1.length : stack1), depth0))
    + "</strong>\n            </div>\n";
},"5":function(depth0,helpers,partials,data) {
    return "            <a href=\"#!\" class=\"hidden slide-nav slide-right js-slide-right\"><i class=\"fa fa-chevron-right\"></i></a>\n            <a href=\"#!\" class=\"hidden slide-nav slide-left js-slide-left\"><i class=\"fa fa-chevron-left\"></i></a>\n";
},"7":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "            <div class=\"slide js-slide\" ";
  stack1 = ((helper = (helper = helpers.itemScopeType || (depth0 != null ? depth0.itemScopeType : depth0)) != null ? helper : alias1),(options={"name":"itemScopeType","hash":{},"fn":this.program(8, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.itemScopeType) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n                <div class=\"thumbnail\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.typeVideo : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.typeAudio : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.typeImage : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.typePdf : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n\n";
  stack1 = ((helper = (helper = helpers.review || (depth0 != null ? depth0.review : depth0)) != null ? helper : alias1),(options={"name":"review","hash":{},"fn":this.program(23, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.review) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"8":function(depth0,helpers,partials,data) {
    return "itemscope itemtype=\"http://schema.org/"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\"";
},"10":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].mobile : depths[1]),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <iframe src=\""
    + this.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"></iframe>\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                            <a href=\"#!\" class=\"fa fa-play slider-video-play js-slider-video-play js-gtm-event-auto\" data-gtm-category=\"gig-page-old\" data-gtm-action=\"click\" data-gtm-label=\"gallery-video-play\" data-src=\""
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" rel=\"nofollow\" itemprop=\"url\"></a>\n                            <img src=\""
    + alias3(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" itemprop=\"thumbnail\" width=\"100%\" data-reload=\"inprogress\">\n";
},"15":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depths[1] != null ? depths[1].mobile : depths[1]),{"name":"if","hash":{},"fn":this.program(11, data, 0, blockParams, depths),"inverse":this.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"16":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <a href=\"#!\" class=\"fa fa-play slider-audio-play js-slider-audio-play\" data-src=\""
    + this.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" itemprop=\"url\"></a>\n                            <div class=\"audio-wave\"></div>\n";
},"18":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <img src=\""
    + alias3(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" itemprop=\"thumbnail\" width=\"100%\" data-reload=\"inprogress\">\n";
},"20":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return ((stack1 = helpers.unless.call(depth0,(depths[1] != null ? depths[1].mobile : depths[1]),{"name":"unless","hash":{},"fn":this.program(21, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        <img src=\""
    + alias3(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" itemprop=\"thumbnail\" width=\"100%\" data-reload=\"inprogress\">\n";
},"21":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <a href=\"#\" class=\"btn-full-screen js-gtm-event-auto\" data-gtm-category=\"gig-page-old\" data-gtm-action=\"click\" data-gtm-label=\"gallery-pdf-enlarge\" data-full-screen-images=\""
    + this.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" rel=\"noindex, nofollow\">Full Screen</a>\n";
},"23":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <footer class=\"work-review js-work-review\">\n                        <blockquote>"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</blockquote>\n                        <small>"
    + alias3(((helper = (helper = helpers.reviewer || (depth0 != null ? depth0.reviewer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"reviewer","hash":{},"data":data}) : helper)))
    + "</small>\n                    </footer>\n";
},"25":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "        <div class=\"thumbs-container\">\n            <a href=\"#!\" class=\"hidden thumbs-nav slide-thumbs-right js-slide-thumbs-right\"><i class=\"fa fa-chevron-right\"></i></a>\n            <a href=\"#!\" class=\"hidden thumbs-nav slide-thumbs-left js-slide-thumbs-left\"><i class=\"fa fa-chevron-left\"></i></a>\n            <div class=\"thumbs js-thumbs\">\n";
  stack1 = ((helper = (helper = helpers.slides || (depth0 != null ? depth0.slides : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"slides","hash":{},"fn":this.program(26, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.slides) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n";
},"26":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"thumb js-thumb\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":this.program(27, data, 0),"inverse":this.program(29, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\n";
},"27":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                            <img src=\""
    + alias3(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"29":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <div class=\"thumb-placeholder "
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-thumb\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<section class=\"slider-container js-slider-container\">\n    <div class=\"slider js-slider ";
  stack1 = ((helper = (helper = helpers.mobile || (depth0 != null ? depth0.mobile : depth0)) != null ? helper : alias1),(options={"name":"mobile","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.mobile) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-is-mobile=\""
    + this.escapeExpression(((helper = (helper = helpers.mobile || (depth0 != null ? depth0.mobile : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.mobile : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "\n\n";
  stack1 = ((helper = (helper = helpers.slides || (depth0 != null ? depth0.slides : depth0)) != null ? helper : alias1),(options={"name":"slides","hash":{},"fn":this.program(7, data, 0, blockParams, depths),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.slides) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.mobile : depth0),{"name":"unless","hash":{},"fn":this.program(25, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n\n\n<!--\n    video examples:\n\n    <div class=\"play-trigger js-play-trigger gig-item-ll\">\n        <a href=\"#!\" class=\"fa fa-play play-video js-vid-play js-gtm-event-auto\" data-gtm-category=\"gig-page-old\" data-gtm-action=\"click\" data-gtm-label=\"gallery-video-play\" data-url=\"//view.vzaar.com/6268382/player?autoplay=true\" rel=\"nofollow\" itemprop=\"url\" style=\"opacity: 0.6;\"></a>\n        <img alt=\"\" itemprop=\"thumbnail\" src=\"https://cldn0.fiverrcdn.com/fiverr/t_main2_video/v1461866914/vzrthumb/6268382/image\" width=\"100%\" data-reload=\"inprogress\">\n    </div>\n\n    <div class=\"play-trigger js-play-trigger gig-item-ll\">\n        <a href=\"#!\" class=\"fa fa-play play-video js-vid-play js-gtm-event-auto\" data-gtm-category=\"gig-page-old\" data-gtm-action=\"click\" data-gtm-label=\"gallery-video-play\" data-url=\"//view.vzaar.com/4419725/player?autoplay=true\" rel=\"nofollow\" itemprop=\"url\" style=\"opacity: 0.6;\"></a>\n        <img alt=\"\" itemprop=\"thumbnail\" src=\"https://cldn0.fiverrcdn.com/fiverr/t_main2_video/v1461866964/vzrthumb/4419725/image\" width=\"100%\" data-reload=\"inprogress\">\n    </div>\n-->\n\n<!--\n    audio examples:\n\n    <div class=\"img-holder js-img-holder with-audio js-with-audio\" itemprop=\"thumbnail\">\n        <div class=\"audio-wave js-audio-wave\"></div>\n        <i class=\"fa fa-play play-audio js-play-audio\" data-audio-url=\"//view.vzaar.com/6930478/player?autoplay=true&amp;apiOn=true\" data-id=\"37505408\" itemprop=\"url\"></i>\n    </div>\n\n    <div class=\"img-holder js-img-holder with-audio js-with-audio\" itemprop=\"thumbnail\">\n        <div class=\"audio-wave js-audio-wave\"></div>\n        <i class=\"fa fa-play play-audio js-play-audio\" data-audio-url=\"//view.vzaar.com/6924047/player?autoplay=true&amp;apiOn=true\" data-id=\"37424480\" itemprop=\"url\"></i>\n    </div>\n-->\n\n<!--\n    pdf examples:\n\n    <div class=\"img-holder js-img-holder\">\n        <a href=\"#\" class=\"js-open-popup-full-screen btn-full-screen js-gtm-event-auto\" data-gtm-category=\"gig-page-old\" data-gtm-action=\"click\" data-gtm-label=\"gallery-pdf-enlarge\" data-full-screen-images=\"https://cldn0.fiverrcdn.com/fiverr/t_gig_pdf_page_1_v1,f_jpg/deliveries/8644553/original/writing-translation_ws_1432808257.pdf||\" rel=\"noindex, nofollow\">Full Screen</a>\n        <img alt=\"writing-translation_ws_1432808257\" data-src=\"https://cldn0.fiverrcdn.com/fiverr/t_gig_pdf_gallery_view_ver4,f_jpg/deliveries/8644553/original/writing-translation_ws_1432808257.pdf\" itemprop=\"thumbnail\" src=\"https://cldn0.fiverrcdn.com/fiverr/t_gig_pdf_gallery_view_ver4,f_jpg/deliveries/8644553/original/writing-translation_ws_1432808257.pdf\" data-reload=\"inprogress\">\n    </div>\n\n    <div class=\"img-holder js-img-holder\">\n        <a href=\"#\" class=\"js-open-popup-full-screen btn-full-screen js-gtm-event-auto\" data-gtm-category=\"gig-page-triple\" data-gtm-action=\"click\" data-gtm-label=\"gallery-pdf-enlarge\" data-full-screen-images=\"https://cldn0.fiverrcdn.com/fiverr/image/upload/t_gig_pdf_page_1_v1,f_jpg/20151230/MySample_kiutpv.jpg|https://cldn0.fiverrcdn.com/fiverr/image/upload/t_gig_pdf_page_2,f_jpg/20151230/MySample_kiutpv.jpg|https://cldn0.fiverrcdn.com/fiverr/image/upload/t_gig_pdf_page_3,f_jpg/20151230/MySample_kiutpv.jpg\" rel=\"noindex, nofollow\">Full Screen</a>\n        <img alt=\"pdf page as image\" data-src=\"https://cldn0.fiverrcdn.com/fiverr/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20151230/MySample_kiutpv.jpg\" itemprop=\"thumbnail\" src=\"https://cldn0.fiverrcdn.com/fiverr/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20151230/MySample_kiutpv.jpg\" data-reload=\"inprogress\">\n    </div>\n-->\n\n<!--\n    image examples:\n\n    <div class=\"img-holder js-img-holder\">\n        <img alt=\"record a young adult MALE voice over within 24 hours\" data-src=\"https://cldn0.fiverrcdn.com/fiverr/t_main1/gigs/17983/original/7c2b721f714d615a800777791ffa85577b48a9e6.png\" itemprop=\"thumbnail\" src=\"https://cldn0.fiverrcdn.com/fiverr/t_main1/gigs/17983/original/7c2b721f714d615a800777791ffa85577b48a9e6.png\" data-reload=\"inprogress\">\n    </div>\n\n    <div class=\"img-holder js-img-holder gig-item-ll\">\n        <img alt=\"manage all your gigs\" data-src=\"https://cldn0.fiverrcdn.com/fiverr/t_main1/devgigs/21761/original/A_trip_to_moon.jpg\" itemprop=\"thumbnail\" src=\"https://cldn0.fiverrcdn.com/fiverr/t_main1/devgigs/21761/original/A_trip_to_moon.jpg\" data-reload=\"inprogress\">\n    </div>\n-->";
},"useData":true,"useDepths":true};