var objWithIdentifier: { id: number } = { id: 1 }; // <-- "inline" interface (type)

interface IHaveAnIdentifier { // <-- make it reusable
	id: number;
}

interface IHaveOneToo {
	id: number;
}

// can specify optional properties 
interface IHaveOptionalDescription {
    desc?: string;
}

// interfaces can extend other interfaces 
interface IHaveIdAndMaybeDescription 
    extends IHaveAnIdentifier, IHaveOptionalDescription {
        
    }

// specify that the function needs the signature to match
function showId(obj: IHaveAnIdentifier) {
	console.log(obj.id); 
}

// this will work on anything that has optional desc
function showDesc(obj: IHaveOptionalDescription) {
    if (obj.desc) {
        console.log(obj.desc);
    }
}

var myObject: IHaveOneToo = { id: 1 };
showId(myObject); // <-- valid because signatures match!
showId({ id: 1 }); // <-- also valid 
showId(<IHaveAnIdentifier>{id: 1}); // <-- more explicit
//showId({ description: "bad" }); // <-- won't work
var myObjWithDescription: IHaveIdAndMaybeDescription = {
    id: 1,
    desc: "Rock it!"
};
showDesc(myObjWithDescription);

// functions can have interfaces too 
interface IXnPlusOne {
    (r: number, xn: number): number;
}

var bifurcation: IXnPlusOne = function(r, x) {
    return  r*x*(1.0-x);
}

var r:number = 3, x:number = 0.5, idx = 0;
for (idx = 0; idx < 10; idx += 1) {
    x = bifurcation(r, x);
    console.log(x);
}

// how about functions with properties? 
interface IXnPlusOneWithCounter extends IXnPlusOne {
    counter: number;
}

var bifurcWithCnt: IXnPlusOneWithCounter = 
<IXnPlusOneWithCounter>function(r, x) {
    bifurcWithCnt.counter += 1;
    return r*x*(1.0-x);
}

bifurcWithCnt.counter = 0;

var r:number = 3.1, x:number = 0.5, idx = 0;
for (idx = 0; idx < 10; idx += 1) {
    x = bifurcWithCnt(r, x);
    console.log(bifurcWithCnt.counter + ' = ' + x);
}
