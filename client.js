// *************************************
// jQuery プラグイン
// *************************************
$(function(){

    // **************************************
    // テーブルに対する処理
    // **************************************
    $("#tbl-main tr").each(function(idx){

        // **************************************
        // イベント登録
        // **************************************
        $(this).on("dblclick", function(idx){

            console.log("dblclick");

            var text = "";

            $(this).find("td").each(function(idx){
                console.log( idx + ":" + $(this).text() );

                if ( idx == 7 || idx == 8 ) {
                    text += idx + ":" + ($(this).text()).remove_number_format() + " ";
                }
                else {
                    text += idx + ":" + $(this).text() + " ";
                }
            });

            $(".result").text( text );

        });

        if ( $.isMobile ) {
            $(this).on("click", function(idx){

                var text = "";

                $(this).find("td").each(function(idx){
                    console.log( idx + ":" + $(this).text() );

                    if ( idx == 7 || idx == 8 ) {
                        text += idx + ":" + ($(this).text()).remove_number_format() + " ";
                    }
                    else {
                        text += idx + ":" + $(this).text() + " ";
                    }
                });

                $(".result").text( text );

            });
        }
        else {

            $(".table-responsive").css("overflow-x", "visible");
        }


        // **************************************
        // データ部分のフォーマットと右寄せ
        // **************************************
        $(this).find("td").each(function(idx){

            switch( idx ) {
                case 7:
                    $(this).css({"text-align": "right" });
                    $(this).text( ($(this).text()).number_format() );
                    break;
                case 8:
                    $(this).css({"text-align": "right" });
                    $(this).text( ($(this).text()).number_format() );
                    break;
            }

        });

        // **************************************
        // タイトル部分の右寄せ
        // **************************************
        $(this).find("th").each(function(idx){

            switch( idx ) {
                case 7:
                    $(this).css({"text-align": "right" });
                    break;
                case 8:
                    $(this).css({"text-align": "right" });
                    break;
            }

        });

    });

    // **************************************
    // テーブルに対する処理
    // **************************************
    $("#tbl-sub tr").each(function(idx){

        $(this).on("click", function(idx){

            console.log("click");

            var text = "";

            $(this).find("td").each(function(idx){
                console.log( idx + ":" + $(this).text() );

                text += idx + ":" + $(this).text() + " ";
            });

            $(".result").text( text );

        });

        // **************************************
        // データ部分のフォーマットと右寄せ
        // **************************************
        $(this).find("td").each(function(idx){

            switch( idx ) {
                case 7:
                    $(this).css({"text-align": "right" });
                    $(this).text( ($(this).text()).number_format() );
                    break;
                case 8:
                    $(this).css({"text-align": "right" });
                    $(this).text( ($(this).text()).number_format() );
                    break;
            }

        });

        // **************************************
        // タイトル部分の右寄せ
        // **************************************
        $(this).find("th").each(function(idx){

            switch( idx ) {
                case 7:
                    $(this).css({"text-align": "right" });
                    break;
                case 8:
                    $(this).css({"text-align": "right" });
                    break;
            }

        });

    });

});
