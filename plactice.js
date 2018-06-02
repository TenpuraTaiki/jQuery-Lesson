// やり方が２つある。「『グーかチョキかパーかnull』ではない」という条件にするか、「グーではなく、チョキでもなく、パーでもなく、nullでもない」という条件にするか

do {
    var user_hand = prompt('グー、チョキ、パーのいずれかを入力してください');
    // if (user_hand != null && user_hand != 'グー' && user_hand != 'チョキ' && user_hand != 'パー') {
        // alert('グー・チョキ・パーのいずれかを入力してください');
    // }
    if (user_hand == null || user_hand == 'グー' || user_hand == 'チョキ' || user_hand == 'パー') {
        if (user_hand == null) {
            alert('また挑戦してね');
    
         }else{
    
                var js_hand = getJShand();
                var judge = WinLose(user_hand, js_hand);
    
                alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
    
            
         }
    } else {
        alert('グー・チョキ・パーのいずれかを入力してください');
    }
   } while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null));
// } while ((user_hand == "グー") || (user_hand == "チョキ") || (user_hand == "パー") || (user_hand == null));
//  whileの後に書くのは「繰り返す条件」なので、上記のようにしてはならない



alert('good bye!');


function getJShand() {
    var js_hand_num =Math.floor( Math.random() * 3);
    var hand;

    if (js_hand_num == 0) {
        hand = 'グー';
    }else if(js_hand_num == 1){
        hand = 'チョキ';
    }else if(js_hand_num == 2){
        hand = 'パー';
    }

    return hand;
}

function WinLose(user, js) {
    var winlosestr;

    if (user == 'グー'){
        if (js == 'グー') {
            winlosestr = 'あいこ';
        } else if(js == 'チョキ'){
            winlosestr = '勝ち';
        } else if(js == 'パー'){
            winlosestr = '負け';
        }
    } else if(user == 'チョキ'){
        if (js == 'グー') {
            winlosestr = '負け';
        } else if(js == 'チョキ'){
            winlosestr = 'あいこ';
        } else if(js == 'パー'){
            winlosestr = '勝ち';
        }
    } else if(user == 'パー'){
        if (js == 'グー') {
            winlosestr = '勝ち';
        } else if(js == 'チョキ'){
            winlosestr = '負け';
        } else if(js == 'パー'){
            winlosestr = 'あいこ';
        }
    }

    return winlosestr;
}