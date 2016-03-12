// number
var x: number = 1; 
//var y: number = "2"; //<-- string is not assignable to number 
console.log("x = " + x);

// string 
var str: string = "Hello, World.";
//var str: string = 2; //<-- number is not assignable to type string
console.log("str = " + str);

// boolean 
var checked: boolean = false;
console.log("checked = " + checked); 

// array 
var list:number[] = [1,2,3];
//var badlist:number[] = ["1", 2, 3]; //<-- bad
console.log("list = " + list); 

// enum
enum InterestLevel { Bored = 42, Interested, Neutral };
var myInterestLevel: InterestLevel = InterestLevel.Interested;
console.log("Interest Level = " + InterestLevel[myInterestLevel]);

// void 
function returnsNothing(): void {
}

// any 
function returnsAny(): any {
    if (Math.random() < 0.5) {
        return "1";
    }
    return 1;
}