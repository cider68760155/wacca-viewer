// ==UserScript==
// @name         WACCAスコア取得
// @namespace    https://github.com/cider68760155/wacca_viewer
// @version      0.1
// @description  out the result of WACCA to console.log
// @author       cider68750155
// @match        https://wacca.marv-games.jp/web/music
// @grant        none
// ==/UserScript==

(function () {
    main();

    function crawl_result() {
        DIFFICULTY = ['NOMAL', 'HARD', 'EXPERT', 'INFERNO']
        let ret = [];
        for (let i = 0; i < $(".playdata__score-list__song-info").length; ++i) {
            let title = $('.playdata__score-list__song-info:eq(' + i + ') .playdata__score-list__song-info__name').text();
            let score = [
                $('.playdata__score-list__song-info:eq(' + i + ') .playdata__score-list__song-info__score:eq(0)').text(),
                $('.playdata__score-list__song-info:eq(' + i + ') .playdata__score-list__song-info__score:eq(1)').text(),
                $('.playdata__score-list__song-info:eq(' + i + ') .playdata__score-list__song-info__score:eq(2)').text(),
                $('.playdata__score-list__song-info:eq(' + i + ') .playdata__score-list__song-info__score:eq(3)').text()
            ]
            for (let j = 0; j < 4; ++j) {
                score[j] = Number(score[j].match(/[0-9]+/));
            }
            for (let j = 0; j < 4; ++j) {
                to_push = {}
                to_push['title'] = title;
                to_push['diff'] = DIFFICULTY[j];
                to_push['score'] = score[j];
                ret.push(to_push)
            }
        }
        return ret;
    }

    function main() {
        let song_data = crawl_result();
        console.log(JSON.stringify(song_data));
    }
})();
