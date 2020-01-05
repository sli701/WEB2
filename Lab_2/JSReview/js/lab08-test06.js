/* add code below this */

const companies = JSON.parse(content);
console.log(companies);






function AcctCalculations(day50MovingAvg, day200MovingAvg, sharesOutstanding, operatingRevenue, costOfRevenue, totalAssets, totalLiabilities){

  // function expression
  const currency = function(num) {
    return new Intl.NumberFormat('en-us', {style: 'currency',currency:'USD'}).format(num);
  };

  this.day50MovingAvg = currency(day50MovingAvg);
  this.day200MovingAvg = currency(day200MovingAvg);

  this.marketCap50 = function(){
    return currency(day50MovingAvg * sharesOutstanding);
  };

  this.marketCap200 = function(){
    return currency(day200MovingAvg * sharesOutstanding);
  };

  this.revenue = function(){
    return currency(operatingRevenue - costOfRevenue);
  };

  this.shareholderEquity = function(){
    return currency(totalAssets - totalLiabilities);
  };


}


function outputCard(company){

  const outputTag = function (index){
    return `<small> ${company.tags[index]} </small>`;
  }

  let acctCal = new AcctCalculations(   company.stats.day50MovingAvg,
                                        company.stats.day200MovingAvg,
                                        company.stats.sharesOutstanding,
                                        company.stats.operatingRevenue,
                                        company.stats.costOfRevenue,
                                        company.stats.totalAssets,
                                        company.stats.totalLiabilities  );

  let cardHTML = "";
  cardHTML += `<article class="card"><h2>${company.symbol} - ${company.companyName} </h2>`;
  cardHTML += `<div>`;
  cardHTML += `<p>Share Price (50day avg): <span>${acctCal.day50MovingAvg}</span></p>`;
  cardHTML += `<p>Share Price (200day avg): <span>${acctCal.day200MovingAvg}</span></p>`;
  cardHTML += `<p>Market Cap (50day avg): <span>${acctCal.marketCap50()}</span></p>`;
  cardHTML += `<p>Market Cap (200day avg): <span>${acctCal.marketCap200()}</span></p>`;
  cardHTML += `<p>Net Revenue:  <span>${acctCal.revenue()}</span>`;
  cardHTML += `<p>Shareholder Equity: <span>${acctCal.shareholderEquity()}</span></p>`;
  cardHTML += `</div><footer>`;

  for (let index in company.tags){
    cardHTML += outputTag(index);
  }

  cardHTML += `</footer></article>`;

  return cardHTML;

}


for (let company of companies) {
  document.write(outputCard(company));
}



// <article class="card">
//   <h2>AAPL - Apple Inc.</h2>
//   <div>
//     <p>Share Price (50day avg): <span>$182.26</span></p>
//     <p>Share Price (200day avg): <span>$190.30</span></p>
//     <p>Market Cap (50day avg): <span>$859,406,932,800.00</span></p>
//     <p>Market Cap (200day avg): <span>$897,317,784,000.00</span></p>
//     <p>Net Revenue: <span>$32,031,000,000.00</span></p>
//     <p>Shareholder Equity: <span>$117,892,000,000.00</span></p>
//   </div>
//   <footer>
//       <small>Technology</small>
//       <small>Consumer Electronics</small>
//       <small>Computer Hardware</small>
//   </footer>
// </article>
