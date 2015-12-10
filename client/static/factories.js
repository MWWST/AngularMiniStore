//ORDER FACTORY
    myApp.factory('orderFactory',function(){
     var orders = [
      {CustomerFirst: 'Michael',CustomerLast:'Weitzman',Product:'Laptop',Price:1900,Quantity:2, Date: '11/15/15'},
      {CustomerFirst: 'Jerry',CustomerLast:'Springer',Product:'Shoes',Price:200,Quantity:2, Date: '11/15/15'},
      {CustomerFirst: 'Alex',CustomerLast:'Wilson',Product:'Keyboard',Price:99,Quantity:2, Date: '11/15/15'}
     
     ];


   
      var factory ={};

      factory.getOrders = function(callback){
        callback(orders);
      }

      factory.addOrder= function(data){
        orders.push(data);
        console.log(orders);
      }

      factory.destroy = function(data){
        console.log(data);
        orders.splice(data,1);
      }

      return factory;

    })

   //CUSTOMER FACTORY 

    myApp.factory('customerFactory',function(){
     var customers = [
      {FirstName: 'Michael',LastName:'Weitzman'},
      {FirstName: 'Alex',LastName:'Wilson'},
      {FirstName: 'Jerry',LastName:'Springer'}
      
     ];


   
      var factory ={};

      factory.getCustomers = function(callback){
        callback(customers);
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

    //PRODUCT FACTORY
myApp.factory('productFactory',function(){
     var products = [
      {Name: 'Keyboard', Price:19.99,Location:'Warehouse',Inventory:50},
      {Name: 'Cool Mouse',Price: 49.09,Location:'Michiagn',Inventory:50},
      {Name: 'Laptop Cleaners',Price: 12.09,Location:'Store 1105',Inventory:50}
     ];


   
      var factory ={};
//READ
      factory.getProducts = function(callback){
        callback(products);
      }

//CREATE      

      factory.addProduct= function(data){
        products.push(data);
      }

//DESTROY
      factory.destroy = function(data){
        console.log(data);
        products.splice(data,1);
      }
//UPDATE
      factory.update = function(data){


        if(products[data].Inventory>0){
        products[data].Inventory -=1;
        }
      }

      return factory;

    })