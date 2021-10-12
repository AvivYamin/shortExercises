function colorChange(color, time, callback, reject){
    
        let random = Math.floor(Math.random() * 10);
        if(random > 5){
            setTimeout(() => {
                document.body.style.backgroundColor = `${color}`;
                callback();
            }, time);
        }else{
            reject();
        }
    
};

colorChange("red", 1000, () => {
    colorChange("blue", 1000, () => {
        colorChange("yellow", 1000, () => {
            colorChange("green", 1000, () => {
                colorChange("pink", 1000, () => {
                    colorChange("white", 1000, () => {
                        colorChange("brown", 1000, () => {
                        }, () => {console.log('your last request was rejected ☹');});
                    }, () => {console.log('your request was rejected ☹');});
                }, () => {console.log('your request was rejected ☹');});
            }, () => {console.log('your request was rejected ☹');});
        }, () => {console.log('your request was rejected ☹');});
    }, () => {console.log('your request was rejected ☹');});
}, () => {console.log('your first request was rejected ☹');});