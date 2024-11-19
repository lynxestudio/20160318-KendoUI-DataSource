$(document).ready(function()
          {
            $("#gridAuthors").kendoGrid({
              height: 200,
              resizable: 100,
              pageable: true,
              columns: [
                {field: "Id",title: "Record id"},
                {field: "Name", title: "Firstname"},
                {field: "LastName", title: "Lastname"},
                {field: "BirthDate", title: "Date"},
                {field: "Gender", title: "Sex"}
              ]
              });
            //set up the DataSource
            var dataSource = new kendo.data.DataSource({
                transport :
                {
                  read :
                  {
                  //the URL where the data source gets the data
                  url: "http://127.0.0.1/~martin/SamplesKendo/authors.json",
                  //the request's method
                  type: "get",
                  //the dataType of the response
                  dataType: "json"
                  }
                },
                //set the total item for each page
                pageSize: 4,
                schema: {
                  //set the field that contains the array of data
                  data: "AuthorList",
                  //set the total number of items
                  total: "total"
                }
              });
            
            //bind the dataSource to the grid.
           //set up the Grid
            var grid = $("#gridAuthors").data("kendoGrid");
            grid.setDataSource(dataSource);         
            
          });