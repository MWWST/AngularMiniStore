 var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/products.html'
        })
        .when('/products',{
            templateUrl: 'partials/products.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    myApp.factory('productFactory',function(){
     var products = [
      {Name: 'Keyboard', Price:19.99,Location:'Warehouse',Inventory:50},
      {Name: 'Cool Mouse',Price: 49.09,Location:'Michiagn',Inventory:50},
      {Name: 'Laptop Cleaners',Price: 12.09,Location:'Store 1105',Inventory:50}
     ];


   
      var factory ={};

      factory.getproducts = function(callback){
        callback(products);
      }

      factory.addproduct= function(data){
        products.push(data);
      }

      factory.destroy = function(data){
        console.log(data);
        products.splice(data,1);
      }

      factory.update = function(data){


        if(products[data].Inventory>0){
        products[data].Inventory -=1;
        }
      }

      return factory;

    })


    myApp.factory('orderFactory',function(){
     var orders = [
      {Customer First: 'Michael',Customer Last:'Weitzman',Product:'Laptop',Quantity:2 Date: new Date()},
      {Customer First: 'Jerry',Customer Last:'Springer',Product:'Shoes',Quantity:2 Date: new Date()},
      {Customer First: 'Alex',Customer Last:'Wilson',Product:'Keyboard',Quantity:2 Date: new Date()}
     
     ];


   
      var factory ={};

      factory.getOrders = function(callback){
        callback(orders);
      }

      factory.addproduct= function(data){
        orders.push(data);
      }

      factory.destroy = function(data){
        console.log(data);
        orders.splice(data,1);
      }

      return factory;

    })

    myApp.factory('customerFactory',function(){
     var customers = [
      {First Name: 'Michael',Last Name:'Weitzman'},
      {First Name: 'Alex',Last Name:'Wilson'},
      {First Name: 'Jerry',Last Name:'Springer'}
      
     ];


   
      var factory ={};

      factory.getCustomers = function(callback){
        callback(products);
      }

      factory.addCustomer= function(data){
        customers.push(data);
      }

      factory.destroy = function(data){
        console.log(data);
      customers.splice(data,1);
      }

      return factory;

    })


    //  build the controllers
   


    myApp.controller('customersController', function ($scope,productFactory) {
      $scope.products=[];
  
      productFactory.getproducts(function(data){
        $scope.products=data;
        console.log('scope products',$scope.products)
      
      })


      $scope.addProduct=function(){
        var Newproduct = {Name:$scope.newProduct.name, Price: $scope.newProduct.price,Location: $scope.newProduct.location
          ,Inventory:50};

        productFactory.addproduct(Newproduct);
        $scope.newproduct={};
      }

      $scope.destroyProduct=function(product){
        console.log(product)

        var delProduct = $scope.products.indexOf(product);
        productFactory.destroy(delProduct);



      }


    })

    myApp.controller('ordersController',function ($scope,productFactory) {

       productFactory.getproducts(function(data){

      
       $scope.productsinv=data;
       // console.log('scope products',$scope.products)
      
      })

       $scope.buyProduct=function(product){

        var updateProduct = $scope.productsinv.indexOf(product);


        productFactory.update(updateProduct);



       }

    })