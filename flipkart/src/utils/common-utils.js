



export const addEllipsis = (text) => {
    if(text.length>70){
        return text.substring(0,70)+'...';

    }
    return text;
}