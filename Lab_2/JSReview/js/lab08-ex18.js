
/* To refresh your memory, here is a complex object created using
   object literal syntax.
   */

const stock = {
   symbol: "AAPL",
   name: "Apple Inc.",
   location: {
      address: "One Apple Park Way",
      city: "Cupertino",
      // shorthand
      output(){
        console.log(`${this.address} - ${this.city}`);
      }
   },

   // longhand
   output: function(){
     console.log(`${this.symbol} - ${this.name}`);
   }


}

stock.output();
stock.location.output();
