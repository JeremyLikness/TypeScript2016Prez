(function () {
    
    var scenarios = [
        '[] + []',
        '[] - []',
        '[] + {}',
        '[] - {}',
        'Array(5).join("Cool")',
        'Array(5).join("Cool" + 1)',
        'Array(5).join("Cool" - 1)'
    ], idx, result;
    
    console.log('Wat?!');
    
    for (idx = 0; idx < scenarios.length; idx+=1 ) {
        console.log(scenarios[idx] + ' = ' + eval(scenarios[idx]));
    }
    
    result = "";
    
    for (idx = 0; idx < 5; idx++) {
        result = result + idx + ' ';
    }
    
    console.log("idx++ = " + result);
    
    result = "";
    
    for (idx = 0; idx < 5; ++idx) {
        result = result + idx + ' ';
    }
    
    console.log("++idx = " + result);
    
})();

