import {Template} from 'meteor/templating';

import Items from '../api/items.js'

import './body.html';

import './register.html';

import './home.html';

import './login.html';

Router.route('register', function (){
    this.render('register');
});


Router.route('/', function (){
   this.render('home');
  
});

Router.route('home', function (){
   
  

    this.render('home');

  


});


Router.route('login', function (){
    this.render('login');
});

Template.home.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});



Template.body.helpers({
    items(){
        return Items.find({});
    }
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
            Router.go('/');
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = event.target.loginEmail.value;
        var password = event.target.loginPassword.value;
        Meteor.loginWithPassword(email, password);
        Router.go('/home');
    }
});

Meteor.users.insert({
    email: email,
    password: password
});

Template.body.events({
 'click .test'(event) {
     console.log('hello');
 }
});


