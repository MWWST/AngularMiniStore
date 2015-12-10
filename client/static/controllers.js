  
 var myApp = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/orders.html'
        })
        .when('/products',{
            templateUrl: 'partials/products.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

    //  build the controllers   

//CUSTOMERS CONTROLLER
    myApp.controller('customersController', function ($scope,productFactory,customerFactory,orderFactory) {
      $scope.customers=[];
  
      customerFactory.getCustomers(function(data){
        $scope.customers=data;
        console.log('scope customers',$scope.customers)
      
      })

      productFactory.getProducts(function(data){
        $scope.products=data;
        console.log('scope products', data);
      
      })


      $scope.addCustomer=function(){
        var Newcustomer = {Name:$scope.newCustomer.name, Price: $scope.newCustomer.price,Location: $scope.newCustomer.location
          ,Inventory:50};

        customerFactory.addCustomer(Newcustomer);
        $scope.newproduct={};
      }

      $scope.addOrder = function(){
        // console.log($scope.newOrder.customer.split(' ',1));
        var split= $scope.newOrder.customer.split(' ');
        var first= split[0];
        var last =split[1];
        console.log('first: ', split[0]);
        console.log('last: ', split[1]);
        var product=$scope.newOrder.product.split(' ',1);
        var price= $scope.newOrder.product.split('$')[1];

        var newOrder ={CustomerFirst: first,CustomerLast:last,Product:product,Price:price,Quantity:$scope.newOrder.quantity, Date: new Date()}
      
        orderFactory.addOrder(newOrder);
        $scope.newOder={};
      }


      $scope.destroyCustomer=function(product){
        console.log(product)

        var delCustomer = $scope.customers.indexOf(customer);
       customerFactory.destroy(delCustomer);



      }


    })

    //ORDERS CONTROLLER

    myApp.controller('ordersController',function ($scope,orderFactory,productFactory) {

       orderFactory.getOrders(function(data){

      
       $scope.productsinv=data;
       // console.log('scope products',$scope.products)
      
      })

       $scope.buyProduct=function(product){

        var updateProduct = $scope.productsinv.indexOf(product);


        productFactory.update(updateProduct);



       }

    })

    //PRODUCTS CONTROLLER