export const ballCount = (ball) => {
    if(ball < 3) {
        return ball + 1
    } else {
        return ball - ball
    }
}