this["slider"] = {"1":function(depth0,helpers,partials,data) {
    return "isMobile";
},"3":function(depth0,helpers,partials,data) {
    return "            <a href=\"#!\" class=\"hidden slide-nav slide-right js-slide-right\"><i class=\"fa fa-chevron-right\"></i></a>\n            <a href=\"#!\" class=\"hidden slide-nav slide-left js-slide-left\"><i class=\"fa fa-chevron-left\"></i></a>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "            <div class=\"slide js-slide "
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-slide\" ";
  stack1 = ((helper = (helper = helpers.itemScopeType || (depth0 != null ? depth0.itemScopeType : depth0)) != null ? helper : alias1),(options={"name":"itemScopeType","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.itemScopeType) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n                <div class=\"thumbnail\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "                </div>\n\n";
  stack1 = ((helper = (helper = helpers.review || (depth0 != null ? depth0.review : depth0)) != null ? helper : alias1),(options={"name":"review","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.review) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"6":function(depth0,helpers,partials,data) {
    return "itemscope itemtype=\"http://schema.org/"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\"";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                        <img src=\""
    + alias3(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"10":function(depth0,helpers,partials,data) {
    var helper;

  return "                        <div class=\""
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-thumb\"></div>\n";
},"12":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                    <footer class=\"work-review\">\n                        <blockquote>"
    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
    + "</blockquote>\n                        <small>"
    + alias3(((helper = (helper = helpers.reviewer || (depth0 != null ? depth0.reviewer : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"reviewer","hash":{},"data":data}) : helper)))
    + "</small>\n                    </footer>\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "        <div class=\"thumbs-container\">\n            <a href=\"#!\" class=\"hidden thumbs-nav slide-thumbs-right js-slide-thumbs-right\"><i class=\"fa fa-chevron-right\"></i></a>\n            <a href=\"#!\" class=\"hidden thumbs-nav slide-thumbs-left js-slide-thumbs-left\"><i class=\"fa fa-chevron-left\"></i></a>\n            <div class=\"thumbs js-thumbs\">\n";
  stack1 = ((helper = (helper = helpers.slides || (depth0 != null ? depth0.slides : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"slides","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.slides) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"thumb js-thumb\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\n";
},"16":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                            <img src=\""
    + alias3(((helper = (helper = helpers.thumbnail || (depth0 != null ? depth0.thumbnail : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"thumbnail","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"18":function(depth0,helpers,partials,data) {
    var helper;

  return "                            <div class=\"thumb-placeholder "
    + this.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "-thumb\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<section class=\"slider-container js-slider-container\">\n    <div class=\"slider js-slider ";
  stack1 = ((helper = (helper = helpers.mobile || (depth0 != null ? depth0.mobile : depth0)) != null ? helper : alias1),(options={"name":"mobile","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.mobile) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-is-mobile=\""
    + this.escapeExpression(((helper = (helper = helpers.mobile || (depth0 != null ? depth0.mobile : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"mobile","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.mobile : depth0),{"name":"unless","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
  stack1 = ((helper = (helper = helpers.slides || (depth0 != null ? depth0.slides : depth0)) != null ? helper : alias1),(options={"name":"slides","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.slides) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n"
    + ((stack1 = helpers.unless.call(depth0,(depth0 != null ? depth0.mobile : depth0),{"name":"unless","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</section>";
},"useData":true};