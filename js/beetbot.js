var modal;

$(document).ready(function() {
    $('#event-calendar').fullCalendar({
        contentHeight: window.innerHeight - 140,
        lang: 'es',
        googleCalendarApiKey: 'AIzaSyCx8wi3Jn-REO_7izFs057nhAn79l04ouI',
        events: {
            googleCalendarId: 'a6t348mhlhd1mv75fe5apgcuf8@group.calendar.google.com'
        }
    });

    modal = new vanillaModal.VanillaModal({
        clickOutside : true
    })

    $('.js-floatl').each(function(index) {
        new Floatl(this);
    });
});

function sendMail() {
    var title = document.getElementById('title').value;
    var date = document.getElementById('date').value;
    var location = document.getElementById('location').value;
    var url = document.getElementById('url').value;
    var twitter = document.getElementById('twitter').value;
    var email = document.getElementById('email').value;
    if ((title) && (date) && (location) && (url) && (twitter) && (email)) {
        var link = "mailto:botbeet@gmail.com"
            + "?subject=" + encodeURIComponent("Nuevo evento: " + title)
            + "&body=" + encodeURIComponent(
                "Día: " + date
                + "\nLugar: " + location
                + "\nURL: " + url
                + "\nTwitter: " + twitter
                + "\nEmail: " + email
            )
        ;
        window.location.href = link;
    } else {
        $('.modal').addClass('failed');
    }
}


//ScrollTo
/*! Smooth Scroll - v1.4.6 - 2012-08-23
* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */
(function(a){function f(a){return a.replace(/(:|\.)/g,"\\$1")}var b="1.4.6",c={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},d=function(b){var c=[],d=!1,e=b.dir&&b.dir=="left"?"scrollLeft":"scrollTop";return this.each(function(){if(this==document||this==window)return;var b=a(this);b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))}),c.length||this.each(function(a){this.nodeName==="BODY"&&(c=[this])}),b.el==="first"&&c.length>1&&(c=[c[0]]),c},e="ontouchend"in document;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a});return this.pushStack(b)},firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a});return this.pushStack(b)},smoothScroll:function(b){b=b||{};var c=a.extend({},a.fn.smoothScroll.defaults,b),d=a.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(b){var e=this,g=a(this),h=c.exclude,i=c.excludeWithin,j=0,k=0,l=!0,m={},n=location.hostname===e.hostname||!e.hostname,o=c.scrollTarget||(a.smoothScroll.filterPath(e.pathname)||d)===d,p=f(e.hash);if(!c.scrollTarget&&(!n||!o||!p))l=!1;else{while(l&&j<h.length)g.is(f(h[j++]))&&(l=!1);while(l&&k<i.length)g.closest(i[k++]).length&&(l=!1)}l&&(b.preventDefault(),a.extend(m,c,{scrollTarget:c.scrollTarget||p,link:e}),a.smoothScroll(m))}),this}}),a.smoothScroll=function(b,c){var d,e,f,g,h=0,i="offset",j="scrollTop",k={},l={},m=[];typeof b=="number"?(d=a.fn.smoothScroll.defaults,f=b):(d=a.extend({},a.fn.smoothScroll.defaults,b||{}),d.scrollElement&&(i="position",d.scrollElement.css("position")=="static"&&d.scrollElement.css("position","relative")),f=c||a(d.scrollTarget)[i]()&&a(d.scrollTarget)[i]()[d.direction]||0),d=a.extend({link:null},d),j=d.direction=="left"?"scrollLeft":j,d.scrollElement?(e=d.scrollElement,h=e[j]()):e=a("html, body").firstScrollable(),k[j]=f+h+d.offset,d.beforeScroll.call(e,d),g=d.speed,g==="auto"&&(g=k[j]||e.scrollTop(),g=g/d.autoCoefficent),l={duration:g,easing:d.easing,complete:function(){d.afterScroll.call(d.link,d)}},d.step&&(l.step=d.step),e.length?e.stop().animate(k,l):d.afterScroll.call(d.link,d)},a.smoothScroll.version=b,a.smoothScroll.filterPath=function(a){return a.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},a.fn.smoothScroll.defaults=c})(jQuery);


$(document).ready(function() {
    $('.button').smoothScroll({
        speed: 500
    });
});