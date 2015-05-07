// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require twitter/bootstrap
//= require selectize
//= require moment
//= require underscore/underscore
//= require bootstrap-datetimepicker
//= require bootstrap-calendar/js/calendar
//= require bootstrap-3-timepicker/js/bootstrap-timepicker
//= require bootstrap-touchspin/dist/jquery.bootstrap-touchspin
//= require bootstrap-daterangepicker/daterangepicker
//= require bootstrapformhelpers/js/bootstrap-formhelpers
//= require_tree ../../../vendor/assets/javascripts/.
//= require loading_spinner
//= require turbolinks
//= require turboboost

// Pretty much a hack to make the sidebar work with bh
$(function() {
	$('.nav-sidebar').removeClass('nav-tabs');
});