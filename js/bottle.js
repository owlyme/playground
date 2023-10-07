// 1元 换 1瓶
// 2空瓶 换 1瓶
// 3瓶盖 换 1瓶
// 20元 =》 ？
/**
 * 
 * @param {number} money 
 */
function canBuyFriuts(money, _emptyBottle, _emptyCap) {
    // 1. 钱 1
    // 2. 空瓶 0.5
    // 3. 瓶盖 0.33 
    if (money < 1 ) {
        return 0
    }
    
    const emptyBottle = Math.floor((money+_emptyBottle) / 2);
    const cap = Math.floor((money+_emptyCap) / 3);
    const leftEmptyBottle = (money+_emptyBottle) % 2;
    const leftCap = (money+_emptyCap) % 3;

    console.log(money, emptyBottle + cap, leftEmptyBottle, leftCap);
    
    return money + canBuyFriuts(emptyBottle + cap, leftEmptyBottle, leftCap);
}

console.log(canBuyFriuts(5, 0, 0))