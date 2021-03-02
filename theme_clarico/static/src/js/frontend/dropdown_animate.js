odoo.define('theme_clarico.dropdown_animate', function (require) {
    "use strict";

    var publicWidget = require('web.public.widget');
    var sAnimations = require('website.content.snippets.animation');

    publicWidget.registry.ScrollTop = sAnimations.Animation.extend({
        selector: '#wrapwrap',
         effects: [{
            startEvents: 'scroll',
            update: '_scrollTop',
        }],
        _scrollTop: function (scroll) {
            if (scroll > 300) {
                $('.scrollup-div').fadeIn();
            } else {
                $('.scrollup-div').fadeOut();
            }
        },
    });


    publicWidget.registry.dropdown_animate= publicWidget.Widget.extend({
        selector: "#wrapwrap",
        start: function () {
            self = this;
            self.showDropdown();
        },
        showDropdown: function() {
            $(".te_custom_submenu").parent("li.nav-item").addClass("dropdown");
            $(".te_custom_submenu").siblings("a.nav-link").addClass("dropdown-toggle").attr("data-toggle", "dropdown");
            //$(".static_menu").parent("li.nav-item").css("position", "static");
            $('.dropdown, .te_header_before_overlay .js_language_selector .dropup').on('show.bs.dropdown', function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
            });
            $('.dropdown, .te_header_before_overlay .js_language_selector .dropup').on('hide.bs.dropdown', function() {
                $(this).find('.dropdown-menu').first().stop(true, true).slideUp(150);
            });
        },
    });
});