(function () {
    main();

    function main() {
        if (post_data.length > 0) {
            store_param();
            location.href = "index.php";
        }
        else {
            new Vue({
                el: '#app',
                vuetify: new Vuetify(),
                data() {
                    return {
                        headers: get_header(),
                        song_result: JSON.parse(localStorage.getItem('result_delta'))
                    }
                },
            })
        }
    }

    function get_header() {
        let ret = [
            { text: '曲名', value: 'title' },
            { text: '難易度', value: 'diff' },
            { text: 'スコア変動', value: 'score' },
            { text: 'Δ', value: 'delta' }
        ]
        return ret;
    }

    function store_param() {
        let result_new = []
        if (post_data.length > 0) {
            result_new = JSON.parse(decodeURI(post_data));
        }
        result_prev = []
        if (localStorage.getItem('result_data')) {
            result_prev = localStorage.getItem('result_data');
        }
        result_prev = JSON.parse(decodeURI(result_prev));
        result_delta = []
        for (let i = 0; i < result_new.length; ++i) {
            let score_prev = result_prev.find(result =>
                result.title === result_new[i]['title'] && result.diff === result_new[i]['diff']);
            console.log(score_prev)
            if (score_prev === undefined) score_prev = 0;
            else score_prev = Number(score_prev['score'])
            if (result_new[i]['score'] !== score_prev) {
                to_push = {}
                to_push['title'] = result_new[i]['title'];
                to_push['diff'] = result_new[i]['diff'];
                to_push['score'] = String(String(score_prev) + ' → ' + result_new[i]['score']);
                to_push['delta'] = '+' + String(result_new[i]['score'] - score_prev);
                result_delta.push(to_push);
            }
        }
        localStorage.setItem('result_data', JSON.stringify(result_new));
        localStorage.setItem('result_delta', JSON.stringify(result_delta));
    }
})();