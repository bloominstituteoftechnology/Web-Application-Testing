export const strikeCount = (strike) => {
    if(strike < 2) {
        return strike + 1;
    } else {
        return strike - strike
    }
}