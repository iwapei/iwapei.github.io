function rockpaperscissors(myhand){
    var cp_hand = Math.floor( Math.random() * 3 ) + 1;
    document.write(cp_rand);
    if(hand == 1){  //グーの場合
        if (cp_hand == 1){
            alert("相手はグーを出しました。\n引き分けです。");
        }
        else if (cp_hand == 2){
            alert("相手はチョキを出しました。\nあなたの勝ちです。");
        }
        else if(cp_hand == 3){
            alert("相手はパーを出しました。\nあなたの負けです。");
        }
    }
    else if(hand == 2){  // チョキの場合
        if (cp_hand == 1){
            alert("相手はグーを出しました。\nあなたの負けです。");
        }
        else if (cp_hand == 2){
            alert("相手はチョキを出しました。\n引き分けです。");
        }
        else if(cp_hand == 3){
            alert("相手はパーを出しました。\nあなたの勝ちです。");
        }
    }
    else if(hand == 3){    //パーの場合
        if (cp_hand == 1){
            alert("相手はグーを出しました。\nあなたの勝ちです。");
        }
        else if (cp_hand == 2){
            alert("相手はチョキを出しました。\nあなたの負けです。");
        }
        else if(cp_hand == 3){
            alert("相手はパーを出しました。\n引き分けです。");
        }
    }
}