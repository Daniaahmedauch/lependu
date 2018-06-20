//var c=0;
var str=prompt("hhhhjhh");
var arr=["_"];
arr.length=str.length;
var x= 0;
var le="";
 for (var i = 0; i < str.length; i++)
          {
         arr[i]="_"
          }    
          console.log(arr);
var err=1;
var c=0;
window.onload = function myFunction ()
{
    document.getElementById("start").addEventListener("click", function start()
         {
             
             var c1 = document.getElementById("myCanvas");
            var ctx = c1.getContext("2d");
            var lett =prompt("Please enter lett ");    
                                                               for (var i = 0; i < str.length; i++)
                                                               {
                                                                   if(lett==str[i])
                                                                   {
                                                                        c=1;
                                                                         le =str[i];
                                                                           x=i;
                                                                           break;
                                                                   }else
                                                                   {
                                                                       c=0;
                                                                       continue;
                                                                   }
                                                                 }                    
                                                                                                                       if (c==1)
                                                           {
                                                               res();
                                                           }
                                                           else
                                                           if (c==0) {
                                                               res2();
                                                           }                            function res()
                             {                                          arr[x]=le;
                                        document.getElementById(x).innerHTML = le;
                                 }
                                 function res2()
                             {                                                         if (err==1)
                                                          {
                                                            ctx.moveTo(100, 100);
                                                            ctx.lineTo(200, 100);
                                                            ctx.stroke();
                                                        
                                                          }else
                                                    
                                                         if (err==2)
                                                          {
                                                            ctx.moveTo(150, 100);
                                                            ctx.lineTo(150, 10);
                                                            ctx.stroke();
                                                          }else
                                                         if (err==3)
                                                          {
                                                            ctx.moveTo(150, 10);
                                                            ctx.lineTo(200, 10);
                                                            ctx.stroke();
                                                          }else
                                                         if (err==4)
                                                          {
                                                            ctx.moveTo(200, 10);
                                                            ctx.lineTo(200, 25);
                                                            ctx.stroke();
                                                          }else
                                                         if (err==5)
                                                          {
                                                            ctx.beginPath();
                                                            ctx.arc(200, 35, 10, 0, 2 * Math.PI);
                                                            ctx.stroke();
                                                          }
                                                          if (err==6)
                                                          {
                                                            ctx.moveTo(200, 45);
                                                            ctx.lineTo(200, 50);
                                                            ctx.stroke();
                                                          }
                                                          if (err==7)
                                                          {
                                                            ctx.moveTo(200, 50);
                                                            ctx.lineTo(190, 55);
                                                            ctx.stroke();
                                                          }
                                                          if (err==8)
                                                          {
                                                            ctx.moveTo(200, 50);
                                                            ctx.lineTo(210, 55);
                                                            ctx.stroke();
                                                          }
                                                           if (err==9)
                                                          {
                                                            ctx.moveTo(200, 50);
                                                            ctx.lineTo(200, 65);
                                                            ctx.stroke();
                                                          }
                                                           if (err==10)
                                                          {
                                                            ctx.moveTo(200, 65);
                                                            ctx.lineTo(185, 75);
                                                            ctx.stroke();
                                                          }
                                                           if (err==11)
                                                          {
                                                            ctx.moveTo(200, 65);
                                                            ctx.lineTo(215, 75);
                                                            ctx.stroke();
                                                            alert("GAME OVER NOOB !!");                                                          }
                                                        
                                                          err++;                                 }
            
                                        
         });    }
