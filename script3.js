// 1.create a request variable
var request = new XMLHttpRequest();
// 2.create a new connection 
request.open('GET','https://restcountries.eu/rest/v2/all',true);
// 3.send request
request.send();
// 4.load the response
request.onload = function(){
    var data = JSON.parse(this.response);
    //Question 2
    /*var res = data.filter((item)=>item.population<200000);
    for(var i =0;i<res.length;i++){
        console.log(res[i].name)
    }*/
    //Question no 1
    /*var res1=data.filter((item)=>item.region=='Asia');
    for(var i =0;i<res1.length;i++){
        console.log(res1[i].name)
    }*/
    //Question no 3
    data.forEach((element)=>{
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    })
    //Question no 4
    /*const sum =data.reduce(function(acc,item){
        return acc+item.population;
    },0);
    console.log(sum);*/
    //Question no 5
    /*for(i=0;i<data.length;i++){
        for(j=0;j<data[i].currencies.length;j++){
            if(data[i].currencies[j].code=='USD'){
                console.log(data[i].name);
            }
        }
    }*/

    

        
    }
    
