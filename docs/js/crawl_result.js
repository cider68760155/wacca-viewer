(function () {
    let site_url = "http://cider01.php.xdomain.jp/wacca-viewer/";
    main();

    function crawl_result() {
        DIFFICULTY = ['NORMAL', 'HARD', 'EXPERT', 'INFERNO']
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
                let to_push = {}
                to_push['title'] = title;
                to_push['diff'] = DIFFICULTY[j];
                to_push['score'] = score[j];
                ret.push(to_push)
            }
        }
        return ret;
    }

    function postForm(url, value) {

        var form = document.createElement('form');
        var request = document.createElement('input');

        form.method = 'POST';
        form.action = url;

        request.type = 'hidden'; //入力フォームが表示されないように
        request.name = 'result';
        request.value = value;

        form.appendChild(request);
        document.body.appendChild(form);

        form.submit();

    }

    function main() {
        let song_data = crawl_result();
        console.log(JSON.stringify(song_data));
        postForm(site_url + "update/index.php", JSON.stringify(song_data));
    }
})();