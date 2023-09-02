

const make_shirts = (size:string = "L",defaultMessage:string ="I Love TS") => {
    if(size == "M" || size ==="L"){
        console.log(`T-Shirt Summary: Size ${size}, Message: "${defaultMessage}"`);
    }else {
        console.log(`T-Shirt Summary: Size ${size}, Message: "${defaultMessage}"`);
    }
    
}
make_shirts("s","i love red shirts");