module.exports = function main() {
    
    function Sequence(a) {
 
   this.a=a;
 /* constructor(input) {
      this.a=input;
    // Write your code here
  }
  */

  this.minimum=function(){
      var min=a[0];
     
      for(var i=1;i<a.length;i++)
          if(min>a[i])
              min=a[i];
      return min;
    // Write your code here
  }
    
   this.maxmum=function()
    {
        var max=a[0];
      
      for(var i=1;i<a.length;i++)
          if(max>a[i])
              max=a[i];
      return max;
    }
    
    this.avgmum=function()
    {
        var sum=0;
        
        for(var i=0;i<a.length;i++)
            sum+=a[i];
        return Math.floor(sum/a.length*100)/100;
            
    }
    
    
    this.length=function()
    {
        return a.length;
    }

  // Write your code here
}

    
    
    
    
    
    var sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maxmum()}
o) 元素数量 = ${sequence.length()}
o) 平均值 = ${sequence.avgmum()}  
`);
};

