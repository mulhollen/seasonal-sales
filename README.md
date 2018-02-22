# seasonal-sales

Your job is to build a department store's web page that lists products, the name of the department each one is in, and the price.

The two JSON representations above should be in two files: products.json, and categories.json (see below). Use Javascript's XMLHttpRequest() method to read the data from those files, and then build HTML representations of the data.

Now that you've populate the view with all of the products, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

XMLHttpRequest()
Display the data