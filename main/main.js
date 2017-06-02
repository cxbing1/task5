module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
                    最大值 = ${sequence.maxmum()}
                    元素数量 = ${sequence.length()}
                    平均值 = ${sequence.avgmum()}
                   
// Write your code here
`);
};

class Sequence {
 
    var a;
  constructor(input) {
      this.a=input;
    // Write your code here
  }

  minimum() {
      var min=a[0];
      
      for(var i=1;i<a.length;i++)
          if(min>a[i])
              min=a[i];
      return min;
    // Write your code here
  }
    
    maxmum()
    {
        var max=a[0];
      
      for(var i=1;i<a.length;i++)
          if(max>a[i])
              max=a[i];
      return max;
    }
    
    avgmum()
    {
        var sum=0;
        
        for(var i=0;i<a.length;i++)
            sum+=a[i];
        return sum/a.length;
            
    }
    
    
    length()
    {
        return a.length;
    }

  // Write your code here
}
