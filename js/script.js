// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("https://bst.cloudapps.cisco.com/bugsearch/search?kw=*&pf=prdNm&pfVal=285968390&rls=1.1(2h)&sb=afr&mDt=5&svr=3nH&bt=custV", 
           
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2> List of Bugs " + name + "!</h2>";
            });

        
      });
  }
);





