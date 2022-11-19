# UFO

## Overview

Continuing the project,we made changes to the website.We were told to add more filters which will give users more flexibilty to analyse the UFO data.They should be able to add multiple filters at same time and eliminate the need of click of buuton.It should automatically listen to the change events on inputbox and apply the filter on the table.

### Tools and Data files required:

- JavaScript
- Bootstrap/CSS
- HTML
- Data.js[]
- index.html[]
- app.js[]


## Results

The filter criterias we were told to add were:

- Date
- City
- State
- Country
- Shape

Second thing to remove was Search button,it should automatically check the filters and filter the table based on user input.If all the filters added were removed,it should autmatically return to its normal state i.e table with unfiltered data.

![1][static/images/1.png]


##### Working example with single filer.

![2][static/images/2.png]

##### Working example with multiple filters.

![3][static/images/3.png]

## Drawbacks:

- The major drawback of these filters is case-senstivity.Placeholders provides a bit of idea to user about the data to enter,unfortunately it is not the greatest.It does not return any results.

- Secondly,if user enters incorrect data,it does not show any results.It should return some message like "city not found" or "incorrect date format".

## Recommendations:

To overcome the above drawbacks,my recommendations are:

- Removing case senstivity from search criteria.

- To make the table more verasatile,maybe we can split the datetime into three different filters date,month,year respectively.
