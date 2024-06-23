

export function AnimClassName(name, inView){
    if( inView ){
        return name + "-on"
    }
    else{
        return name + "-off"
    }   
}
