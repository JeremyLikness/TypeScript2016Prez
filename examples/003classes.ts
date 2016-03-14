interface INgController {
    ctrlName: string;
    save: (params:{ key: string, value: number }[]) => 
        void;
}

class Controller implements INgController {
    
    constructor(private seed: number) {
        
    }
    
    get ctrlName() {
        return 'Controller ' + this.seed;
    }
    
    save(params:{ key: string, value: number }[]): void {
        var idx: number;
        for (idx = 0; idx < params.length; idx+=1) {
            console.log(params[idx].key + ' = ' + params[idx].value);
        }
    }
    
    static $dependencies: string[] = [ 'one', 'two', 'three'];
}

function debugController(ctrl: Controller): void {
    console.log(ctrl.ctrlName);
    ctrl.save([{key: "foo", value: 1}, {key: "bar", value: 2}]);
}

var myCtrl = new Controller(5);
debugController(myCtrl);

